import express from "express";
import fs from "fs";
import url from "url";
const app = express();

//Routing

// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(express.json());

// Read Teachers Data
const teachers = JSON.parse(fs.readFileSync("./dev-data/teachersData.json"));

// Get all Teacher

const getAllTeachers = (req, res) => {
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
// API request

// app.get("/api/v1/teachers", getAllTeachers);
// app.get("/api/v1/teachers/:id", getTeacher);
// app.post("/api/v1/teachers", addNewTeacher);
// app.patch("/api/v1/teachers/:id", updateTeacher);
// app.delete("/api/v1/teachers/:id", deleteTeacher);

// The app.route() function returns an instance of a single route, which you can then use to handle HTTP verbs with optional middleware. Use app.route() to avoid duplicate route names
app.route("/api/v1/teachers").get(getAllTeachers).post(addNewTeacher);

app
  .route("/api/v1/teachers/:id")
  .get(getTeacher)
  .patch(updateTeacher)
  .delete(deleteTeacher);
// listening Server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
