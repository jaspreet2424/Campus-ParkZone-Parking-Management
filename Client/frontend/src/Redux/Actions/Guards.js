import {
  FETCH_STUDENTS_DATA_REQUEST,
  FETCH_STUDENTS_DATA_FAILURE,
  FETCH_STUDENTS_DATA_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  GET_SINGLE_STUDENT_REQUEST,
  GET_SINGLE_STUDENT_SUCCESS,
  GET_SINGLE_STUDENT_FAILURE,
} from "../Constants/Guards";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const fetchAllStudentsData = () => async (dispatch) => {
  dispatch({ type: FETCH_STUDENTS_DATA_REQUEST });
  try {
    const response = await axios.get("/guard/student-details");
    if (response.data.success) {
      dispatch({
        type: FETCH_STUDENTS_DATA_SUCCESS,
        payload: response.data.studentDetails,
      });
    } else {
      dispatch({
        type: FETCH_STUDENTS_DATA_FAILURE,
        payload: response.data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: FETCH_STUDENTS_DATA_FAILURE,
      payload: error.response.data.message,
    });
  }
};

const deleteSingleUser = (id) => async (dispatch) => {
  dispatch({ type: DELETE_USER_REQUEST });
  try {
    const response = await axios.delete(`/guard/delete-student/${id}`);
    if (response.data.success) {
      dispatch({ type: DELETE_USER_SUCCESS, payload: response.data.message });
    } else {
      dispatch({ type: DELETE_USER_FAILURE, payload: response.data.message });
    }
  } catch (error) {
    dispatch({
      type: DELETE_USER_FAILURE,
      payload: error.response.data.message,
    });
  }
};

const getSingleStudent = (studentId) => async (dispatch) => {
  dispatch({ type: GET_SINGLE_STUDENT_REQUEST });
  try {
    const response = await axios.get(`/guard/single-student/${studentId}`);
    if (response.data.success) {
      dispatch({
        type: GET_SINGLE_STUDENT_SUCCESS,
        payload: response.data.singleStudent,
      });
    } else {
      dispatch({
        type: GET_SINGLE_STUDENT_FAILURE,
        payload: response.data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: GET_SINGLE_STUDENT_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export { fetchAllStudentsData, deleteSingleUser , getSingleStudent };
