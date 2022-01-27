const teacherController = require("./../controllers/teacherController.js");

const express = require("express");

const Router = express.Router();
//Middleware

// This middleware run only for 'id' parameter
// Router.param("id", teacherController.checkID);

// --------------------Router---------------------------

Router.route("/")
  .get(teacherController.getAllTeachers)
  .post(teacherController.checkBody, teacherController.addNewTeacher);

Router.route("/:id")
  .get(teacherController.getTeacher)
  .patch(teacherController.updateTeacher)
  .delete(teacherController.deleteTeacher);

module.exports = Router;
