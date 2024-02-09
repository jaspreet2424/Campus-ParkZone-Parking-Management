import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [userData, setUserData] = useState({
    rollNumber: "",
    password: "",
  });

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="login-form flex flex-col items-center gap-8 bg-white px-10 py-12 w-1/4">
        <h1 className="text-5xl text-slate-800">Login</h1>
        <form className="flex flex-col gap-4 w-full">
          <input
            type="text"
            placeholder="College Roll Number"
            value={userData.rollNumber}
            onChange={(e) => {
              setUserData({ ...userData, rollNumber: e.target.value });
            }}
            className="px-3 py-2 text-lg border border-slate-400 hover:border hover:border-slate-600 focus:outline-slate-900"
          />
          <input
            type="text"
            placeholder="Password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            className="px-3 py-2 text-lg border border-slate-400 hover:border hover:border-slate-600 focus:outline-slate-900"
          />
          <button className="px-4 py-2 bg-slate-800 text-lg hover:bg-slate-600 text-white">
            Login
          </button>
        </form>

        <div className="w-full bg-slate-400" style={{ height: "1px" }}></div>

        <span className="text-slate-600">
          Don't have an account?{" "}
          <a href="/" className="text-slate-800 font-bold underline">
            Register
          </a>
        </span>
      </div>
    </div>
  );
}

export default Login;
