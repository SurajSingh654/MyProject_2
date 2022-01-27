const questionController = require("./../controllers/questionController.js");
const express = require("express");

// questionsHandler

const Router = express.Router();

Router.route("/")
  .get(questionController.getAllQuestions)
  .post(questionController.addNewQuestion);

Router.route("/:id")
  .get(questionController.getQuestion)
  .patch(questionController.updateQuestion)
  .delete(questionController.deleteQuestion);

module.exports = Router;
