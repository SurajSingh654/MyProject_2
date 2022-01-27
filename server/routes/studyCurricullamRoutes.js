const studyCurricullamController = require("./../controllers/studyCurricullamController.js");
const express = require("express");

// studyCurricullamHandler

const Router = express.Router();

Router.route("/")
  .get(studyCurricullamController.getAllStudyCurricullam)
  .post(studyCurricullamController.addNewStudyCurricullam);

Router.route("/:id")
  .get(studyCurricullamController.getStudyCurricullam)
  .patch(studyCurricullamController.updateStudyCurricullam)
  .delete(studyCurricullamController.deleteStudyCurricullam);

module.exports = Router;
