const fs = require("fs");
const express = require("express");

// Read Teachers Data
const teachers = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/teachersData.json`)
);

// ------------------RouterHandler------------------------

// Get all Teacher
const getAllTeachers = (req, res) => {
  console.log(teachers);
  res.status(200).json({
    status: "success",
    results: teachers.length,
    data: {
      teachers,
    },
  });
};

// Get Single Teacher based on teacherID
const getTeacher = (req, res) => {
  // Convert id from string to number
  const id = req.params.id * 1;

  const teacher = teachers.find((teacher) => teacher.teacherID === id);
  if (!teacher) {
    return res.status(404).json({
      status: "failed",
      message: "Invalid ID",
    });
  }
  res.status(200).json({
    status: "success",
    data: {
      teacher,
    },
  });
};

// Add new Teacher
const addNewTeacher = (req, res) => {
  console.log(req.body);
  const newID = teachers[teachers.length - 1].teacherID + 1;
  console.log(newID);
  const newTeacher = Object.assign({ teacherID: newID }, req.body);
  teachers.push(newTeacher);
  fs.writeFile(
    "./dev-data/teachersData.json",
    JSON.stringify(teachers),
    (err) => {
      res.status(201).json({
        status: "success",
        data: {
          teacher: newTeacher,
        },
      });
    }
  );
};

// Update Teacher data

const updateTeacher = (req, res) => {
  if (req.params.id * 1 > teachers.length) {
    return res.status(404).json({
      status: "failed",
      message: "Invalid ID",
    });
  }
  res.status(202).json({
    status: "success",
    data: {
      teacher: "<updated Data>....",
    },
  });
};

// Delete teacher data

const deleteTeacher = (req, res) => {
  if (req.params.id * 1 > teachers.length) {
    return res.status(404).json({
      status: "failed",
      message: "Invalid ID",
    });
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
};

// --------------------Router---------------------------

const Router = express.Router();

Router.route("/").get(getAllTeachers).post(addNewTeacher);

Router.route("/:id").get(getTeacher).patch(updateTeacher).delete(deleteTeacher);

module.exports = Router;
