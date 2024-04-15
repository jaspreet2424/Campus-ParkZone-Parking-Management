import React, { useEffect, useState } from "react";
import Loader from "../../../Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UPLOAD_DETAIL_FAILURE } from "../../../Redux/Constants/Student";
import { uploadDetails } from "../../../Redux/Actions/Student";
import { toast, Toaster } from "sonner";

function UserFrom() {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    gender: "",
    dob: "",
    program: "",
    branch: "",
    year: "",
    URN: "",
    mobile : '',
    CRN: localStorage.getItem("CRN"),
  });

  const isLoading = useSelector((state) => state.User.isLoading);
  const failure = useSelector((state) => state.User.failure);
  const success = useSelector((state) => state.User.success);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clearInputFields = () => {
    setFormData({
      name: "",
      fatherName: "",
      gender: "",
      dob: "",
      program: "",
      branch: "",
      year: "",
      URN: "",
      mobile : "",
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(uploadDetails(formData, navigate));
  };

  useEffect(() => {
    if (failure) {
      toast.error(failure);
      dispatch({ type: UPLOAD_DETAIL_FAILURE, payload: "" });
    }
  }, [failure]);

  useEffect(() => {
    if (success) {
      toast.success(success);
    }
  }, [success]);

  return (
    <div className="w-full flex justify-center items-center">
      <Toaster richColors position="bottom-right"></Toaster>
      <div className="details-form w-1/3 bg-white px-6 pb-8">
        <form
          className="flex flex-col items-center py-6 gap-7"
          onSubmit={handleFormSubmit}
        >
          <h1 className="text-4xl text-slate-900 font-bold">Upload Details</h1>

          <div className="each-detail px-3 w-full  flex flex-col justify-between ">
            <label htmlFor="name" className="text-lg font-bold flex-1">
              Name :
            </label>
            <input
              type="text"
              id="name"
              placeholder="enter your name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
            />
          </div>

          <div className="each-detail px-3 w-full  flex flex-col justify-between ">
            <label htmlFor="fatherName" className="text-lg font-bold flex-1">
              Father's Name :
            </label>
            <input
              type="text"
              id="fatherName"
              placeholder="enter father's name"
              value={formData.fatherName}
              onChange={(e) =>
                setFormData({ ...formData, fatherName: e.target.value })
              }
              className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
            />
          </div>

          <div className="each-detail px-3 w-full  flex flex-col justify-between ">
            <label htmlFor="gender" className="text-lg font-bold flex-1">
              Gender :
            </label>
            <select
              name="gender"
              id="gender"
              className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
              value={formData.gender}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            >
              <option value="" className="px-4 py-2 "></option>
              <option value="Male" className="px-4 py-2 ">
                Male
              </option>
              <option value="Female" className="px-4 py-2 ">
                Female
              </option>
            </select>
          </div>

          <div className="each-detail px-3 w-full  flex flex-col justify-between ">
            <label htmlFor="dob" className="text-lg font-bold flex-1">
              Date of Birth :
            </label>
            <input
              type="date"
              id="dob"
              placeholder="select date"
              className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
              value={formData.dob}
              onChange={(e) =>
                setFormData({ ...formData, dob: e.target.value })
              }
            />
          </div>

          <div className="each-detail px-3 w-full  flex flex-col justify-between ">
            <label htmlFor="program" className="text-lg font-bold flex-1">
              Program :
            </label>
            <select
              name="program"
              id="program"
              className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
              value={formData.program}
              onChange={(e) =>
                setFormData({ ...formData, program: e.target.value })
              }
            >
              <option value="" className="px-4 py-2 "></option>
              <option value="B.tech" className="px-4 py-2 ">
                B.tech
              </option>
              <option value="M.tech" className="px-4 py-2 ">
                M.tech
              </option>
              <option value="BCA" className="px-4 py-2 ">
                BCA
              </option>
              <option value="BCA" className="px-4 py-2 ">
                MCA
              </option>
              <option value="BCA" className="px-4 py-2 ">
                MBA
              </option>
            </select>
          </div>

          <div className="each-detail px-3 w-full  flex flex-col justify-between ">
            <label htmlFor="branch" className="text-lg font-bold flex-1">
              Branch :
            </label>
            <select
              name="branch"
              id="branch"
              className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
              value={formData.branch}
              onChange={(e) =>
                setFormData({ ...formData, branch: e.target.value })
              }
            >
              <option value="" className="px-4 py-2 "></option>
              <option
                value="Computer Science and Engineering"
                className="px-4 py-2 "
              >
                Computer Science and Engineering
              </option>
              <option value="Information and Technology" className="px-4 py-2 ">
                Information and Technology
              </option>
              <option
                value="Electronics and Communication"
                className="px-4 py-2 "
              >
                Electronics and Communication
              </option>
              <option value="Electrical Engineering" className="px-4 py-2 ">
                Electrical Engineering
              </option>
              <option value="Civil Engineering" className="px-4 py-2 ">
                Civil Engineering
              </option>
              <option value="Mechanical Engineering" className="px-4 py-2 ">
                Mechanical Engineering
              </option>
              <option value="Bachelors in Computer Applications" className="px-4 py-2 ">
                Bachelors in Computer Applications
              </option>
              <option value="Master's in Computer Applications" className="px-4 py-2 ">
                Master's in Computer Applications
              </option>
              <option value="Master in Business Administration" className="px-4 py-2 ">
                Master in Business Administration
              </option>
            </select>
          </div>

          <div className="each-detail px-3 w-full  flex flex-col justify-between ">
            <label htmlFor="year" className="text-lg font-bold flex-1">
              Year :
            </label>
            <select
              name="year"
              id="year"
              className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
              value={formData.year}
              onChange={(e) =>
                setFormData({ ...formData, year: e.target.value })
              }
            >
              <option value="" className="px-4 py-2 "></option>
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

          <div className="each-detail px-3 w-full  flex flex-col justify-between ">
            <label htmlFor="CRN" className="text-lg font-bold flex-1">
              College Roll Number :
            </label>
            <input
              type="text"
              id="CRN"
              placeholder={formData.CRN}
              disabled={true}
              className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
            />
          </div>

          <div className="each-detail px-3 w-full  flex flex-col justify-between ">
            <label htmlFor="URN" className="text-lg font-bold flex-1">
              University Roll Number :
            </label>
            <input
              type="text"
              id="URN"
              placeholder="enter your URN"
              className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
              value={formData.URN}
              onChange={(e) =>
                setFormData({ ...formData, URN: e.target.value })
              }
            />
          </div>

          <div className="each-detail px-3 w-full  flex flex-col justify-between ">
            <label htmlFor="mobile" className="text-lg font-bold flex-1">
              Personal Mobile Number :
            </label>
            <input
              type="text"
              id="mobile"
              placeholder="enter your mobile number"
              className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
              value={formData.mobile}
              onChange={(e) =>
                setFormData({ ...formData, mobile: e.target.value })
              }
            />
          </div>

          <div className="w-full bg-slate-600" style={{ height: "2px" }}></div>

          <button className="px-4 py-1 text-lg bg-slate-900 text-white rounded-sm hover:bg-slate-700">
            {isLoading ? (
              <span>Loading...</span>
            ) : (
              <span>Upload Now</span>
            )}
          </button>
        </form>
        <div className="flex justify-center">
          <button
            className="px-4 py-1 text-lg bg-slate-900 text-white rounded-sm hover:bg-slate-700 "
            onClick={clearInputFields}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserFrom;
