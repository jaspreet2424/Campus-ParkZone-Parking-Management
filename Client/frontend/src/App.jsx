import { Outlet} from "react-router";
import { React, useEffect } from "react";
import { useDispatch} from "react-redux";
import { checkStudentAuthentication } from "./Redux/Actions/Student";
import { guardAuthentication } from "./Redux/Actions/Guards";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(checkStudentAuthentication());
  },[dispatch]);

  useEffect(()=>{
    dispatch(guardAuthentication());
  },[dispatch]);

  return (
    <div className="bg-slate-200">
      <Outlet></Outlet>
    </div>
  );
}

export default App;
