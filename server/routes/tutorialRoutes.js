const router = require("express").Router();
const { getTutorials } = require("../controllers/tutorialController");

// Define route with dynamic parameters ':title' and ':topic'
router.get("/gettutorials/:title/:topic", getTutorials);

module.exports = router;