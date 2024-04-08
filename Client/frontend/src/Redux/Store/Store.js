import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../Reducer/Student";
import { detailsReducer, guardReducer } from "../Reducer/Guards";

const store = configureStore({
  reducer: {
    User: userReducer,
    studentDetails : detailsReducer,
    guardDetails : guardReducer,
  },
});

export {store};