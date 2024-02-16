const express = require("express");
const {
  registerNewUser,
  verifyOTP,
  uploadStudentDetails,
  loginUser,
  studentAuthentication,
  logoutUser,
} = require("../Controllers/Student");
const studentRouter = express.Router();

studentRouter.post("/sign-up", registerNewUser);
studentRouter.post("/sign-in", loginUser);
studentRouter.post("/verify-otp", verifyOTP);
studentRouter.post("/upload-details", uploadStudentDetails);
studentRouter.get("/student-auth", studentAuthentication);
studentRouter.get("/sign-out", logoutUser);

module.exports = studentRouter;
