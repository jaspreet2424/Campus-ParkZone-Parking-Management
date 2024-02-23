import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast, Toaster } from "sonner";
import Loader from "../../../Components/Loader/Loader";
import { logoutUser } from "../../../Redux/Actions/Student";

function Logout() {
  const isLoading = useSelector((state) => state.User.isLoading);
  const failure = useSelector((state) => state.User.failure);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogoutFunction = () => {
    dispatch(logoutUser(navigate));
  };

  useEffect(() => {
    if (failure) {
      toast.error(failure);
    }
  }, [failure]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Toaster richColors position="bottom-center"></Toaster>
      <div className="logout-contaier flex flex-col items-center justify-center gap-8 bg-white px-10 py-10">
        <h1 className="text-slate-900 text-5xl font-bold">Logout</h1>
        <span>Are you sure to want to logout?</span>
        <div className="flex gap-4">
          {isLoading ? (
            <div className="flex justify-center items-center bg-black">
              <Loader></Loader>
            </div>
          ) : (
            <div className="flex gap-3">
              <button
                className="text-lg px-6 py-1 rounded-md bg-green-600 text-white hover:underline"
                onClick={handleLogoutFunction}
              >
                Yes
              </button>
              <Link to="/">
                <button className="text-lg px-6 py-1 rounded-md bg-red-600 text-white hover:underline">
                  No
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Logout;
