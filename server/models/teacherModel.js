const mongoose = require("mongoose");
const teacherSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "FirstName must be present"],
  },
  middleName: {
    type: String,
    default: "",
  },
  lastName: {
    type: String,
    required: [true, "LastName must be present"],
  },
  emailId: {
    type: String,
    required: [true, "EmailId must be present"],
    unique: true,
  },
  address: String,
  gender: {
    type: String,
    required: [true, "Gender must be present"],
  },
  dob: {
    type: Date,
  },
});

const Teacher = mongoose.model("Teacher", teacherSchema);

module.exports = Teacher;
