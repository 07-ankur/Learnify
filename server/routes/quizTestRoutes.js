const router = require("express").Router();
const { getQuizTests, getQuizTestsTopics } = require("../controllers/quizTestController");

router.get("/getquizTests/:title/:topic", getQuizTests);
router.get("/getquizTestsTopics/:title", getQuizTestsTopics);

module.exports = router;
