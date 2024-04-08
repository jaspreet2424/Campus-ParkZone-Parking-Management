import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const User = useSelector((state) => state.User.User);

  return (
    <div className="w-full px-40 py-4 flex justify-between items-center bg-slate-900">
      <Link to="/" className="text-white text-3xl flex">
        <img src="/Images/logoBG.png" alt="logo" className="w-12 h-12"/>AutoSecure Guardian
      </Link>
      {User.token ? (
        <ul className="flex items-center justify-center">
          <li>
            <Link
              to="/"
              className="text-white text-lg px-4 py-2 mx-2 rounded-sm hover:border-b-2 hover:border-b-slate-400"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/user-details"
              className="text-white text-lg px-4 py-2 mx-2 rounded-sm hover:border-b-2 hover:border-b-slate-400"
            >
              Details
            </Link>
          </li>
          <li>
            <Link
              to="/show-vehicle-details"
              className="text-white text-lg px-4 py-2 mx-2 rounded-sm hover:border-b-2 hover:border-b-slate-400"
            >
              Vehicle Details
            </Link>
          </li>
          <li>
            <Link
              to="/update-profile"
              className="text-white text-lg px-4 py-2 mx-2 rounded-sm hover:border-b-2 hover:border-b-slate-400"
            >
              Update Profile
            </Link>
          </li>
          <Link className="text-xl text-white hover:underline" to='/logout'>logout</Link>
        </ul>
      ) : (
        <Link to='/sign-in' className="text-lg text-white bg-slate-600 rounded-md px-6 py-1 hover:underline">Login</Link>
      )}
    </div>
  );
}

export default Navbar;
