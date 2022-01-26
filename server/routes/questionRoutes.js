const fs = require("fs");
const express = require("express");

// questionsHandler

// get AllQuestions
const getAllQuestions = (req, res) => {
  res.status(404).json({
    status: "request fail",
    message: "<Not yet implemented>...",
  });
};

// get Question
const getQuestion = (req, res) => {
  res.status(404).json({
    status: "request fail",
    message: "<Not yet implemented>...",
  });
};

// add New Question

const addNewQuestion = (req, res) => {
  res.status(404).json({
    status: "request fail",
    message: "<Not yet implemented>...",
  });
};

// update Question

const updateQuestion = (req, res) => {
  res.status(404).json({
    status: "request fail",
    message: "<Not yet implemented>...",
  });
};

// delete Question
const deleteQuestion = (req, res) => {
  res.status(404).json({
    status: "request fail",
    message: "<Not yet implemented>...",
  });
};

const Router = express.Router();

Router.route("/").get(getAllQuestions).post(addNewQuestion);

Router.route("/:id")
  .get(getQuestion)
  .patch(updateQuestion)
  .delete(deleteQuestion);

module.exports = Router;
