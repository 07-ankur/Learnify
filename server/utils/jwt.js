const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateToken = (user) => {
  // Extract required user details
  const { _id, firstname, lastname, email } = user;

  // Generate token with user details in the payload
  return (token = jwt.sign(
    { _id, firstname, lastname, email },
    process.env.JWTSECRET,
    {
      expiresIn: "30d",
    }
  ));
};

module.exports = generateToken;
