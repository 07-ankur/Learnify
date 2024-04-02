const mongoose = require("mongoose");

const analyticsSchema = mongoose.Schema({
  userId: {
    type: String,
    default: null,
  },
  analytics: [
    {
      ReactJS: [
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
