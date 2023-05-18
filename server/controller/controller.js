const Article = require("../models/models");

exports.addArticle = async (req, res) => {
  try {
    const article = await Article.create(req.body);
    return res.status(201).json({
      created: "success",
      data: article,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);
      return res.status(400).json({
        success: false,
        data: req.body,
        error: messages,
      });
    } else {
      console.log(err);
      return res.status(500).json({
        success: false,
        error: "Server Error",
      });
    }
  }
};

exports.getAllArticles = async (req, res) => {
  try {
    const article = await Article.find();
    return res.status(200).json({
      staus: "success",
      count: article.length,
      data: article,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err,
    });
  }
};
