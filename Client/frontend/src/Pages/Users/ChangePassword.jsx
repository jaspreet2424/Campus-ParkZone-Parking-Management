import React from "react";
import { Toaster, toast } from "sonner";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";

function ChangePassword() {
  const [visiblePass, setVisiblePass] = useState(false);

  const isLoading = useSelector((state) => state.User.isLoading);
  const failure = useSelector((state) => state.User.failure);


  const toggleVisibility = () => {
    setVisiblePass(!visiblePass);
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <Toaster richColors position="bottom-center"></Toaster>
      <div className="login-form flex flex-col items-center gap-8 bg-white px-10 py-12 w-1/4">
        <h1 className="text-5xl text-slate-800">
          Change Password/Reset Password
        </h1>
        <form
          className="flex flex-col gap-4 w-full"
          onSubmit=''
        >
          <input
            type="text"
            placeholder="Enter Email"
            className="px-3 py-2 text-lg border border-slate-400 hover:border hover:border-slate-600 focus:outline-slate-900"
          />
          <input
            type={`${visiblePass ? "text" : "password"}`}
            placeholder="Password"
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

export default ChangePassword;
