import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../Reducer/Student";
import { detailsReducer } from "../Reducer/Guards";

const store = configureStore({
  reducer: {
    User: userReducer,
    studentDetails : detailsReducer,
  },
});

export {store};