const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
      unique: true,
    },
    img: {
      type: String,
      require: true,
      default: "",
    },
    desc: {
      type: String,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", PostSchema);
