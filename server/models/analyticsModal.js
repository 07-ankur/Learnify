const mongoose = require("mongoose");

const analyticsSchema = mongoose.Schema({
  userId: {
    type: String,
    default: null,
  },
  analytics: [
    {
      ReactJS: [
        { timeRequired: { type: String, default: "11 Hours" } },
        {
          points: Number,
          default: 0,
        },
        {
          tutorial_pts: Number,
          default: 0,
        },
        {
          quiz_pts: Number,
          default: 0,
        },
        {
          practice_pts: Number,
          default: 0,
        },
        {
          completion: Number,
          default: 0,
        },
        {
          stars: Number,
          default: 0,
        },
      ],
    },
    {
      NodeJS: [
        { timeRequired: { type: String, default: "9 Hours" } },
        {
          points: Number,
          default: 0,
        },
        {
          tutorial_pts: Number,
          default: 0,
        },
        {
          quiz_pts: Number,
          default: 0,
        },
        {
          practice_pts: Number,
          default: 0,
        },
        {
          completion: Number,
          default: 0,
        },
        {
          stars: Number,
          default: 0,
        },
      ],
    },
    {
      SQL: [
        { timeRequired: { type: String, default: "4 Hours" } },
        {
          points: Number,
          default: 0,
        },
        {
          tutorial_pts: Number,
          default: 0,
        },
        {
          quiz_pts: Number,
          default: 0,
        },
        {
          practice_pts: Number,
          default: 0,
        },
        {
          completion: Number,
          default: 0,
        },
        {
          stars: Number,
          default: 0,
        },
      ],
    },
    {
      MongoDB: [
        { timeRequired: { type: String, default: "8 Hours" } },
        {
          points: Number,
          default: 0,
        },
        {
          tutorial_pts: Number,
          default: 0,
        },
        {
          quiz_pts: Number,
          default: 0,
        },
        {
          practice_pts: Number,
          default: 0,
        },
        {
          completion: Number,
          default: 0,
        },
        {
          stars: Number,
          default: 0,
        },
      ],
    },
    {
      HTML: [
        { timeRequired: { type: String, default: "3 Hours" } },
        {
          points: Number,
          default: 0,
        },
        {
          tutorial_pts: Number,
          default: 0,
        },
        {
          quiz_pts: Number,
          default: 0,
        },
        {
          practice_pts: Number,
          default: 0,
        },
        {
          completion: Number,
          default: 0,
        },
        {
          stars: Number,
          default: 0,
        },
      ],
    },
    {
      CSS: [
        { timeRequired: { type: String, default: "4 Hours" } },
        {
          points: Number,
          default: 0,
        },
        {
          tutorial_pts: Number,
          default: 0,
        },
        {
          quiz_pts: Number,
          default: 0,
        },
        {
          practice_pts: Number,
          default: 0,
        },
        {
          completion: Number,
          default: 0,
        },
        {
          stars: Number,
          default: 0,
        },
      ],
    },
    {
      Python: [
        { timeRequired: { type: String, default: "9 Hours" } },
        {
          points: Number,
          default: 0,
        },
        {
          tutorial_pts: Number,
          default: 0,
        },
        {
          quiz_pts: Number,
          default: 0,
        },
        {
          practice_pts: Number,
          default: 0,
        },
        {
          completion: Number,
          default: 0,
        },
        {
          stars: Number,
          default: 0,
        },
      ],
    },
    {
      ExpressJS: [
        { timeRequired: { type: String, default: "8 Hours" } },
        {
          points: Number,
          default: 0,
        },
        {
          tutorial_pts: Number,
          default: 0,
        },
        {
          quiz_pts: Number,
          default: 0,
        },
        {
          practice_pts: Number,
          default: 0,
        },
        {
          completion: Number,
          default: 0,
        },
        {
          stars: Number,
          default: 0,
        },
      ],
    },
    {
      CPP: [
        { timeRequired: { type: String, default: "8 Hours" } },
        {
          points: Number,
          default: 0,
        },
        {
          tutorial_pts: Number,
          default: 0,
        },
        {
          quiz_pts: Number,
          default: 0,
        },
        {
          practice_pts: Number,
          default: 0,
        },
        {
          completion: Number,
          default: 0,
        },
        {
          stars: Number,
          default: 0,
        },
      ],
    },
    {
      Javascript: [
        { timeRequired: { type: String, default: "9 Hours" } },
        {
          points: Number,
          default: 0,
        },
        {
          tutorial_pts: Number,
          default: 0,
        },
        {
          quiz_pts: Number,
          default: 0,
        },
        {
          practice_pts: Number,
          default: 0,
        },
        {
          completion: Number,
          default: 0,
        },
        {
          stars: Number,
          default: 0,
        },
      ],
    },
  ],
});

const analyticsModel = mongoose.model("analytics", analyticsSchema);
module.exports = analyticsModel;
