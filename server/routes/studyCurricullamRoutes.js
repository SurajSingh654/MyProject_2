const fs = require("fs");
const express = require("express");

// studyCurricullamHandler

// get All StudyCurricullam
const getAllStudyCurricullam = (req, res) => {
  res.status(404).json({
    status: "request fail",
    message: "<Not yet implemented>...",
  });
};

// get StudyCurricullam
const getStudyCurricullam = (req, res) => {
  res.status(404).json({
    status: "request fail",
    message: "<Not yet implemented>...",
  });
};

// add New StudyCurricullam

const addNewStudyCurricullam = (req, res) => {
  res.status(404).json({
    status: "request fail",
    message: "<Not yet implemented>...",
  });
};

// update StudyCurricullam

const updateStudyCurricullam = (req, res) => {
  res.status(404).json({
    status: "request fail",
    message: "<Not yet implemented>...",
  });
};

// delete StudyCurricullam
const deleteStudyCurricullam = (req, res) => {
  res.status(404).json({
    status: "request fail",
    message: "<Not yet implemented>...",
  });
};

const Router = express.Router();

Router.route("/").get(getAllStudyCurricullam).post(addNewStudyCurricullam);

Router.route("/:id")
  .get(getStudyCurricullam)
  .patch(updateStudyCurricullam)
  .delete(deleteStudyCurricullam);

module.exports = Router;
