import { Outlet, useLocation } from "react-router";
import Navbar from "../src/Components/Navbar/Navbar";

function App() {
  const location = useLocation();

  return (
    <div className="bg-slate-200">
      {location.pathname === "/sign-up" ||
      location.pathname === "/sign-in" ||
      location.pathname === "/verify-otp" ||
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
