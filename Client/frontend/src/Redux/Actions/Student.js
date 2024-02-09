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
      navigate("/");
    } else {
      dispatch({ type: UPLOAD_DETAIL_FAILURE, payload: response.data.message });
    }
  } catch (error) {
    dispatch({ type: UPLOAD_DETAIL_FAILURE, payload: error.response.data.message });
  }
};

export { registerNewUser, verifyUserOTP , uploadDetails };
