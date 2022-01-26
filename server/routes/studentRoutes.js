const fs = require("fs");
const express = require("express");

// StudentHandler

// get All Students
const getAllStudents = (req, res) => {
  res.status(404).json({
    status: "request fail",
    message: "<Not yet implemented>...",
  });
};

// get Student
const getStudent = (req, res) => {
  res.status(404).json({
    status: "request fail",
    message: "<Not yet implemented>...",
  });
};

// add New Student

const addNewStudent = (req, res) => {
  res.status(404).json({
    status: "request fail",
    message: "<Not yet implemented>...",
  });
};

// update Student

const updateStudent = (req, res) => {
  res.status(404).json({
    status: "request fail",
    message: "<Not yet implemented>...",
  });
};

// delete Student
const deleteStudent = (req, res) => {
  res.status(404).json({
    status: "request fail",
    message: "<Not yet implemented>...",
  });
};

const Router = express.Router();

Router.route("/").get(getAllStudents).post(addNewStudent);

Router.route("/:id").get(getStudent).patch(updateStudent).delete(deleteStudent);

module.exports = Router;
