import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="w-full px-40 py-4 flex justify-between items-center bg-slate-900">
      <Link to="/" className="text-white text-3xl">
        AutoSecure Guardian
      </Link>
      <ul className="flex items-center">
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
            to="/"
            className="text-white text-lg px-4 py-2 mx-2 rounded-sm hover:border-b-2 hover:border-b-slate-400"
          >
            Rules
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
            to="/update-profile"
            className="text-white text-lg px-4 py-2 mx-2 rounded-sm hover:border-b-2 hover:border-b-slate-400"
          >
            Update Profile
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
