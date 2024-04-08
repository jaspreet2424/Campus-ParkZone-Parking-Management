const StudentCollection = require("../Modals/Students");
const guardCollection = require("../Modals/Guards");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const saltRounds = 16;

const isCorrectEmail = (email) => {
  const regrex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]/;
  return regrex.test(email);
};

const correctLength = (password) => {
  return password.length >= 8 ? true : false;
};

const registerNewGuard = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if ((!name || !email, !password)) {
      return res.status(400).json({
        success: false,
        message: "All inputs fields are required",
      });
    }

    if (!isCorrectEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Email.",
      });
    }

    const existingUser = await guardCollection.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already existed with this email",
      });
    }

    if (!correctLength(password)) {
      return res.status(400).json({
        success: false,
        message: "Password length must be greater than 8",
      });
    }

    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newInstance = new guardCollection({
      name,
      email,
      password: hashPassword,
    });

    const savedUser = await newInstance.save();

    res.status(200).json({
      success: true,
      message: "User created successfully",
      User: savedUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error occured in generating new User ${error}`,
    });
  }
};

const loginGuard = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All inputs fields are required",
      });
    }

    const user = await guardCollection.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No User Found",
      });
    }

    const correctPassword = await bcrypt.compare(password, user.password);

    if (!correctPassword) {
      return res.status(400).json({
        success: false,
        message: "Incorrect Password",
      });
    }

    const token = await jwt.sign({ guardId: user._id }, process.env.SECRET_KEY);

    user.token = token;

    await user.save();

    res.cookie("guardToken", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
    });

    res.status(200).json({
      success: true,
      User: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error occured in logging to account ${error}`,
    });
  }
};

const guardAuthectication = async (req, res) => {
  try {
    const token = req.cookies.guardToken;
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
        const savedUser = await guardCollection.findById(decoded.guardId);
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

const logoutAccount = async (req, res) => {
  try {
    const token = req.cookies.guardToken;
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
        const savedUser = await guardCollection.findById(decoded.guardId);
        res.clearCookie("studentToken");
        savedUser.token = null;
        await savedUser.save();
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

const fetchAllStudentsData = async (req, res) => {
  try {
    const data = await StudentCollection.find();

    if (!data) {
      return res.status(400).json({
        success: false,
        message: "Error occured in fetching data",
      });
    }

    res.status(200).json({
      success: true,
      studentDetails: data,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error occured in fetching students data ${error}`,
    });
  }
};

const deleteSingleUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await StudentCollection.findById(id);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No User Found!",
      });
    }

    const result = await StudentCollection.findByIdAndDelete(user._id);

    res.status(200).json({
      success: true,
      message: "Data Deleted Successfully",
      result: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error occured in Deleting User ${error}`,
    });
  }
};

const getSingleStudent = async (req, res) => {
  try {
    const { studentId } = req.params;

    const user = await StudentCollection.findById(studentId);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "No User Found",
      });
    }

    res.status(200).json({
      success: true,
      singleStudent: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error occured in fetching data ${error}`,
    });
  }
};

const filterStudentsByYear = async (req, res) => {
  try {
    const { year } = req.params;
    console.log(year);
    const studentsData = await StudentCollection.find();

    switch (year) {
      case 1:
        var filterArray = studentsData.filter(
          (items) => items.year === "1st Year"
        );
        res.status(200).json({
          success: true,
          filterData: filterArray,
        });
        break;

      case 2:
        var filterArray = studentsData.filter(
          (items) => items.year === "2nd Year"
        );
        res.status(200).json({
          success: true,
          filterData: filterArray,
        });
        break;

      case 3:
        var filterArray = studentsData.filter(
          (items) => items.year === "3rd Year"
        );
        res.status(200).json({
          success: true,
          filterData: filterArray,
        });
        break;

      case 4:
        var filterArray = studentsData.filter(
          (items) => items.year === "4th Year"
        );
        res.status(200).json({
          success: true,
          filterData: filterArray,
        });
        break;

      default:
        res.status(200).json({
          success: false,
          message: "No Data Matched!",
        });
        break;
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error occured in filtering data ${error}`,
    });
  }
};

const searchDetails = async (req, res) => {
  try {
    const { text } = req.params;
    const data = await StudentCollection.find();

    const newArray = data.filter((item) => item.CRN === Number(text));
    
    res.status(200).json({
      success : true,
      details : (newArray) ? newArray : data
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `Error occured in searching data ${error}`,
    });
  }
};

module.exports = {
  fetchAllStudentsData,
  deleteSingleUser,
  getSingleStudent,
  registerNewGuard,
  logoutAccount,
  guardAuthectication,
  loginGuard,
  filterStudentsByYear,
  searchDetails,
};
