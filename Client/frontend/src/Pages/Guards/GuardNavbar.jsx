import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function GuardNavbar() {
  const Guard = useSelector((state) => state.guardDetails.Guard);

  return (
    <div className="w-full px-40 py-4 flex justify-between items-center bg-slate-900">
      <Link to="/guard/dashboard" className="text-white text-3xl flex">
      <img src="/Images/logoBG.png" alt="logo" className="w-12 h-12"/>AutoSecure Guardian Dashboard
      </Link>
      {Guard.token ? (
        <ul className="flex items-center justify-center">
          <li>
            <Link
              to="/guard/dashboard"
              className="text-white text-lg px-4 py-2 mx-2 rounded-sm hover:border-b-2 hover:border-b-slate-400"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/guard/search-filter"
              className="text-white text-lg px-4 py-2 mx-2 rounded-sm hover:border-b-2 hover:border-b-slate-400"
            >
              Search
            </Link>
          </li>
          <li>
            <Link
              to="/guard/students-list"
              className="text-white text-lg px-4 py-2 mx-2 rounded-sm hover:border-b-2 hover:border-b-slate-400"
            >
              View Users
            </Link>
          </li>
          <Link
            className="text-xl text-white mx-2 hover:underline"
            to="/guard/logout"
          >
            logout
          </Link>
        </ul>
      ) : (
        <Link
          to="/guard/sign-in"
          className="text-lg text-white bg-slate-600 rounded-md px-6 py-1 hover:underline"
        >
          Login
        </Link>
      )}
    </div>
  );
}

export default GuardNavbar;
