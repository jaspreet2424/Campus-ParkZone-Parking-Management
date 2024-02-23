const StudentCollection = require("../Modals/Students");

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
    const {studentId} = req.params;

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

module.exports = {
  fetchAllStudentsData,
  deleteSingleUser,
  getSingleStudent,
};
