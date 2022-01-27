const classController = require("./../controllers/classController");
const express = require("express");

// classesHandler

const Router = express.Router();

Router.route("/")
  .get(classController.getAllClasses)
  .post(classController.addNewClass);

Router.route("/:id")
  .get(classController.getClass)
  .patch(classController.updateClass)
  .delete(classController.deleteClass);

module.exports = Router;
