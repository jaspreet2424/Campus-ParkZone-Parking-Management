import React from "react";
import { Link } from "react-router-dom";

function GuardNavbar() {
  return (
    <div className="w-full px-40 py-4 flex justify-between items-center bg-slate-900">
      <Link to="/guard/dashboard" className="text-white text-3xl">
        AutoSecure Guardian Dashboard
      </Link>
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
            View 
          </Link>
        </li>
        <Link className="text-xl text-white mx-2 hover:underline" to="/logout">
          logout
        </Link>
      </ul>
    </div>
  );
}

export default GuardNavbar;
