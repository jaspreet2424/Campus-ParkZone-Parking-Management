import React, { useEffect, useState } from "react";
import GuardNavbar from "./GuardNavbar";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllStudentsData,
  searchDetails,
} from "../../Redux/Actions/Guards";
import Loader from "../../Components/Loader/Loader";

function Search() {
  const [seacthText, setSearchText] = useState("");

  const isLoading = useSelector((state) => state.studentDetails.isLoading);
  const failure = useSelector((state) => state.studentDetails.failure);
  const studentDetails = useSelector(
    (state) => state.studentDetails.studentDetails
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchDetails(seacthText));
  },[seacthText]);

  useEffect(() => {
    dispatch(fetchAllStudentsData());
  }, [dispatch]);

  return (
    <>
      <GuardNavbar></GuardNavbar>
      <div className="w-full flex items-center justify-center">
        <div className="w-3/4 h-screen pt-14 pb-20">
          <h1 className="my-6 text-center text-4xl font-bold text-slate-900">
            Search
          </h1>
          <div className="search-filter ">
            <div className="w-full flex px-10 ">
              <input
                type="text"
                placeholder="Enter College Roll Number"
                value={seacthText}
                onChange={(e) => setSearchText(e.target.value)}
                className="search border border-slate-900 w-full px-5 text-xl rounded-l-md focus:outline-none bg-slate-50"
              />
              <button
                className="bg-green-500 px-4 py-2 text-xl border border-slate-900 font-bold text-white rounded-r-md flex items-center"
                onClick={() => dispatch(searchDetails(seacthText))}
              >
                Search
                <i class="fa-solid fa-magnifying-glass ml-2 text-md rotate-90"></i>
              </button>
            </div>
          </div>

          <table className="details-container w-full">
            {isLoading ? (
              <div className="flex justify-center items-center">
                <Loader></Loader>
              </div>
            ) : (
              <thead>
                {studentDetails.slice(0,5).map((item) => {
                  return (
                    <tr
                      className="grid grid-cols-4 gap-3 px-3 w-full rounded-md my-5 bg-slate-300 items-center py-2"
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
                    </tr>
                  );
                })}
              </thead>
            )}
          </table>
        </div>
      </div>
    </>
  );
}

export default Search;
