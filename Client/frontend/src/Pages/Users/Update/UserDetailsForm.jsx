import React from "react";

function UserDetailsForm() {
  return (
    <div className="border-b-2 border-b-slate-900">
      <form className="flex flex-col items-center px-10 py-6 gap-7">
        <h1 className="text-4xl text-slate-900 font-bold">Upload Details</h1>

        <div className="each-detail px-3 w-full items-center flex justify-between ">
          <label htmlFor="name" className="text-lg font-bold flex-1">
            Name :
          </label>
          <input
            type="text"
            id="name"
            placeholder="enter your name"
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
            placeholder="enter father's name"
            className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
          />
        </div>

        <div className="each-detail px-3 w-full items-center flex justify-between ">
          <label htmlFor="gender" className="text-lg font-bold flex-1">
            Gender :
          </label>
          <select
            name="gender"
            id="gender"
            className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
          >
            <option value="Male" className="px-4 py-2 ">
              Male
            </option>
            <option value="Female" className="px-4 py-2 ">
              Female
            </option>
          </select>
        </div>

        <div className="each-detail px-3 w-full items-center flex justify-between ">
          <label htmlFor="dob" className="text-lg font-bold flex-1">
            Date of Birth :
          </label>
          <input
            type="date"
            id="dob"
            placeholder="select date"
            className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
          />
        </div>

        <div className="each-detail px-3 w-full items-center flex justify-between ">
          <label htmlFor="program" className="text-lg font-bold flex-1">
            Program :
          </label>
          <select
            name="program"
            id="program"
            className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
          >
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

        <div className="each-detail px-3 w-full items-center flex justify-between ">
          <label htmlFor="branch" className="text-lg font-bold flex-1">
            Branch :
          </label>
          <select
            name="branch"
            id="branch"
            className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
          >
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
          </select>
        </div>

        <div className="each-detail px-3 w-full items-center flex justify-between ">
          <label htmlFor="year" className="text-lg font-bold flex-1">
            Year :
          </label>
          <select
            name="year"
            id="year"
            className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
          >
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
            placeholder="enter your CRN"
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
            placeholder="enter your URN"
            className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
          />
        </div>

        <button className="px-4 py-1 text-lg bg-slate-900 text-white rounded-sm hover:bg-slate-700">
          Update Details
        </button>
      </form>
    </div>
  );
}

export default UserDetailsForm;
