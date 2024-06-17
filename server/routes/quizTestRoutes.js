const router = require("express").Router();
const { getQuizTests, getQuizTestsDetails } = require("../controllers/quizTestController");

router.get("/getquizTests/:title/:topic", getQuizTests);
router.get("/getquizTestsDetails/:title", getQuizTestsDetails);

module.exports = router;
