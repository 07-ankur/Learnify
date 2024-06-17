const quizDB = require("../models/quizModal");
const asyncHandler = require("express-async-handler");

const getQuizes = asyncHandler(async (req, res) => {
  const { title, topic } = req.params;
  const quizes = await quizDB.find({ title });

  if (quizes.length === 0) {
    return res.status(404).json({ message: "No quizes found" });
  }

  const filteredQuizes = quizes.flatMap((quiz) => {
    return quiz.quizes
      .filter((t) => t.topic === topic)
      .map((t) => ({
        _id: quiz._id,
        key: quiz.key,
        title: quiz.title,
        quiz: t,
      }));
  });

  if (filteredQuizes.length === 0) {
    return res.status(404).json({ message: "No quizes found for the specified topic" });
  }

  res.json(filteredQuizes[0].quiz.questions);
});

const getQuizesTopics = asyncHandler(async (req, res) => {
  const { title } = req.params;
  const quizes = await quizDB.find({ title });

  if (quizes.length === 0) {
    return res.status(404).json({ message: "No quizes found" });
  }

  const topics = quizes.flatMap((quiz) => quiz.quizes.map((t) => ({
    topic: t.topic,
    img: t.img
  })));

  res.json({ topics });
});

module.exports = { getQuizes, getQuizesTopics };
