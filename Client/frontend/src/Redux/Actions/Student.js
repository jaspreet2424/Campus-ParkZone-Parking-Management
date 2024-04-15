import {
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  VERIFY_OTP_REQUEST,
  VERIFY_OTP_SUCCESS,
  VERIFY_OTP_FAILURE,
  UPLOAD_DETAIL_REQUEST,
  UPLOAD_DETAIL_SUCCESS,
  UPLOAD_DETAIL_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  CHECK_USER_AUTH_REQUEST,
  CHECK_USER_AUTH_FAILURE,
  CHECK_USER_AUTH_SUCCESS,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  UPLOAD_PROFILE_IMAGE_REQUEST,
  UPLOAD_PROFILE_IMAGE_FAILURE,
  UPLOAD_PROFILE_IMAGE_SUCCESS,
  UPLOAD_VEHICLE_DETAIL_SUCCESS,
  UPLOAD_VEHICLE_DETAIL_REQUEST,
  UPLOAD_VEHICLE_DETAIL_FAILURE,
  UPDATE_USER_DETAILS_REQUEST,
  UPDATE_USER_DETAILS_FAILURE,
  UPDATE_USER_DETAILS_SUCCESS,
  UPDATE_VEHICLE_DETAILS_REQUEST,
  UPDATE_VEHICLE_DETAILS_SUCCESS,
  UPDATE_VEHICLE_DETAILS_FAILURE,
} from "../Constants/Student";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;

const registerNewUser = (formData, navigate) => async (dispatch) => {
  dispatch({ type: REGISTER_USER_REQUEST });
  try {
    const response = await axios.post("/api/sign-up", formData);
    if (response.data.success) {
      localStorage.setItem("CRN", response.data.User.CRN);
      dispatch({ type: REGISTER_USER_SUCCESS, payload: response.data.User });
      navigate("/verify-otp");
    } else {
      dispatch({ type: REGISTER_USER_FAILURE, payload: response.data.message });
    }
  } catch (error) {
    dispatch({
      type: REGISTER_USER_FAILURE,
      payload: error.response.data.message,
    });
  }
};

const verifyUserOTP = (formData, navigate) => async (dispatch) => {
  dispatch({ type: VERIFY_OTP_REQUEST });
  try {
    const response = await axios.post("/api/verify-otp", formData);
    if (response.data.success) {
      dispatch({ type: VERIFY_OTP_SUCCESS, payload: response.data.message });
      navigate("/user-form");
    } else {
      dispatch({ type: VERIFY_OTP_FAILURE, payload: response.data.message });
    }
  } catch (error) {
    dispatch({
      type: VERIFY_OTP_FAILURE,
      payload: error.response.data.message,
    });
  }
};

const uploadDetails = (formData, navigate) => async (dispatch) => {
  dispatch({ type: UPLOAD_DETAIL_REQUEST });
  try {
    const response = await axios.post("/api/upload-details", formData);
    if (response.data.success) {
      dispatch({ type: UPLOAD_DETAIL_SUCCESS, payload: response.data.User });
      navigate("/vehicle-details");
    } else {
      dispatch({ type: UPLOAD_DETAIL_FAILURE, payload: response.data.message });
    }
  } catch (error) {
    dispatch({
      type: UPLOAD_DETAIL_FAILURE,
      payload: error.response.data.message,
    });
  }
};

const uploadVehicleDetails = (formData, navigate) => async (dispatch) => {
  dispatch({ type: UPLOAD_VEHICLE_DETAIL_REQUEST });
  try {
    const response = await axios.post("/api/vehicle-details", formData);
    if (response.data.success) {
      dispatch({
        type: UPLOAD_VEHICLE_DETAIL_SUCCESS,
        payload: response.data.User,
      });
      localStorage.removeItem("CRN");
      navigate("/sign-in");
    } else {
      dispatch({
        type: UPLOAD_VEHICLE_DETAIL_FAILURE,
        payload: response.data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: UPLOAD_VEHICLE_DETAIL_FAILURE,
      payload: error.response.data.message,
    });
  }
};

const loginUserFunction = (formData, navigate) => async (dispatch) => {
  dispatch({ type: LOGIN_USER_REQUEST });
  try {
    const response = await axios.post("/api/sign-in", formData);
    if (response.data.success) {
      dispatch({ type: LOGIN_USER_SUCCESS, payload: response.data.User });
      navigate("/");
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

const checkStudentAuthentication = () => async (dispatch) => {
  try {
    const response = await axios.get("/api/student-auth");
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

const logoutUser = (navigate) => async (dispatch) => {
  dispatch({ type: LOGOUT_USER_REQUEST });
  try {
    const response = await axios.get("/api/sign-out");
    if (response.data.success) {
      dispatch({ type: LOGOUT_USER_SUCCESS, payload: response.data.message });
      navigate("/");
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

const uploadProfileImage = (formdata) => async (dispatch) => {
  dispatch({ type: UPLOAD_PROFILE_IMAGE_REQUEST });
  try {
    const response = await axios.post("/api/upload-profile-image", formdata);
    if (response.data.success) {
      dispatch({
        type: UPLOAD_PROFILE_IMAGE_SUCCESS,
        payload: response.data.User,
      });
    }
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({
      type: UPLOAD_PROFILE_IMAGE_FAILURE,
      payload: error.response.data.message,
    });
  }
};

const updateUserDetails = (formData) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_DETAILS_REQUEST });
  try {
    const response = await axios.post("/api/update-details", formData);
    if (response.data.success) {
      dispatch({
        type: UPDATE_USER_DETAILS_SUCCESS,
        payload: response.data.User,
      });
    } else {
      dispatch({
        type: UPDATE_USER_DETAILS_FAILURE,
        payload: response.data.message,
      });
    }
  } catch (error) {
    dispatch({
      type: UPDATE_USER_DETAILS_FAILURE,
      payload: error.response.data.message,
    });
  }
};

const updateVehicleDetails = (formData) => async (dispatch) => {
  dispatch({ type: UPDATE_VEHICLE_DETAILS_REQUEST });
  try {
    const respose = await axios.post("/api/update-vehicle-details", formData);
    if (respose.data.success) {
      dispatch({
        type: UPDATE_VEHICLE_DETAILS_SUCCESS,
        payload: respose.data.User,
      });
    } else {
      dispatch({
        type: UPDATE_VEHICLE_DETAILS_FAILURE,
        payload: respose.data.message,
      });
    }
  } catch (error) {
    console.log(error.response.data.message)
    dispatch({
      type: UPDATE_VEHICLE_DETAILS_FAILURE,
      payload: error.respose.data.message,
    });
  }
};

export {
  registerNewUser,
  verifyUserOTP,
  uploadDetails,
  loginUserFunction,
  checkStudentAuthentication,
  logoutUser,
  uploadProfileImage,
  uploadVehicleDetails,
  updateUserDetails,
  updateVehicleDetails,
};
