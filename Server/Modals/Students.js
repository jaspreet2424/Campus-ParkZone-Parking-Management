const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  CRN: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
  },
  token: {
    type: String,
  },
  isVerified: {
    type: String,
    default: false,
  },
  fatherName: {
    type: String,
  },
  gender: {
    type: String,
  },
  dob: {
    type: String,
  },
  program: {
    type: String,
  },
  year : {
    type : String,
  },
  branch: {
    type: String,
  },
  URN: {
    type: Number,
  },
  mobile: {
    type: Number,
  },
});

const StudentCollection = new mongoose.model("students", studentSchema);

module.exports = StudentCollection;
