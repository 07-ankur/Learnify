const mongoose = require("mongoose");

const blogSchema = mongoose.Schema(
  {
    key: {
      type: Number,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true, 
    },
    content: [
      {
        key: {
          type: Number,
          required: true,
        },
        subtitle: {
          type: String,
        },
        para: {
          type: String,
        },
      },
    ],
  }
);

const blogModel = mongoose.model("blogs", blogSchema);
module.exports = blogModel;
