import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast, Toaster } from "sonner";
import Loader from "../../Components/Loader/Loader";
import { logoutAccount } from "../../Redux/Actions/Guards";
import { LOGOUT_USER_FAILURE } from "../../Redux/Constants/Guards";

function GuardLogout() {
  const isLoading = useSelector((state) => state.guardDetails.isLoading);
  const failure = useSelector((state) => state.guardDetails.failure);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoutFunction = () => {
    dispatch(logoutAccount(navigate));
  };

  useEffect(() => {
    if (failure) {
      toast.error(failure);
      dispatch({type : LOGOUT_USER_FAILURE , payload : ''});
    }
  }, [failure]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Toaster richColors position="bottom-center"></Toaster>
      <div className="logout-contaier flex flex-col items-center justify-center gap-8 bg-white px-10 py-10">
        <h1 className="text-slate-900 text-5xl font-bold">Admin Logout</h1>
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
              <Link to="/guard/dashboard">
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

export default GuardLogout;
