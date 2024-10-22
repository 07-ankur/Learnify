const userDB = require("../models/userModal");
const analyticsDB = require("../models/analyticsModal");
const tokenDB = require("../models/token");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/jwt");
const sendEmail = require("../utils/sendMail");
const crypto = require("crypto");
require("dotenv").config();

const registerUser = asyncHandler(async (req, res) => {
  const { firstname, lastname, email, password, avatar } = req.body;
  if (!firstname || !lastname || !email || !password || !avatar) {
    res.status(400);
    throw new Error("Please Enter all the details properly");
  } else {
    const findUser = await userDB.findOne({ email: email });
    if (findUser) {
      res.status(400);
      throw new Error("User already exists");
    } else {
      const salt = await bcrypt.genSalt(10);

      const newUser = new userDB({
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: await bcrypt.hash(password, salt),
        avatar: avatar,
      });
      const savedUser = await newUser.save();

      if (savedUser) {
        // Create a default analytics entry for the user
        const newAnalytics = new analyticsDB({
          userId: savedUser._id, // Associate analytics with the user's ID
          analytics: [
            { ReactJS: [{ timeRequired: "11 Hours" }, { points: 0 }, { tutorial_pts: 0 }, { quiz_pts: 0 }, { practice_pts: 0 }, { completion: 0 }, { stars: 0 }] },
            { NodeJS: [{ timeRequired: "9 Hours" }, { points: 0 }, { tutorial_pts: 0 }, { quiz_pts: 0 }, { practice_pts: 0 }, { completion: 0 }, { stars: 0 }] },
            { SQL: [{ timeRequired: "4 Hours" }, { points: 0 }, { tutorial_pts: 0 }, { quiz_pts: 0 }, { practice_pts: 0 }, { completion: 0 }, { stars: 0 }] },
            { MongoDB: [{ timeRequired: "8 Hours" }, { points: 0 }, { tutorial_pts: 0 }, { quiz_pts: 0 }, { practice_pts: 0 }, { completion: 0 }, { stars: 0 }] },
            { HTML: [{ timeRequired: "3 Hours" }, { points: 0 }, { tutorial_pts: 0 }, { quiz_pts: 0 }, { practice_pts: 0 }, { completion: 0 }, { stars: 0 }] },
            { CSS: [{ timeRequired: "4 Hours" }, { points: 0 }, { tutorial_pts: 0 }, { quiz_pts: 0 }, { practice_pts: 0 }, { completion: 0 }, { stars: 0 }] },
            { Python: [{ timeRequired: "9 Hours" }, { points: 0 }, { tutorial_pts: 0 }, { quiz_pts: 0 }, { practice_pts: 0 }, { completion: 0 }, { stars: 0 }] },
            { ExpressJS: [{ timeRequired: "8 Hours" }, { points: 0 }, { tutorial_pts: 0 }, { quiz_pts: 0 }, { practice_pts: 0 }, { completion: 0 }, { stars: 0 }] },
            { CPP: [{ timeRequired: "8 Hours" }, { points: 0 }, { tutorial_pts: 0 }, { quiz_pts: 0 }, { practice_pts: 0 }, { completion: 0 }, { stars: 0 }] },
            { Javascript: [{ timeRequired: "9 Hours" }, { points: 0 }, { tutorial_pts: 0 }, { quiz_pts: 0 }, { practice_pts: 0 }, { completion: 0 }, { stars: 0 }] }
          ]
        });

        await newAnalytics.save();

        let otp = Math.floor(100000 + Math.random() * 900000);
        otp = otp.toString().padStart(6, "0");
        const hashedOTP = crypto.createHash("sha256").update(otp.toString()).digest("hex");
        const findToken = await tokenDB.findOne({ email: savedUser.email });
        if (findToken) {
          await tokenDB.deleteOne({ email: savedUser.email });
        }
        const newToken = new tokenDB({
          firstname: savedUser.firstname,
          lastname: savedUser.lastname,
          email: savedUser.email,
          avatar: savedUser.avatar,
          token: hashedOTP,
          createdAt: Date.now(),
          expiresAt: Date.now() + 30 * (60 * 1000),
        });
        const savedToken = await newToken.save();
        const message = `<h1>Thank you for signing up on Learnify</h1>
                <h4 style='font-size:24px;'>Here is your otp for email verification. </h4>
                <h2 style="text-align:center;"> ${otp}</h2>`;
        const subject = "OTP for email verification";
        const send_to = email;
        const sent_from = process.env.EMAIL;

        await sendEmail(subject, message, send_to, sent_from);
        if (savedToken) {
          res
            .status(200)
            .json({ message: "Saved Successfully. Please verify otp" });
        } else {
          res.status(500);
          throw new Error("Error in generating otp");
        }
      } else {
        res.status(500);
        throw new Error("Error in saving user");
      }
    }
  }
});

