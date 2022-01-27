const studentController = require("./../controllers/studentController");
const express = require("express");

const Router = express.Router();

Router.route("/")
  .get(studentController.getAllStudents)
  .post(studentController.addNewStudent);

Router.route("/:id")
  .get(studentController.getStudent)
  .patch(studentController.updateStudent)
  .delete(studentController.deleteStudent);

module.exports = Router;
