import React, { useEffect, useState } from "react";
import GuardNavbar from "./GuardNavbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteSingleUser,
  fetchAllStudentsData,
  filterDataByYear,
  getSingleStudent,
} from "../../Redux/Actions/Guards";
import { toast, Toaster } from "sonner";
import { DELETE_USER_FAILURE, FILTER_DATA_BY_YEAR_FAILURE } from "../../Redux/Constants/Guards";

function ViewStudents() {
  const [showFilter, setShowFilter] = useState(false);
  const [filterText, setFilterText] = useState('');

  const isLoading = useSelector((state) => state.studentDetails.isLoading);
  const failure = useSelector((state) => state.studentDetails.failure);
  const studentDetails = useSelector(
    (state) => state.studentDetails.studentDetails
  );

  const dispatch = useDispatch();

  const handleFilterClick = () => {
    dispatch(filterDataByYear(filterText));
  }

  const handleRefreshData = () =>{
    dispatch(fetchAllStudentsData());
    dispatch({type : FILTER_DATA_BY_YEAR_FAILURE , payload : ''});
  }

  useEffect(()=>{
    if(failure){
      toast.error(failure);
    }
  },[failure]);

  useEffect(() => {
    dispatch(fetchAllStudentsData());
  }, [dispatch]);

  return (
    <>
      <Toaster richColors position="bottom-center"></Toaster>
      <GuardNavbar></GuardNavbar>
      <div className="w-full flex items-center justify-center">
        <div className="w-3/4 pt-14 pb-20 ">
          <h1 className="my-6 text-center text-4xl font-bold text-slate-900">
            List of Students
          </h1>

          <div className="students-list w-full">
            <div className="student-list-navbar w-full">
              <div className="bg-slate-300 flex justify-between mt-10 py-2 px-5 rounded-md">
                <button
                  className="bg-slate-600 text-white text-lg rounded-md px-4 py-1 hover:bg-slate-800"
                  onClick={handleRefreshData}
                >
                  Refresh Page
                </button>

                <button className="px-4 bg-slate-900 text-white">{filterText}</button>

                <div className="relative">
                  <button
                    className="bg-slate-600 text-white text-lg rounded-md px-4 font-bold py-1 hover:bg-slate-800"
                    onClick={() => setShowFilter(!showFilter)}
                  >
                    Filter
                    <i className="fa-solid fa-filter  mx-3"></i>
                  </button>

                  <ul
                    className={`${
                      showFilter ? "flex flex-col" : "hidden"
                    } bg-slate-300 py-2 absolute w-full`}
                  >
                    <li
                      className="my-1 py-1 px-4 cursor-pointer text-lg font-bold hover:bg-slate-400"
                      onClick={() => {
                        setFilterText(1);
                        setShowFilter(!showFilter);
                        handleFilterClick();
                      }}
                    >
                      1st Year
                    </li>
                    <li
                      className="my-1 py-1 px-4 cursor-pointer text-lg font-bold hover:bg-slate-400"
                      onClick={() => {
                        setFilterText(2);
                        setShowFilter(!showFilter);
                        handleFilterClick();
                      }}
                    >
                      2nd Year
                    </li>
                    <li
                      className="my-1 py-1 px-4 cursor-pointer text-lg font-bold hover:bg-slate-400"
                      onClick={() => {
                        setFilterText(3);
                        setShowFilter(!showFilter);
                        handleFilterClick();
                      }}
                    >
                      3rd Year
                    </li>
                    <li
                      className="my-1 py-1 px-4 cursor-pointer text-lg font-bold hover:bg-slate-400"
                      onClick={() => {
                        setFilterText(4);
                        setShowFilter(!showFilter);
                        handleFilterClick();
                      }}
                    >
                      4th Year
                    </li>
                  </ul>
                </div>
              </div>
              <table className="w-full">
                <thead className="w-full">
                  <tr className="grid grid-cols-6 gap-3 px-4 bg-indigo-400 rounded-md mt-4 py-4">
                    <td className="text-xl text-slate-900 font-bold">CRN</td>
                    <td className="text-xl text-slate-900 font-bold">Name</td>
                    <td className="text-xl text-slate-900 font-bold">
                      Program
                    </td>
                    <td className="text-xl text-slate-900 font-bold">Year</td>
                    <td className="text-xl text-slate-900 font-bold">
                      View Data
                    </td>
                    <td className="text-xl text-slate-900 font-bold">
                      Delete User
                    </td>
                  </tr>
                </thead>
              </table>
            </div>

            <div className="students-details-container pt-5">
              {isLoading ? (
                <span className="text-4xl text-slate-700 items-center justify-center flex">
                  Fetching Data.....
                </span>
              ) : !failure ? (
                <table className="details-container w-full">
                  <thead>
                    {studentDetails.map((item) => {
                      return (
                        <tr
                          className="grid grid-cols-6 gap-3 px-3 w-full rounded-md my-5 bg-slate-300 items-center py-2"
                          key={item._id}
                        >
                          <td className="text-xl text-slate-900 font-bold">
                            {item.CRN}
                          </td>
                          <td className="text-xl text-slate-900 font-bold">
                            {item.name}
                          </td>
                          <td className="text-xl text-slate-900 font-bold">
                            {item.program}
                          </td>
                          <td className="text-xl text-slate-900 font-bold">
                            {item.year}
                          </td>
                          <td className="text-xl text-slate-900 font-bold">
                            <Link
                              className="px-4 py-2 rounded-md text-lg font-bold bg-emerald-500 hover:underline"
                              onClick={() =>
                                dispatch(getSingleStudent(item._id))
                              }
                              to="/guard/single-student-details"
                            >
                              View Details
                            </Link>
                          </td>
                          <td className="text-xl text-slate-900 font-bold s">
                            <button
                              className="px-4 py-2 rounded-md text-lg font-bold bg-red-500 hover:underline"
                              onClick={() =>
                                dispatch(deleteSingleUser(item._id))
                              }
                            >
                              Remove User
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </thead>
                </table>
              ) : (
                <span className="text-4xl text-slate-700 items-center justify-center flex">
                  No Data Found
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewStudents;
