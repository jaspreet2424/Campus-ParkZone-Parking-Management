const StudentCollection = require("../Modals/Students");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
require("dotenv").config();
const saltRounds = 16;

/*Creating a transport connection for nodemailer */
const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

const isCorrectEmail = (email) => {
  const regrex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;
  return regrex.test(email);
};

const correctLength = (password) => {
  return password.length >= 8 ? true : false;
};

const isContainsNumber = (password) => {
  const regrex = /[0-9]/;
  return regrex.test(password);
};

const isContainsSymbol = (password) => {
  const regrex = /[!@#$%^&*?><:;]/;
  return regrex.test(password);
};

const generateOTP = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const registerNewUser = async (req, res) => {
  try {
    const { CRN, email, password } = req.body;

    if (!CRN || !email || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All input fields are required" });
    }

    const existingStudent = await StudentCollection.findOne({ CRN });
    if (existingStudent) {
      return res.status(400).json({
        success: false,
        message: "Student Already registered with this CRN",
      });
    }

    if (!isCorrectEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email",
      });
    }

    if (!correctLength(password)) {
      return res.status(400).json({
        success: false,
        message: "Password Length must greater than 8",
      });
    }
    if (!isContainsNumber(password)) {
      return res.status(400).json({
        success: false,
        message: "Not a Secure Password. Add atleast one number",
      });
    }

    if (!isContainsSymbol(password)) {
      return res.status(400).json({
        success: false,
        message: "Not a Secure Password. Add atleast one Symbol",
      });
    }

    const otp = generateOTP(100000, 999999);
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newInstance = new StudentCollection({
      CRN,
      email,
      password: hashPassword,
      otp,
    });

    const savedUser = await newInstance.save();

    const mailAletMessage = {
      from: process.env.EMAIL,
      to: email,
      subject: "Verify your account",
      text: `You have registered to AutoSecure Guardian and this is your OTP ${otp} to complete the registration process`,
    };
    await transport.sendMail(mailAletMessage);

    res.status(201).json({
      success: true,
      message: "New User Registered Successfully",
      User: savedUser,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Error occured in creating new user ${error}`,
    });
  }
};

const verifyOTP = async (req, res) => {
  try {
    const { otp, CRN } = req.body;

    const User = await StudentCollection.findOne({ CRN });
    if (!User) {
      return res.status(400).json({
        success: false,
        message: "No User Found!",
      });
    }

    if (otp != User.otp) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP. Please Enter correct OTP.",
      });
    }

    User.otp = null;
    User.isVerified = true;

    await User.save();

    res.status(200).json({
      success: true,
      message: "Account Verified Successfully",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Error occured in verifying OTP ${error}`,
    });
  }
};

const uploadStudentDetails = async (req, res) => {
  try {
    const { name, fatherName, gender, dob, program, branch, year, CRN, URN } =
      req.body;

    if (
      !name ||
      !fatherName ||
      !gender ||
      !dob ||
      !program ||
      !branch ||
      !year ||
      !CRN ||
      !URN
    ) {
      return res.status(400).json({
        success: false,
        message: "All input fields are required",
      });
    }

    const user = await StudentCollection.findOne({ CRN });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No User found with this CRN",
      });
    }

    const savedUser = await StudentCollection.findByIdAndUpdate(
      user._id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      User: savedUser,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Error occured in uploading student details ${error}`,
    });
  }
};

module.exports = {
  registerNewUser,
  verifyOTP,
  uploadStudentDetails,
};