const resendOTP = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const findToken = await tokenDB.findOne({ email: email });
  if (findToken) {
    await tokenDB.deleteOne({ email: email });
  }
  let otp = Math.floor(100000 + Math.random() * 900000);
  otp = otp.toString().padStart(6, "0");
  const hashedOTP = crypto
    .createHash("sha256")
    .update(otp.toString())
    .digest("hex");
  const newToken = new tokenDB({
    email: email,
    token: hashedOTP,
    createdAt: Date.now(),
    expiresAt: Date.now() + 30 * (60 * 1000),
  });
  const savedToken = await newToken.save();
  const message = `<h1>Thank you for signing up on Learnify </h1>
                    <h4 style='font-size:24px;'>Your new otp for email verification. </h4>
                    <h2 style="text-align:center;"> ${otp}</h2>
                    `;
  const subject = "OTP for email verification";
  const send_to = email;
  const sent_from = process.env.EMAIL;
  await sendEmail(subject, message, send_to, sent_from);
  if (savedToken) {
    res.status(200).json({ message: "Saved Successfully. Please verify otp" });
  } else {
    res.status(500);
    throw new Error("Error in generating otp");
  }
});

const verifyOtp = asyncHandler(async (req, res) => {
  const { otp, email } = req.body;
  console.log(req.body);
  if (!otp) {
    res.status(500);
    throw new Error("Please enter the details properly");
  } else {
    const hashedOTP = crypto
      .createHash("sha256")
      .update(otp.toString())
      .digest("hex");
    const findToken = await tokenDB.findOne({ token: hashedOTP });

    if (findToken) {
      const userUpdate = await userDB.findOneAndUpdate(
        { email: email },
        {
          isVerified: true,
        },
        { new: true }
      );
      if (userUpdate) {
        await tokenDB.findOneAndDelete({ token: hashedOTP });

        res.status(200).json({ message: "User Verified Successfully" });
      } else {
        res.status(500);
        throw new Error("Error in updating state of the user");
      }
    } else {
      res.status(400);
      throw new Error("Token expired or invalid");
    }
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    res.status(400);
    throw new Error("Please enter all the details properly");
  } else {
    const findUser = await userDB.findOne({ email: email });
    if (findUser) {
      console.log(findUser);
      const comparePassword = await bcrypt.compare(password, findUser.password);
      console.log(comparePassword);
      if (comparePassword) {
        const token = generateToken(findUser); // Generate token with user details
        res
          .status(200)
          .json({ message: "Login successful", user: findUser, token: token });
      } else {
        res.status(404);
        throw new Error("Password incorrect");
      }
    } else {
      res.status(404);
      throw new Error("User not found. Please register");
    }
  }
});

const forgotPassword = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    res.status(400);
    throw new Error("Please enter all the details properly");
  } else {
    const findUser = await userDB.findOne({ email: email });
    if (findUser) {
      const salt = await bcrypt.genSalt(10);
      const updatePassword = {
        password: await bcrypt.hash(password, salt),
      };
      const updatedUser = await userDB.findOneAndUpdate(
        { email: email },
        updatePassword,
        { new: true }
      );

      if (updatedUser) {
        console.log(updatedUser);
        res
          .status(200)
          .json({ message: "Successfully updated password", updatedUser });
      } else {
        res.status(500);
        throw new Error("Error in updating password");
      }
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  }
});

module.exports = {
  registerUser,
  loginUser,
  verifyOtp,
  resendOTP,
  forgotPassword,
};
