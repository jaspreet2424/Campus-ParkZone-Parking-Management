import { Outlet, useLocation } from "react-router";
import Navbar from "../src/Components/Navbar/Navbar";
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkStudentAuthentication } from "./Redux/Actions/Student";
import {toast , Toaster} from 'sonner';

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(checkStudentAuthentication());
  },[dispatch]);

  return (
    <div className="bg-slate-200">
      {location.pathname === "/sign-up" ||
      location.pathname === "/sign-in" ||
      location.pathname === "/verify-otp" ||
      location.pathname === "/logout" ||
      location.pathname === "/user-form" ? (
        <>
          <Outlet />
        </>
      ) : (
        <>
          <Navbar></Navbar>
          <Outlet />
        </>
      )}
    </div>
  );
}

export default App;
