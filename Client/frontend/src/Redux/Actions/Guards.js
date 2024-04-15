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
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  CHECK_USER_AUTH_REQUEST,
  CHECK_USER_AUTH_SUCCESS,
  CHECK_USER_AUTH_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  SEND_NOTIFICATION_FAILURE,
  SEND_NOTIFICATION_SUCCESS,
} from "../Constants/Guards";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const loginGuard = (formdata, navigate) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_REQUEST });
  try {
    const response = await axios.post("/guard/sign-in", formdata);
    if (response.data.success) {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data.User });
      navigate("/guard/dashboard");
    } else {
      dispatch({ type: LOGIN_USER_FAILURE, payload: response.data.message });
    }
  } catch (error) {
    dispatch({
      type: LOGIN_USER_FAILURE,
      payload: error.response.data.message,
    });
  }
};

const guardAuthentication = () => async (dispatch) => {
  dispatch({ type: CHECK_USER_AUTH_REQUEST });
  try {
    const response = await axios.get("/guard/check-auth");
    if (response.data.success) {
      dispatch({ type: CHECK_USER_AUTH_SUCCESS, payload: response.data.User });
    } else {
      dispatch({
        type: CHECK_USER_AUTH_FAILURE,
        payload: response.data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: CHECK_USER_AUTH_FAILURE,
      payload: error.response.data.message,
    });
  }
};

const logoutAccount = (navigate) => async (dispatch) => {
  dispatch({ type: LOGOUT_USER_REQUEST });
  try {
    const response = await axios.get("/guard/logout");
    if (response.data.success) {
      dispatch({ type: LOGOUT_USER_SUCCESS, payload: response.data.message });
      navigate("/guard/dashboard");
    } else {
      dispatch({ type: LOGOUT_USER_FAILURE, payload: response.data.message });
    }
  } catch (error) {
    dispatch({
      type: LOGOUT_USER_FAILURE,
      payload: error.response.data.message,
    });
  }
};

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

const sendNotifications = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`/guard/send-notification/${userId}`);
    if(response.data.success){
      dispatch({type : SEND_NOTIFICATION_SUCCESS})
    }
  } catch (error) {
    dispatch({
      type: SEND_NOTIFICATION_FAILURE,
      payload: error.response.data.message,
    });
  }
};

export {
  fetchAllStudentsData,
  deleteSingleUser,
  getSingleStudent,
  loginGuard,
  logoutAccount,
  guardAuthentication,
  sendNotifications,
};
