const router = require("express").Router();
const {
  registerUser,
  loginUser,
  verifyOtp,
  resendOTP,
  forgotPassword
} = require("../controllers/authController");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/verifyotp", verifyOtp);
router.post("/resendotp", resendOTP);
router.post("/forgotpassword", forgotPassword);

module.exports = router;
