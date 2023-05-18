const mongoose = require("mongoose");

const ArticleSchema = new mongoose.Schema({
  title: String, // String is shorthand for {type: String}
  author: String,
  content: String,
  date: { type: Date, default: Date.now },
  meta: {
    votes: Number,
    favs: Number,
  },
});

module.exports = mongoose.model("Article", ArticleSchema);
