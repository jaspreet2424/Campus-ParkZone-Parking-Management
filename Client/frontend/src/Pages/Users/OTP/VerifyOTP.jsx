import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyUserOTP } from "../../../Redux/Actions/Student";
import Loader from "../../../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import {toast , Toaster} from 'sonner'
import { VERIFY_OTP_FAILURE } from "../../../Redux/Constants/Student";

function VerifyOTP() {
  const [visiblePass, setVisiblePass] = useState(false);
  const [correctOTP, setCorrectOTP] = useState(false);
  const [userData, setUserData] = useState({
    CRN: localStorage.getItem("CRN"),
    otp: "",
  });

  const isLoading = useSelector((state) => state.User.isLoading);
  const success = useSelector((state) => state.User.success);
  const failure = useSelector((state) => state.User.failure);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isCorrectOTPEntered = () => {
    const regrex = /[a-zA-Z]/;
    if (regrex.test(userData.otp)) {
      setCorrectOTP(false);
    } else {
      setCorrectOTP(true);
    }
  };

  const toggleVisibility = () => {
    setVisiblePass(!visiblePass);
  };

  const handleFormSubmit = (e) =>{
    e.preventDefault();
    dispatch(verifyUserOTP(userData , navigate));
  }

  useEffect(() => {
    if (failure) {
      toast.error(failure);
      dispatch({ type: VERIFY_OTP_FAILURE , payload: "" });
    }
  }, [failure]);

  useEffect(() => {
    isCorrectOTPEntered();
  }, [userData.otp]);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Toaster richColors position="bottom-center"></Toaster>
      <div className="login-form flex flex-col items-center gap-8 bg-white px-10 py-12 w-1/4">
        <h1 className="text-5xl text-slate-800">Account Verification</h1>
        <form className="flex flex-col gap-4 w-full " onSubmit={handleFormSubmit}>
          <input
            type="text"
            placeholder={userData.CRN}
            disabled={true}
            className="px-3 py-2 text-lg border border-slate-600 text-black"
          />
          <input
            type={`${visiblePass ? "text" : "password"}`}
            placeholder="Enter Your OTP"
            maxLength={6}
            value={userData.otp}
            onChange={(e) => setUserData({ ...userData, otp: e.target.value })}
            className="px-3 py-2 text-lg border border-slate-400 hover:border hover:border-slate-600 focus:outline-slate-900"
            style={{
              outline:
                correctOTP && userData.otp !== ""
                  ? "2px solid green"
                  : !correctOTP && userData.otp !== ""
                  ? "2px solid red"
                  : "",
            }}
          />

          <div className="flex gap-2">
            <input
              type="checkbox"
              id="show-password"
              className="cursor-pointer"
              onClick={toggleVisibility}
            />
            <label htmlFor="show-password">Show OTP</label>
          </div>
          <button className="px-4 py-2 bg-slate-800 text-lg hover:bg-slate-600 text-white">
            {isLoading ? (
              <div className="flex justify-center items-center">
                <Loader></Loader>
              </div>
            ) : (
              <span>Verify OTP</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default VerifyOTP;
