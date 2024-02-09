const express = require('express');
const { registerNewUser, verifyOTP, uploadStudentDetails } = require('../Controllers/Student');
const studentRouter = express.Router();

studentRouter.post('/sign-up' , registerNewUser);
studentRouter.post('/verify-otp' , verifyOTP);
studentRouter.post('/upload-details' , uploadStudentDetails);

module.exports = studentRouter;