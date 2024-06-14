const tutorialsDB = require("../models/tutorialsModal");
const asyncHandler = require("express-async-handler");

// Function to get a specific tutorial topic by title and topic name
const getTutorials = asyncHandler(async (req, res) => {
  const { title, topic } = req.params;
  const tutorials = await tutorialsDB.find({ title });

  if (tutorials.length === 0) {
    return res.status(404).json({ message: "No tutorials found" });
  }

  const filteredTutorials = tutorials.flatMap((tutorial) => {
    const tutorialsWithTopic = tutorial.tutorials.filter((t) => t.topic === topic);
    return tutorialsWithTopic.map((t) => ({
      _id: tutorial._id,
      key: tutorial.key,
      title: tutorial.title,
      tutorial: t,
    }));
  });

  if (filteredTutorials.length === 0) {
    return res.status(404).json({ message: "No tutorials found for the specified topic" });
  }

  res.json(filteredTutorials[0].tutorial);
});

// Function to get all topic names under a given tutorial title
const getTutorialsTopics = asyncHandler(async (req, res) => {
  const { title } = req.params;
  const tutorials = await tutorialsDB.find({ title });

  if (tutorials.length === 0) {
    return res.status(404).json({ message: "No tutorials found" });
  }

  const topics = tutorials.flatMap((tutorial) =>
    tutorial.tutorials.map((t) => t.topic)
  );

  res.json(topics);
});

module.exports = { getTutorials, getTutorialsTopics };
