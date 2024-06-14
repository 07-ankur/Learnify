const router = require("express").Router();
const { getTutorials, getTutorialsTopics } = require("../controllers/tutorialController");

router.get("/gettutorials/:title/:topic", getTutorials);
router.get("/gettutorialsTopics/:title", getTutorialsTopics);

module.exports = router;
