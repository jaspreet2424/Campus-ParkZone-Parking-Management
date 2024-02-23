import {
  FETCH_STUDENTS_DATA_REQUEST,
  FETCH_STUDENTS_DATA_FAILURE,
  FETCH_STUDENTS_DATA_SUCCESS,
  DELETE_USER_REQUEST,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAILURE,
  GET_SINGLE_STUDENT_SUCCESS,
  GET_SINGLE_STUDENT_FAILURE,
} from "../Constants/Guards";

const initialDetailsState = {
  studentDetails: [],
  singleStudent: {},
  isLoading: false,
  success: "",
  failure: "",
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
        isLoading : false,
        failure : action.payload
      }

    default:
      return state;
  }
};

export { detailsReducer };
