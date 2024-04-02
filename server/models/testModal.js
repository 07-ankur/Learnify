const mongoose = require("mongoose");

const testSchema = mongoose.Schema({
  userId: {
    type: String,
    default: null,
  },
  

});

const testModel = mongoose.model("blogs", testSchema);
module.exports = testModel;
