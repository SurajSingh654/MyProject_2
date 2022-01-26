const express = require("express");
const morgan = require("morgan");
const teacherRouter = require("./routes/teacherRoutes.js");
const studentRouter = require("./routes/studentRoutes.js");
const studyCurricullamRouter = require("./routes/studyCurricullamRoutes.js");
const questionRouter = require("./routes/questionRoutes.js");
const classRouter = require("./routes/classRoutes.js");

const app = express();

//Middlewares

//Concise output colored by response status for development use. The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes. :method :url :status :response-time ms - :res[content-length]
app.use(morgan("dev"));
// Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option.
app.use(express.json());

// Own middleware
app.use((req, res, next) => {
  console.log("Hello from middleware🤗");
  req.requestTime = new Date().toISOString();
  next();
});

// Routes

// The app.route() function returns an instance of a single route, which you can then use to handle HTTP verbs with optional middleware. Use app.route() to avoid duplicate route names

// questionsRouting

// classesRouting

app.use("/api/v1/teachers", teacherRouter);
app.use("/api/v1/students", studentRouter);
app.use("/api/v1/studyCurricullam", studyCurricullamRouter);
app.use("/api/v1/questions", questionRouter);
app.use("/api/v1/classes", classRouter);

// Starts Server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
