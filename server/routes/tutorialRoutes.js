const router = require("express").Router();
const { getTutorials, getTutorialsTopics, getTutorialCompletion, postTutorialCompletion } = require("../controllers/tutorialController");

router.get("/gettutorials/:title/:topic", getTutorials);
router.get("/gettutorialsTopics/:title", getTutorialsTopics);
router.get("/getcompletionTutorial/:title/:topic", getTutorialCompletion);
router.post("/postcompletionTutorial", postTutorialCompletion);

module.exports = router;
