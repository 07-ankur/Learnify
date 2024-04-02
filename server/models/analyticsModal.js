const mongoose = require("mongoose");

const analyticsSchema = mongoose.Schema({
  userId: {
    type: String,
    default: null,
  },
  analytics: [
    {
      ReactJS: [
        { timeRequired: "11 Hours" },
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
        { timeRequired: "9 Hours" },
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
        { timeRequired: "4 Hours" },
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
        { timeRequired: "8 Hours" },
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
        { timeRequired: "3 Hours" },
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
        { timeRequired: "4 Hours" },
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
        { timeRequired: "9 Hours" },
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
        { timeRequired: "8 Hours" },
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
        { timeRequired: "8 Hours" },
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
        { timeRequired: "9 Hours" },
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

const analyticsModel = mongoose.model("blogs", analyticsSchema);
module.exports = analyticsModel;
