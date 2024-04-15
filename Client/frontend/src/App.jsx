import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkStudentAuthentication } from "./Redux/Actions/Student";
import { guardAuthentication } from "./Redux/Actions/Guards";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Users/Home/Home.jsx";
import Register from "./Pages/Users/Register/Register.jsx";
import Login from "./Pages/Users/Login/Login.jsx";
import Details from "./Pages/Users/Details/Details.jsx";
import Update from "./Pages/Users/Update/Update.jsx";
import VerifyOTP from "./Pages/Users/OTP/VerifyOTP.jsx";
import UserFrom from "./Pages/Users/UserForm/UserFrom.jsx";
import Logout from "./Pages/Users/Logout/Logout.jsx";
import Dashboard from "./Pages/Guards/Dashboard.jsx";
import Search from "./Pages/Guards/Search.jsx";
import ViewStudents from "./Pages/Guards/ViewStudents.jsx";
import SingleStudentDetail from "./Pages/Guards/SingleStudentDetail.jsx";
import GuardLogin from "./Pages/Guards/GuardLogin.jsx";
import GuardLogout from "./Pages/Guards/GuardLogout.jsx";
import ShowVehicleDetails from "./Pages/Users/Details/ShowVehicleDetails.jsx";
import VehicleDetail from "../src/Pages/Users/VehicleDetails/VehicleDetail.jsx";
import PageNotFound from "./Pages/Guards/PageNotFound.jsx";
import NotLogin from "./Pages/Guards/NotLogin.jsx";
import ChangePassword from "./Pages/Users/ChangePassword.jsx";

function App() {
  const dispatch = useDispatch();
  const Guard = useSelector((state) => state.guardDetails.Guard);

  useEffect(() => {
    dispatch(checkStudentAuthentication());
  }, [dispatch]);

  useEffect(() => {
    dispatch(guardAuthentication());
  }, [dispatch]);

  return (
    <div className="bg-slate-200">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<Register />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/user-form" element={<UserFrom />} />
          <Route path="/vehicle-details" element={<VehicleDetail />} />
          <Route path="/sign-in" element={<Login />} />
          <Route path="/user-details" element={<Details />} />
          <Route path="/update-profile" element={<Update />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/forgerPassword" element={<ChangePassword/>} />
          <Route
            path="/show-vehicle-details"
            element={<ShowVehicleDetails />}
          />

          <Route path="/guard/dashboard" element={<Dashboard />} />
          <Route path="/guard/search-filter" element={Guard.token ? <Search /> : <NotLogin/>} />
          <Route path="/guard/students-list" element={Guard.token ? <ViewStudents /> : <NotLogin/>} />
          <Route
            path="/guard/single-student-details"
            element={Guard.token ? <SingleStudentDetail /> : <NotLogin/>}
          />
          <Route path="/guard/sign-in" element={<GuardLogin />} />
          <Route path="/guard/logout" element={<GuardLogout />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
