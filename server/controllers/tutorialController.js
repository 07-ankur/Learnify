const tutorialsDB = require("../models/tutorialsModal");
const asyncHandler = require("express-async-handler");

const getTutorials = asyncHandler(async (req, res) => {
  const { title, topic } = req.params;
  const tutorials = await tutorialsDB.find({ title });

  if (tutorials.length === 0) {
    return res.status(404).json({ message: "No tutorials found" });
  }

  const filteredTutorials = tutorials.flatMap((tutorial) => {
    const tutorialsWithTopic = tutorial.tutorials.filter(
      (t) => t.topic === topic
    );
    return tutorialsWithTopic.map((t) => ({
      _id: tutorial._id,
      key: tutorial.key,
      title: tutorial.title,
      tutorial: t,
    }));
  });

  res.json(filteredTutorials[0].tutorial);
});

module.exports = { getTutorials };