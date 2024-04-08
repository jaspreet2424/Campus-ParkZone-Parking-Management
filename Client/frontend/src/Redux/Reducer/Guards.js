import {
  FETCH_STUDENTS_DATA_REQUEST,
  FETCH_STUDENTS_DATA_FAILURE,
  FETCH_STUDENTS_DATA_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  GET_SINGLE_STUDENT_SUCCESS,
  GET_SINGLE_STUDENT_FAILURE,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  CHECK_USER_AUTH_SUCCESS,
  CHECK_USER_AUTH_FAILURE,
  LOGOUT_USER_REQUEST,
  LOGOUT_USER_SUCCESS,
  LOGOUT_USER_FAILURE,
  FILTER_DATA_BY_YEAR_REQUEST,
  FILTER_DATA_BY_YEAR_SUCCESS,
  FILTER_DATA_BY_YEAR_FAILURE,
  SEARCH_DATA_SUCCESS,
  SEARCH_DATA_FAILURE,
  SEARCH_DATA_REQUEST,
} from "../Constants/Guards";

const initialDetailsState = {
  studentDetails: [],
  singleStudent: {},
  isLoading: false,
  success: "",
  failure: "",
};

const guardInitailState = {
  Guard: {},
  success: "",
  failure: "",
  isLoading: false,
};

const guardReducer = (state = guardInitailState, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        Guard: action.payload,
        success: "Login Successfully",
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
        Guard: action.payload,
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
        success: action.payload,
        Guard: {},
      };
    case LOGOUT_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        failure: action.payload,
      };

    default:
      return state;
  }
};

const detailsReducer = (state = initialDetailsState, action) => {
  switch (action.type) {
    case FETCH_STUDENTS_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_STUDENTS_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: "Data Fetched Successfully",
        studentDetails: action.payload,
      };

    case FETCH_STUDENTS_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        failure: action.payload,
      };

    case DELETE_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: action.payload,
      };

    case DELETE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        failure: action.payload,
      };

    case GET_SINGLE_STUDENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        singleStudent: action.payload,
        success: "Details Fetched Successfully",
      };

    case GET_SINGLE_STUDENT_FAILURE:
      return {
        ...state,
        isLoading: false,
        failure: action.payload,
      };

    case FILTER_DATA_BY_YEAR_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case FILTER_DATA_BY_YEAR_SUCCESS:
      return {
        ...state,
        isLoading: false,
        studentDetails: action.payload,
      };

    case FILTER_DATA_BY_YEAR_FAILURE:
      return {
        ...state,
        isLoading: false,
        failure: action.payload,
      };

    case SEARCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case SEARCH_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        studentDetails: action.payload,
      };

    case SEARCH_DATA_FAILURE:
      return {
        ...state,
        isLoading: false,
        failure: "No result Found!",
      };

    default:
      return state;
  }
};

export { detailsReducer, guardReducer };
