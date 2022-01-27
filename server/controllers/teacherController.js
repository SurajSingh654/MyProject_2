const fs = require("fs");
const Teacher = require("./../models/teacherModel.js");

// Read Teachers Data
const teachers = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/teachersData.json`)
);

exports.checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.teacherID) {
    return res.status(400).json({
      status: "fail",
      message: "missing name or id",
    });
  }
  next();
};

// exports.checkID = (req, res, next, val) => {
//   console.log(`Route id is ${val}`);
//   if (val > teachers.length) {
//     return res.status(404).json({
//       status: "failed",
//       message: "Invalid ID",
//     });
//   }
//   next();
// };

// ------------------RouterHandler------------------------

// Get all Teacher
exports.getAllTeachers = (req, res) => {
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
exports.getTeacher = (req, res) => {
  // Convert id from string to number
  const id = req.params.id * 1;

  const teacher = teachers.find((teacher) => teacher.teacherID === id);

  res.status(200).json({
    status: "success",
    data: {
      teacher,
    },
  });
};

// Add new Teacher
exports.addNewTeacher = (req, res) => {
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

exports.updateTeacher = (req, res) => {
  res.status(202).json({
    status: "success",
    data: {
      teacher: "<updated Data>....",
    },
  });
};

// Delete teacher data

exports.deleteTeacher = (req, res) => {
  res.status(204).json({
    status: "success",
    data: null,
  });
};
