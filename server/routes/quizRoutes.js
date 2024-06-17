const router = require("express").Router();
const { getQuizes, getQuizesTopics } = require("../controllers/quizController");

router.get("/getquizes/:title/:topic", getQuizes);
router.get("/getquizesTopics/:title", getQuizesTopics);

module.exports = router;
