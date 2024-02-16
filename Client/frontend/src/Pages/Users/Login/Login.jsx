import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { toast, Toaster } from "sonner";
import { LOGIN_USER_FAILURE } from "../../../Redux/Constants/Student";
import { loginUserFunction } from "../../../Redux/Actions/Student";

function Login() {
  const [userData, setUserData] = useState({
    CRN: "",
    password: "",
  });
  const [visiblePass, setVisiblePass] = useState(false);

  const isLoading = useSelector((state) => state.User.isLoading);
  const failure = useSelector((state) => state.User.failure);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleVisibility = () => {
    setVisiblePass(!visiblePass);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    dispatch(loginUserFunction(userData, navigate));
  };

  useEffect(() => {
    if (failure) {
      toast.error(failure);
      dispatch({ type: LOGIN_USER_FAILURE, payload: "" });
    }
  }, [failure]);

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Toaster richColors position="bottom-center"></Toaster>
      <div className="login-form flex flex-col items-center gap-8 bg-white px-10 py-12 w-1/4">
        <h1 className="text-5xl text-slate-800">Login</h1>
        <form
          className="flex flex-col gap-4 w-full"
          onSubmit={handleSubmitForm}
        >
          <input
            type="text"
            placeholder="College Roll Number"
            value={userData.CRN}
            onChange={(e) => {
              setUserData({ ...userData, CRN: e.target.value });
            }}
            className="px-3 py-2 text-lg border border-slate-400 hover:border hover:border-slate-600 focus:outline-slate-900"
          />
          <input
            type={`${visiblePass ? "text" : "password"}`}
            placeholder="Password"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            className="px-3 py-2 text-lg border border-slate-400 hover:border hover:border-slate-600 focus:outline-slate-900"
          />
          <div className="flex gap-2">
            <input
              type="checkbox"
              id="show-password"
              className="cursor-pointer"
              onClick={toggleVisibility}
            />
            <label htmlFor="show-password">Show Password</label>
          </div>
          <button className="px-4 py-2 bg-slate-800 text-lg hover:bg-slate-600 text-white">
            {isLoading ? (
              <div className="flex justify-center items-center">
                <Loader></Loader>
              </div>
            ) : (
              <span>Login</span>
            )}
          </button>
        </form>

        <div className="w-full bg-slate-400" style={{ height: "1px" }}></div>

        <span className="text-slate-600">
          Don't have an account?{" "}
          <Link to="/sign-up" className="text-slate-800 font-bold underline">
            Register
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Login;
