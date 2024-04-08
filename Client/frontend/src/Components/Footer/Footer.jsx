import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full">
      <div
        className="bg-slate-700 py-3 flex items-center justify-center cursor-pointer"
        onClick={backToTop}
      >
        <span className="text-lg text-white">Back to Top</span>
      </div>

      <div className="links py-4 bg-slate-800">
        <ul className="flex items-center justify-center gap-4 ">
          <li className="px-3 py-1 border-r border-white">
            <Link to="/" className="text-white text-lg hover:underline">
              Home
            </Link>
          </li>
          <li className="px-3 py-1 border-r border-white">
            <Link
              to="/user-details"
              className="text-white text-lg hover:underline"
            >
              Details
            </Link>
          </li>
          <li className="px-3 py-1 border-r border-white">
            <Link
              to="/show-vehicle-details"
              className="text-white text-lg hover:underline"
            >
              Vehicle Details
            </Link>
          </li>
          <li className="px-3 py-1 border-r border-white">
            <Link
              to="/update-profile"
              className="text-white text-lg hover:underline"
            >
              Update Prodile
            </Link>
          </li>
          <li className="px-3 py-1">
            <Link to="/sign-up" className="text-white text-lg hover:underline">
              Register
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center py-6 bg-slate-900">
        <span className="text-white text-lg ">
          Copyright @ 2024 AutoSecure Guardian GNDEC
        </span>
      </div>
    </div>
  );
}

export default Footer;
