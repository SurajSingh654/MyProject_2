import express from "express";
import fs from "fs";
const app = express();

//Routing

// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Hello From the Server Side!",
//     app: "FeedbackForm",
//     httpMethod: "Get",
//   });
// });
// app.post("/", (req, res) => {
//   res.status(200).json({
//     message: "Hello From the Server Side!",
//     app: "FeedbackForm",
//     httpMethod: "Post",
//   });
// });

// Read Teachers Data
const teachers = JSON.parse(fs.readFileSync("./dev-data/teachersData.json"));

// API request

app.get("/api/v1/teachers", (req, res) => {
  res.status(200).json({
    status: "success",
    results: teachers.length,
    data: {
      teachers,
    },
  });
});

app.post("/api/v1/teachers", (req, res) => {
  console.log("Data Arrrived!");
  res.status(200).json({
    status: "success",
    data: {
      teachers,
    },
  });
});

// listening Server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
