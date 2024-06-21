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

  if (filteredTutorials.length === 0) {
    return res
      .status(404)
      .json({ message: "No tutorials found for the specified topic" });
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

const postTutorialCompletion = asyncHandler(async (req, res) => {
  const { userID, title, topic, completion } = req.body;

  if (!userID || !title || !topic || completion === undefined) {
    res.status(400);
    throw new Error("Please enter all the details properly");
  }

  // Find the tutorial by title and topic
  const tutorial = await tutorialsDB.findOne({ title });

  if (tutorial) {
    const tutorialTopic = tutorial.tutorials.find((t) => t.topic === topic);

    if (tutorialTopic) {
      if (completion) {
        // Check if userID is already in the users array
        if (!tutorialTopic.users.includes(userID)) {
          tutorialTopic.users.push(userID);
          await tutorial.save();
          res.status(200).json({ message: "User added to the tutorial completion list" });
        } else {
          res.status(400).json({ message: "User has already completed this tutorial" });
        }
      } else {
        // Remove the userID from the users array if it exists
        if (tutorialTopic.users.includes(userID)) {
          tutorialTopic.users = tutorialTopic.users.filter(user => user !== userID);
          await tutorial.save();
          res.status(200).json({ message: "User removed from the tutorial completion list" });
        } else {
          res.status(400).json({ message: "User has not completed this tutorial" });
        }
      }
    } else {
      res.status(404).json({ message: "No tutorial found for the specified topic" });
    }
  } else {
    res.status(404).json({ message: "No tutorial found for the specified title" });
  }
});

const getTutorialCompletion = asyncHandler(async (req, res) => {
  const { title, topic } = req.params;

  if (!title || !topic) {
    res.status(400);
    throw new Error("Please enter all the details properly");
  }

  // Find the tutorial by title
  const tutorial = await tutorialsDB.findOne({ title });

  if (tutorial) {
    const tutorialTopic = tutorial.tutorials.find((t) => t.topic === topic);

    if (tutorialTopic) {
      res.status(200).json({ users: tutorialTopic.users });
    } else {
      res.status(404).json({ message: "No tutorial found for the specified topic" });
    }
  } else {
    res.status(404).json({ message: "No tutorial found for the specified title" });
  }
});

module.exports = { getTutorials, getTutorialsTopics, postTutorialCompletion, getTutorialCompletion };
