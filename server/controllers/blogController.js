const blogsDB = require("../models/blogModal");
const asyncHandler = require("express-async-handler");

const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await blogsDB.find();

  if (blogs.length === 0) {
    return res.status(404).json({ message: "No blogs found" });
  }

  res.json(blogs);
});

const getFilteredSortedBlogs = asyncHandler(async (req, res) => {
  const { filterCategory, sortBy } = req.query;
  let filteredBlogs;
  try {
    if (!filterCategory) {
      filteredBlogs = await blogsDB.find();
    } else {
      filteredBlogs = await blogsDB.find({ tag: filterCategory });
    }

    if (filteredBlogs.length === 0) {
      return res
        .status(404)
        .json({ message: "No blogs found with the specified tag" });
    }

    const sortedBlogs = filteredBlogs.slice().sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      if (sortBy === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });

    res.json(sortedBlogs);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = { getBlogs, getFilteredSortedBlogs };
