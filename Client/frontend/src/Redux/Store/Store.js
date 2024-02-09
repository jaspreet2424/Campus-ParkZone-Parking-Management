import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../Reducer/Student";

const store = configureStore({
  reducer: {
    User: userReducer,
  },
});

export {store};