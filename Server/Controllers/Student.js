const StudentCollection = require("../Modals/Students");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const saltRounds = 16;
const cloudinary = require("cloudinary").v2;

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

    const existingCRN = await StudentCollection.findOne({ CRN });
    if (existingCRN) {
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

    const existingEmail = await StudentCollection.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({
        success: false,
        message: "Email already in use",
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
    const {
      name,
      fatherName,
      gender,
      dob,
      program,
      branch,
      year,
      CRN,
      URN,
      mobile,
    } = req.body;

    if (
      !name ||
      !fatherName ||
      !gender ||
      !dob ||
      !program ||
      !branch ||
      !year ||
      !CRN ||
      !URN ||
      !mobile
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

const uploadVehicleDetails = async (req, res) => {
  try {
    const { CRN, vehicleType, RCNumber, numberPlate } = req.body;

    if (!vehicleType || !RCNumber || !numberPlate) {
      return res.status(400).json({
        success: false,
        message: "All input fields are required",
      });
    }

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No Image is Selected. Try Again",
      });
    }

    const response = await cloudinary.uploader.upload(req.file.path);

    const user = await StudentCollection.findOne({ CRN });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No User found with this CRN",
      });
    }

    user.vehicleType = vehicleType;
    user.RCNumber = RCNumber;
    user.numberPlate = numberPlate;
    user.RCImage = response.secure_url;

    await user.save();

    res.status(200).json({
      success: true,
      User: user,
    });
  } catch (error) {
    console.log("Error ", error);
    return res.status(400).json({
      success: false,
      message: `Error occured in uploading vehicle details ${error}`,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { CRN, password } = req.body;

    if (!CRN || !password) {
      return res.status(400).json({
        success: false,
        message: "All input fields are required",
      });
    }

    const user = await StudentCollection.findOne({ CRN });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No User Found",
      });
    }

    const correctPass = await bcrypt.compare(password, user.password);

    if (!correctPass) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Password",
      });
    }

    const token = await jwt.sign(
      { studentID: user._id },
      process.env.SECRET_KEY
    );
    user.token = token;
    const savedUser = await user.save();

    res.cookie("studentToken", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
    });

    res.status(200).json({
      success: true,
      User: savedUser,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Error occured in Logging into account ${error}`,
    });
  }
};

const studentAuthentication = async (req, res) => {
  try {
    const token = req.cookies.studentToken;
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Unauthorized access. No user found",
      });
    }

    await jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: "Unauthorized access",
        });
      } else {
        const savedUser = await StudentCollection.findById(decoded.studentID);
        return res.status(200).json({
          success: true,
          message: "User login",
          User: savedUser,
        });
      }
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Unauthorized access ${error}`,
    });
  }
};

const logoutUser = async (req, res) => {
  try {
    const token = req.cookies.studentToken;
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Unauthorized access. No user found",
      });
    }

    await jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
      if (err) {
        return res.status(400).json({
          success: false,
          message: "Unauthorized access",
        });
      } else {
        const savedUser = await StudentCollection.findById(decoded.studentID);
        savedUser.token = null;
        await savedUser.save();
        res.clearCookie("studentToken");
        return res.status(200).json({
          success: true,
          message: "Logout Successfully",
        });
      }
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Unauthorized access ${error}`,
    });
  }
};

const uploadProfileImage = async (req, res) => {
  try {
    const { _Id } = req.body;

    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No Image is Selected!" });
    }

    const user = await StudentCollection.findById(_Id);

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "No User found !" });
    }

    const response = await cloudinary.uploader.upload(req.file.path);

    const savedUser = await StudentCollection.findByIdAndUpdate(
      user._id,
      { profileImage: response.secure_url },
      { new: true }
    );

    res.status(200).json({
      success: true,
      User: savedUser,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Error occured in uploading profile image ${error}`,
    });
  }
};

const updateVehicleDetails = async(req,res) =>{
  try {
    const {RCNumber , numberPlate , _Id} = req.body;

    console.log(RCNumber)
    console.log(numberPlate)
    console.log(_Id)

    // if(!RCNumber || !numberPlate || !_Id){
    //   return res.status(400).json({
    //     success : false,
    //     message : "All input fields are required"
    //   })
    // }

    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: "No Image is Selected!" });
    }

    const user = await StudentCollection.findById(_Id);

    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "No User found !" });
    }

    const response = await cloudinary.uploader.upload(req.file.path);

    user.RCNumber = RCNumber;
    user.numberPlate = numberPlate;
    user.RCImage = response.secure_url;

    await user.save();

    res.status(200).json({
      success: true,
      User: user,
    });

  } catch (error) {
    return res.status(400).json({
      success: false,
      message: `Error occured in updating vehicle details ${error}`,
    });
  }
}

const updateUserDetails = async (req, res) => {
  try {
    const { userId } = req.body;
    const user = await StudentCollection.findById(userId);

    if (!user) {
      res.status(422).json({
        success: false,
        message: "No user found!",
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
    res.status(400).json({
      success: false,
      message: `Error occured in updating account details ${error}`,
    });
  }
};

module.exports = {
  registerNewUser,
  verifyOTP,
  uploadStudentDetails,
  uploadVehicleDetails,
  loginUser,
  studentAuthentication,
  logoutUser,
  uploadProfileImage,
  updateUserDetails,
  updateVehicleDetails
};
