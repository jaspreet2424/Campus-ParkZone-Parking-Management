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
  CHECK_USER_AUTH_FAILURE,
  CHECK_USER_AUTH_SUCCESS,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  UPLOAD_PROFILE_IMAGE_REQUEST,
  UPLOAD_PROFILE_IMAGE_SUCCESS,
  UPLOAD_PROFILE_IMAGE_FAILURE,
  UPLOAD_VEHICLE_DETAIL_REQUEST,
  UPLOAD_VEHICLE_DETAIL_SUCCESS,
  UPDATE_USER_DETAILS_REQUEST,
  UPDATE_USER_DETAILS_SUCCESS,
  UPDATE_USER_DETAILS_FAILURE,
  UPDATE_VEHICLE_DETAILS_REQUEST,
  UPDATE_VEHICLE_DETAILS_SUCCESS,
  UPDATE_VEHICLE_DETAILS_FAILURE,
} from "../Constants/Student";

const userInitialState = {
  User: {},
  isLoading: false,
  success: "",
  failure: "",
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        User: action.payload,
        success: "New User Registered Successfully",
      };

    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        failure: action.payload,
      };

    case VERIFY_OTP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: action.payload,
      };

    case VERIFY_OTP_FAILURE:
      return {
        ...state,
        isLoading: false,
        failure: action.payload,
      };

    case UPLOAD_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case UPLOAD_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: "Details Are Uploaded Successfully",
        User: action.payload,
      };

    case UPLOAD_DETAIL_FAILURE:
      return {
        ...state,
        isLoading: false,
        failure: action.payload,
      };

    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: "Account Login Successfully",
        User: action.payload,
      };

    case LOGIN_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        failure: action.payload,
      };

    case CHECK_USER_AUTH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        User: action.payload,
      };

    case CHECK_USER_AUTH_FAILURE:
      return {
        ...state,
        isLoading: false,
        failure: action.payload,
      };

    case LOGOUT_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        User: {},
      };

    case LOGOUT_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        failure: action.payload,
      };

    case UPLOAD_PROFILE_IMAGE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case UPLOAD_PROFILE_IMAGE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        User: action.payload,
      };

    case UPLOAD_PROFILE_IMAGE_FAILURE:
      return {
        ...state,
        isLoading: false,
        failure: action.payload,
      };

    case UPLOAD_VEHICLE_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case UPLOAD_VEHICLE_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: "Details Uploaded Successfully",
        User: action.payload,
      };
    case UPLOAD_VEHICLE_DETAIL_REQUEST:
      return {
        ...state,
        isLoading: false,
        failure: action.payload,
      };

    case UPDATE_USER_DETAILS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case UPDATE_USER_DETAILS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        User: action.payload,
      };
    case UPDATE_USER_DETAILS_FAILURE:
      return {
        ...state,
        isLoading: false,
        failure: action.payload,
      };

    case UPDATE_VEHICLE_DETAILS_REQUEST:
      return {
        ...state , 
        isLoading : true,
      }

    case UPDATE_VEHICLE_DETAILS_SUCCESS:
      return {
        ...state , 
        isLoading : false,
        User : action.payload
      }

    case UPDATE_VEHICLE_DETAILS_FAILURE:
      return {
        ...state , 
        isLoading : false,
        failure : action.payload
      }

    default:
      return state;
  }
};

export { userReducer };
