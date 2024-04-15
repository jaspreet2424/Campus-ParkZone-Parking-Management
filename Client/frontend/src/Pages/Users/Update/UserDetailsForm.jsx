import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUserDetails } from "../../../Redux/Actions/Student";
import { toast, Toaster } from "sonner";
import {
  UPDATE_USER_DETAILS_FAILURE,
  UPDATE_USER_DETAILS_SUCCESS,
} from "../../../Redux/Constants/Student";

function UserDetailsForm() {
  const User = useSelector((state) => state.User.User);
  const isLoading = useSelector((state) => state.User.isLoading);
  const failure = useSelector((state) => state.User.failure);

  const [userData, setUserData] = useState({
    userId: User._id,
    email: "",
    year: "",
    mobile: "",
  });
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    dispatch(updateUserDetails(userData));
  };

  useEffect(() => {
    if (failure) {
      toast.error(failure);
      dispatch({ type: UPDATE_USER_DETAILS_FAILURE, payload: "" });
    }
  }, [failure]);

  return (
    <div className="border-b-2 border-b-slate-900">
      <Toaster richColors position="bottom-center"></Toaster>
      <form
        className="flex flex-col items-center px-10 py-6 gap-7"
        onSubmit={handleFormSubmit}
      >
        <h1 className="text-4xl text-slate-900 font-bold">Upload Details</h1>

        <div className="each-detail px-3 w-full items-center flex justify-between ">
          <label htmlFor="name" className="text-lg font-bold flex-1">
            Name :
          </label>
          <input
            type="text"
            id="name"
            placeholder={`${User.name}`}
            disabled={true}
            className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
          />
        </div>

        <div className="each-detail px-3 w-full items-center flex justify-between ">
          <label htmlFor="email" className="text-lg font-bold flex-1">
            Email :
          </label>
          <input
            type="text"
            id="email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            placeholder="enter new email"
            className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
          />
        </div>

        <div className="each-detail px-3 w-full items-center flex justify-between ">
          <label htmlFor="fatherName" className="text-lg font-bold flex-1">
            Father's Name :
          </label>
          <input
            type="text"
            id="fatherName"
            placeholder={`${User.fatherName}`}
            disabled={true}
            className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
          />
        </div>

        <div className="each-detail px-3 w-full items-center flex justify-between ">
          <label htmlFor="gender" className="text-lg font-bold flex-1">
            Gender :
          </label>
          <input
            type="text"
            id="gender"
            placeholder={`${User.gender}`}
            disabled={true}
            className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
          />
        </div>

        <div className="each-detail px-3 w-full items-center flex justify-between ">
          <label htmlFor="dob" className="text-lg font-bold flex-1">
            Date of Birth :
          </label>
          <input
            type="date"
            id="dob"
            placeholder={`${User.dob}`}
            disabled={true}
            className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
          />
        </div>

        <div className="each-detail px-3 w-full items-center flex justify-between ">
          <label htmlFor="program" className="text-lg font-bold flex-1">
            Program :
          </label>
          <input
            type="text"
            id="program"
            disabled={true}
            placeholder={`${User.program}`}
            className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
          />
        </div>

        <div className="each-detail px-3 w-full items-center flex justify-between ">
          <label htmlFor="branch" className="text-lg font-bold flex-1">
            Branch :
          </label>
          <input
            type="text"
            id="branch"
            disabled={true}
            placeholder={`${User.branch}`}
            className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
          />
        </div>

        <div className="each-detail px-3 w-full items-center flex justify-between ">
          <label htmlFor="year" className="text-lg font-bold flex-1">
            Year :
          </label>
          <select
            name="year"
            id="year"
            value={userData.year}
            onChange={(e) => setUserData({ ...userData, year: e.target.value })}
            className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
          >
            <option value="" className="px-4 py-2 ">
              
            </option>
            <option value="1st Year" className="px-4 py-2 ">
              1st Year
            </option>
            <option value="2nd Year" className="px-4 py-2 ">
              2nd Year
            </option>
            <option value="3rd Year" className="px-4 py-2 ">
              3rd Year
            </option>
            <option value="4th Year" className="px-4 py-2 ">
              4th Year
            </option>
          </select>
        </div>

        <div className="each-detail px-3 w-full items-center flex justify-between ">
          <label htmlFor="CRN" className="text-lg font-bold flex-1">
            College Roll Number :
          </label>
          <input
            type="text"
            id="CRN"
            disabled={true}
            placeholder={`${User.CRN}`}
            className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
          />
        </div>

        <div className="each-detail px-3 w-full items-center flex justify-between ">
          <label htmlFor="URN" className="text-lg font-bold flex-1">
            University Roll Number :
          </label>
          <input
            type="text"
            id="URN"
            disabled={true}
            placeholder={`${User.URN}`}
            className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
          />
        </div>

        <div className="each-detail px-3 w-full items-center flex justify-between ">
          <label htmlFor="mobile" className="text-lg font-bold flex-1">
            Mobile Number :
          </label>
          <input
            type="text"
            id="mobile"
            value={userData.mobile}
            onChange={(e) =>
              setUserData({ ...userData, mobile: e.target.value })
            }
            placeholder="Enter new Mobile Number"
            className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
          />
        </div>

        <button className="px-4 py-1 text-lg bg-slate-900 text-white rounded-sm hover:bg-slate-700">
          {isLoading ? <span>Loading....</span> : <span>Update Details</span>}
        </button>
      </form>
    </div>
  );
}

export default UserDetailsForm;
