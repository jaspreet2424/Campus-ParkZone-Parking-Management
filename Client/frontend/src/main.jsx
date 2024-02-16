import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Users/Home/Home.jsx";
import Register from "./Pages/Users/Register/Register.jsx";
import Login from "./Pages/Users/Login/Login.jsx";
import Details from "./Pages/Users/Details/Details.jsx";
import Update from "./Pages/Users/Update/Update.jsx";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/Store.js";
import VerifyOTP from "./Pages/Users/OTP/VerifyOTP.jsx";
import UserFrom from "./Pages/Users/UserForm/UserFrom.jsx";
import Logout from "./Pages/Users/Logout/Logout.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/sign-up" element={<Register />} />
            <Route path="/verify-otp" element={<VerifyOTP />} />
            <Route path="/user-form" element={<UserFrom />} />
            <Route path="/sign-in" element={<Login />} />
            <Route path="/user-details" element={<Details />} />
            <Route path="/update-profile" element={<Update />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
