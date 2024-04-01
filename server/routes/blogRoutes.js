const router = require("express").Router();
const { getBlogs, getFilteredSortedBlogs } = require("../controllers/blogController");

router.get("/getblogs", getBlogs);
router.get("/getfilteredsortedblogs",getFilteredSortedBlogs)

module.exports = router;
