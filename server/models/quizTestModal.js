const mongoose = require("mongoose");

const quizTestSchema = mongoose.Schema({
  key: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tests: [
    {
      key: {
        type: Number,
        required: true,
      },
      topic: {
        type: String,
        required: true,
      },
      subtitle: {
        type: String,
        required: true,
      },
      questions: [
        {
          key: {
            type: Number,
            required: true,
          },
          title: {
            type: String,
            required: true,
          },
          options: [
            {
              opt: {
                type: Number,
                required: true,
              },
              title: {
                type: String,
                required: true,
              },
            },
          ],
          correct: {
            type: Number,
            required: true,
          },
        },
      ],
    },
  ],
});

const quizTestModel = mongoose.model("quiztests", quizTestSchema);
module.exports = quizTestModel;