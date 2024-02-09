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

    case UPLOAD_DETAIL_REQUEST :
      return {
        ...state ,
        isLoading : true,
      }

    case UPLOAD_DETAIL_SUCCESS :
      return {
        ...state ,
        isLoading : false,
        success : 'Details Are Uploaded Successfully',
        User : action.payload,
      }

    case UPLOAD_DETAIL_FAILURE :
      return {
        ...state ,
        isLoading : false,
        failure : action.payload,
      }

    default:
      return state;
  }
};

export { userReducer };
