import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import rcIcon from "/Images/noDataFound.png";

function ShowVehicleDetails() {
  const User = useSelector((state) => state.User.User);

  return (
    <>
      <Navbar></Navbar>
      <div className="w-full flex justify-center">
        <div className="w-3/4 pt-9">
          <div className="show-details-container flex-col">
            <div className="user-details p-4">
              <h1 className="text-center text-4xl font-bold text-slate-900 my-4">
                Vehicle/RC Details
              </h1>
              <table className="w-full">
                <tbody>
                  {/* <tr className="flex">
                    <th className="border border-slate-600 flex-1 py-1 px-2 text-start">
                      Vehicle Type
                    </th>
                     <td className="border border-slate-600 flex-1 py-1 px-2 text-start">
                      {User.token ? (
                        <span>{User.vehicleType}</span>
                      ) : (
                        <span>xxxxxxxxxx</span>
                      )}
                    </td> 
                  </tr> */}
                  <tr className="flex">
                    <th className="border border-slate-600 flex-1 py-1 px-2 text-start">
                      RC Number
                    </th>
                    <td className="border border-slate-600 flex-1 py-1 px-2 text-start">
                      {User.token ? (
                        <span>{User.RCNumber}</span>
                      ) : (
                        <span>xxxxxxxxxx</span>
                      )}
                    </td>
                  </tr>
                  <tr className="flex">
                    <th className="border border-slate-600 flex-1 py-1 px-2 text-start">
                      Registration Number/Number Plate
                    </th>
                    <td className="border border-slate-600 flex-1 py-1 px-2 text-start">
                      {User.token ? (
                        <span>{User.numberPlate}</span>
                      ) : (
                        <span>xxxxxxxxxx</span>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className="w-full bg-slate-50 my-12 py-6 flex flex-col gap-6 items-center justify-center">
                <h1 className="text-4xl text-slate-800 font-bold">RC Image</h1>
                <div className="user-profile flex justify-center items-center py-4 my-10 w-1/2">
                  <img
                    src={`${User.token ? User.RCImage : rcIcon}`}
                    alt="icon"
                    className="w-full h-full shadow-2xl"
                  />
                </div>
                <a
                  href={User.token ? User.RCImage : null}
                  target="_blank"
                  className="px-5 py-2 bg-slate-900 text-white text-lg font-semibold hover:bg-slate-600 rounded-md"
                >
                  Open Image
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default ShowVehicleDetails;
