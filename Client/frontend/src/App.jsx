import { Outlet, useLocation } from "react-router";
import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkStudentAuthentication } from "./Redux/Actions/Student";

function App() {
  const location = useLocation();
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(checkStudentAuthentication());
  },[dispatch]);

  return (
    <div className="bg-slate-200">
      <Outlet></Outlet>
    </div>
  );
}

export default App;
