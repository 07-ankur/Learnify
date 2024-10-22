const analyticsDB = require("../models/analyticsModal");
const asyncHandler = require("express-async-handler");

const getAnalytics = asyncHandler(async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "User ID not found" });
    }

    const userAnalytics = await analyticsDB.findOne({ userId });

    if (!userAnalytics) {
      return res.status(404).json({ message: "Analytics data not found for this user" });
    }

    res.status(200).json(userAnalytics);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
});

module.exports = getAnalytics;
