import React, { useEffect, useState } from "react";
import GuardNavbar from "./GuardNavbar";
import { useDispatch, useSelector } from "react-redux";
import userIcon from "/Images/user.png";
import {
  fetchAllStudentsData,
  sendNotifications,
} from "../../Redux/Actions/Guards";
import Loader from "../../Components/Loader/Loader";
import GuardFooter from "./GuardFooter";

function Search() {
  const [searchText, setSearchText] = useState("");

  const isLoading = useSelector((state) => state.studentDetails.isLoading);
  const failure = useSelector((state) => state.studentDetails.failure);
  const studentDetails = useSelector(
    (state) => state.studentDetails.studentDetails
  );

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(searchDetails(seacthText));
  // }, [seacthText]);

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
                placeholder="Enter Vehicle Registration Number"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                className="search border border-slate-900 w-full px-5 text-xl rounded-l-md focus:outline-none bg-slate-50"
              />
              <button className="bg-green-500 px-4 py-2 text-xl border border-slate-900 font-bold text-white rounded-r-md flex items-center">
                Search
                <i className="fa-solid fa-magnifying-glass ml-2 text-md rotate-90"></i>
              </button>
            </div>
          </div>

          <table className="details-container w-full h-fit">
            {isLoading ? (
              <div className="flex justify-center items-center mt-24">
                <Loader></Loader>
              </div>
            ) : (
              <thead>
                {/* {studentDetails.map((item) => {
                  return (
                    <tr
                      className="grid grid-cols-5 gap-3 px-3 w-full rounded-md my-5 bg-slate-300 items-center py-2"
                      key={item._id}
                    >
                      <td className="text-xl text-slate-900 font-bold overflow-hidden  mx-auto">
                        <img
                          src={item.profileImage ? item.profileImage : userIcon}
                          alt="icon"
                          className="w-16 h-16 rounded-full border-2 border-slate-900"
                        />
                      </td>
                      <td className="text-xl text-slate-900 font-bold mx-auto">
                        {item.CRN ? item.CRN : "XXXXXXXX"}
                      </td>
                      <td className="text-xl text-slate-900 font-bold mx-auto">
                        {item.name ? item.name : "XXXXXXXX"}
                      </td>
                      <td className="text-xl text-slate-900 font-bold mx-auto">
                        {item.year ? item.year : "XXXXXXXX"}
                      </td>
                      <td className="text-xl text-slate-900 font-bold mx-auto">
                        {item.numberPlate ? item.numberPlate : "XXXXXXXX"}
                      </td>
                    </tr>
                  );
                })} */}
                {studentDetails
                  .filter(
                    (query) =>
                      (query.numberPlate &&
                        query.numberPlate.includes(searchText))
                  )
                  .map((item) => {
                    return (
                      <tr
                        className="grid grid-cols-6 gap-3 px-3 w-full rounded-md my-5 bg-slate-300 items-center py-2"
                        key={item._id}
                      >
                        <td className="text-xl text-slate-900 font-bold overflow-hidden  mx-auto">
                          <img
                            src={
                              item.profileImage ? item.profileImage : userIcon
                            }
                            alt="icon"
                            className="w-16 h-16 rounded-full border-2 border-slate-900"
                          />
                        </td>
                        <td className="text-xl text-slate-900 font-bold mx-auto">
                          {item.CRN ? item.CRN : "XXXXXXXX"}
                        </td>
                        <td className="text-xl text-slate-900 font-bold mx-auto">
                          {item.name ? item.name : "XXXXXXXX"}
                        </td>
                        <td className="text-xl text-slate-900 font-bold mx-auto">
                          {item.year ? item.year : "XXXXXXXX"}
                        </td>
                        <td className="text-xl text-slate-900 font-bold mx-auto">
                          {item.numberPlate ? item.numberPlate : "XXXXXXXX"}
                        </td>
                        <td className="">
                          <button
                            className="text-xl text-white bg-slate-900 font-bold mx-auto px-4 py-2 rounded-lg hover:bg-slate-600"
                            onClick={()=>dispatch(sendNotifications(item._id))}
                          >
                            Send Message
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </thead>
            )}
          </table>
        </div>
      </div>
      <GuardFooter/>
    </>
  );
}

export default Search;
