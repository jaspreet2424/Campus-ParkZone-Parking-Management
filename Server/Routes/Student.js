const express = require("express");
const {
  registerNewUser,
  verifyOTP,
  uploadStudentDetails,
  loginUser,
  studentAuthentication,
  logoutUser,
  uploadProfileImage,
  uploadVehicleDetails,
  updateUserDetails,
  updateVehicleDetails,
} = require("../Controllers/Student");
const studentRouter = express.Router();
const multer = require('multer');

const profileImg = multer({dest : 'profileUploads/'});
const upload = multer({ dest: "vehicleUploads/" });


studentRouter.post("/sign-up", registerNewUser);
studentRouter.post("/sign-in", loginUser);
studentRouter.post("/verify-otp", verifyOTP);
studentRouter.post("/upload-details", uploadStudentDetails);
studentRouter.post("/update-details", updateUserDetails);
studentRouter.post("/vehicle-details", upload.single('RCImage') ,uploadVehicleDetails);
studentRouter.post("/update-vehicle-details", upload.single('RCImage') ,updateVehicleDetails);
studentRouter.get("/student-auth", studentAuthentication);
studentRouter.get("/sign-out", logoutUser);
studentRouter.post("/upload-profile-image" , profileImg.single('profilePicture') , uploadProfileImage);

module.exports = studentRouter;
