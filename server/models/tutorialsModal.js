const mongoose = require("mongoose");

const sectionSchema = mongoose.Schema(
  {
    key: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
    },
    content: {
      type: String,
    },
    divider: {
      type: String,
    }
  }
);

const tutorialSchema = mongoose.Schema(
  {
    key: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    tutorials: [
      {
        key: {
          type: Number,
          required: true,
        },
        topic: {
          type: String,
          required: true,
        },
        sections: [sectionSchema], 
        users: [
          {
            type: String, 
            required: true
          }
        ],
      }
    ]
  }
);

const tutorialModel = mongoose.model("tutorials", tutorialSchema);
module.exports = tutorialModel;
