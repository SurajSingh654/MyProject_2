const fs = require("fs");
const express = require("express");

// classesHandler

// get AllClasses
const getAllClasses = (req, res) => {
  res.status(404).json({
    status: "request fail",
    message: "<Not yet implemented>...",
  });
};

// get Class
const getClass = (req, res) => {
  res.status(404).json({
    status: "request fail",
    message: "<Not yet implemented>...",
  });
};

// add New Class

const addNewClass = (req, res) => {
  res.status(404).json({
    status: "request fail",
    message: "<Not yet implemented>...",
  });
};

// update Class

const updateClass = (req, res) => {
  res.status(404).json({
    status: "request fail",
    message: "<Not yet implemented>...",
  });
};

// delete Class
const deleteClass = (req, res) => {
  res.status(404).json({
    status: "request fail",
    message: "<Not yet implemented>...",
  });
};

const Router = express.Router();

Router.route("/").get(getAllClasses).post(addNewClass);

Router.route("/:id").get(getClass).patch(updateClass).delete(deleteClass);

module.exports = Router;
