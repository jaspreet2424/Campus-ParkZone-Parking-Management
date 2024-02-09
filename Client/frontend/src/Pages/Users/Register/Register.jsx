import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../../Components/Loader/Loader";
import { registerNewUser } from "../../../Redux/Actions/Student";
import { toast, Toaster } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { REGISTER_USER_FAILURE } from "../../../Redux/Constants/Student";

function Register() {
  const [confirmPass, setConfirmPass] = useState(false);
  const [visiblePass, setVisiblePass] = useState(false);
  const [userData, setUserData] = useState({
    CRN: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const isLoading = useSelector((state) => state.User.isLoading);
  const failure = useSelector((state) => state.User.failure);
  const success = useSelector((state) => state.User.success);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const toggleVisibility = () => {
    setVisiblePass(!visiblePass);
  };

  const isPasswordMatched = () => {
    const isMatched =
      userData.password !== "" &&
      userData.confirmPassword !== "" &&
      userData.password === userData.confirmPassword;
    if (isMatched) {
      setConfirmPass(true);
    } else {
      setConfirmPass(false);
    }
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (confirmPass) {
      dispatch(registerNewUser(userData, navigate));
    } else {
      toast.error("Both the passwords not matched");
    }
  };

  useEffect(() => {
    if (failure) {
      toast.error(failure);
      dispatch({ type: REGISTER_USER_FAILURE, payload: "" });
    }
  }, [failure]);

  useEffect(() => {
    if (success) {
      toast.success(success);
    }
  }, [success]);

  useEffect(() => {
    isPasswordMatched();
  }, [userData.confirmPassword, userData.password]);

  return (
    <div className="h-screen w-screen flex">
      <Toaster richColors position="bottom-right"></Toaster>
      <div className="left-container flex-1 flex justify-center items-center bg-white relative">
        <div className="bg-color w-80 h-80 bg-teal-400 absolute rounded-full"></div>
        <div className="content-container flex flex-col gap-6 z-10">
          <span className="first-text text-4xl text-center">Welcome to </span>
          <span className="second-text text-6xl text-slate-900 font-bold">
            AutoSecure Guardian
          </span>
        </div>
      </div>

      <div className="right-container flex-1 flex items-center justify-center">
        <div className="flex flex-col items-center gap-8 bg-white px-10 py-12 w-1/2">
          <h1 className="text-5xl text-slate-800">Register</h1>
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
              type="text"
              placeholder="Enter Email"
              value={userData.email}
              onChange={(e) => {
                setUserData({ ...userData, email: e.target.value });
              }}
              className="px-3 py-2 text-lg border border-slate-400 hover:border hover:border-slate-600 focus:outline-slate-900"
            />
            <input
              type={`${
                visiblePass && userData.password !== "" ? "text" : "password"
              }`}
              placeholder="Password"
              value={userData.password}
              onChange={(e) => {
                setUserData({ ...userData, password: e.target.value });
              }}
              className="px-3 py-2 text-lg border w-full border-slate-400 hover:border hover:border-slate-600 focus:outline-slate-900"
            />
            <input
              type={`${
                visiblePass && userData.confirmPassword !== ""
                  ? "text"
                  : "password"
              }`}
              placeholder="Confirm Password"
              value={userData.confirmPassword}
              onChange={(e) => {
                setUserData({ ...userData, confirmPassword: e.target.value });
              }}
              style={{
                outline:
                  confirmPass && userData.confirmPassword !== ""
                    ? "2px solid green"
                    : !confirmPass && userData.confirmPassword !== ""
                    ? "2px solid red"
                    : "",
              }}
              className="px-3 py-2 text-lg border w-full border-slate-400 hover:border hover:border-slate-600 focus:outline-slate-900"
            />

            <div className="flex gap-2">
              <input
                type="checkbox"
                id="show-password"
                className="cursor-pointer"
                onClick={toggleVisibility}
              />
              <label htmlFor="show-password">Show password</label>
            </div>

            <button className="px-4 py-2 bg-slate-800 text-lg hover:bg-slate-600 text-white">
              {isLoading ? (
                <div className="flex justify-center items-center">
                  <Loader></Loader>
                </div>
              ) : (
                <span>Register</span>
              )}
            </button>
          </form>

          <div className="w-full bg-slate-400" style={{ height: "1px" }}></div>

          <span className="text-slate-600">
            Already have an account?{" "}
            <Link to="/sign-in" className="text-slate-800 font-bold underline">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
