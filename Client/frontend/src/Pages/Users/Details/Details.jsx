import React from "react";

function Details() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-3/4 pt-9">
        <div className="show-details-container flex-col">
          <div className="user-profile flex justify-center items-center py-4">
            <img src="\Images\user.png" alt="" className="w-56 h-56" />
          </div>

          <div className="user-details p-4">
            <table className="w-full">
              <h1 className="text-center text-4xl font-bold text-slate-900 my-4">User Details</h1>
              <tr className="flex">
                <th className="border border-slate-600 flex-1 py-1 px-2 text-start">
                  Name
                </th>
                <td className="border border-slate-600 flex-1 py-1 px-2 text-start">
                  Jaspreet Singh
                </td>
              </tr>
              <tr className="flex">
                <th className="border border-slate-600 flex-1 py-1 px-2 text-start">
                  Father's Name
                </th>
                <td className="border border-slate-600 flex-1 py-1 px-2 text-start">
                  Gurmeet Singh
                </td>
              </tr>
              <tr className="flex">
                <th className="border border-slate-600 flex-1 py-1 px-2 text-start">
                  Gender
                </th>
                <td className="border border-slate-600 flex-1 py-1 px-2 text-start">
                  Male
                </td>
              </tr>
              <tr className="flex">
                <th className="border border-slate-600 flex-1 py-1 px-2 text-start">
                  D.O.B
                </th>
                <td className="border border-slate-600 flex-1 py-1 px-2 text-start">
                  24/09/2001
                </td>
              </tr>
              <tr className="flex">
                <th className="border border-slate-600 flex-1 py-1 px-2 text-start">
                  Program
                </th>
                <td className="border border-slate-600 flex-1 py-1 px-2 text-start">
                  B.tech
                </td>
              </tr>
              <tr className="flex">
                <th className="border border-slate-600 flex-1 py-1 px-2 text-start">
                  Branch
                </th>
                <td className="border border-slate-600 flex-1 py-1 px-2 text-start">
                  Computer Science and Engineering
                </td>
              </tr>
              <tr className="flex">
                <th className="border border-slate-600 flex-1 py-1 px-2 text-start">
                  Year
                </th>
                <td className="border border-slate-600 flex-1 py-1 px-2 text-start">
                  4th
                </td>
              </tr>
              <tr className="flex">
                <th className="border border-slate-600 flex-1 py-1 px-2 text-start">
                  College Roll Number
                </th>
                <td className="border border-slate-600 flex-1 py-1 px-2 text-start">
                  2015064
                </td>
              </tr>
              <tr className="flex">
                <th className="border border-slate-600 flex-1 py-1 px-2 text-start">
                  University Roll Number
                </th>
                <td className="border border-slate-600 flex-1 py-1 px-2 text-start">
                  2004599
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
