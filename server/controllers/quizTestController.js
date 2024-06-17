const quizTestsDB = require("../models/quizTestModal");
const asyncHandler = require("express-async-handler");

const getQuizTests = asyncHandler(async (req, res) => {
  const { title, topic } = req.params;
  const quizes = await quizTestsDB.find({ title });
  if (quizes.length === 0) {
    return res.status(404).json({ message: "No quizes found" });
  }

  const filteredQuizes = quizes.flatMap((quiz) => {
    return quiz.tests
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

const getQuizTestsDetails = asyncHandler(async (req, res) => {
  const { title } = req.params;
  const quizes = await quizTestsDB.find({ title });

  if (quizes.length === 0) {
    return res.status(404).json({ message: "No quizes found" });
  }

  const topics = quizes.flatMap((quiz) => quiz.tests.map((t) => ({
    topic: t.topic,
    count: t.count,
    time: t.time,
    marks: t.marks,
  })));

  res.json(topics);
});

module.exports = { getQuizTests, getQuizTestsDetails };  
