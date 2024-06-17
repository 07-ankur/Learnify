const mongoose = require("mongoose");

const quizSchema = mongoose.Schema({
  key: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  quizes: [
    {
      key: {
        type: Number,
        required: true,
      },
      topic: {
        type: String,
        required: true,
      },
      img:{
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

const quizModel = mongoose.model("quizzes", quizSchema);
module.exports = quizModel;