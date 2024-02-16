import { React, useState, useEffect } from "react";
import { useSelector } from "react-redux";

function Details() {
  const User = useSelector((state) => state.User.User);

  return (
    <div className="w-full flex justify-center">
      <div className="w-3/4 pt-9">
        <div className="show-details-container flex-col">
          <div className="user-profile flex justify-center items-center py-4">
            <img src="\Images\user.png" alt="" className="w-56 h-56" />
          </div>

          <div className="user-details p-4">
            <h1 className="text-center text-4xl font-bold text-slate-900 my-4">
              User Details
            </h1>
            <table className="w-full">
              <tbody>
                <tr className="flex">
                  <th className="border border-slate-600 flex-1 py-1 px-2 text-start">
                    Name
                  </th>
                  <td className="border border-slate-600 flex-1 py-1 px-2 text-start">
                    {User.token ? (
                      <span>{User.name}</span>
                    ) : (
                      <span>xxxxxxxxxx</span>
                    )}
                  </td>
                </tr>
                <tr className="flex">
                  <th className="border border-slate-600 flex-1 py-1 px-2 text-start">
                    Father's Name
                  </th>
                  <td className="border border-slate-600 flex-1 py-1 px-2 text-start">
                    {User.token ? (
                      <span>{User.fatherName}</span>
                    ) : (
                      <span>xxxxxxxxxx</span>
                    )}
                  </td>
                </tr>
                <tr className="flex">
                  <th className="border border-slate-600 flex-1 py-1 px-2 text-start">
                    Gender
                  </th>
                  <td className="border border-slate-600 flex-1 py-1 px-2 text-start">
                    {User.token ? (
                      <span>{User.gender}</span>
                    ) : (
                      <span>xxxxxxxxxx</span>
                    )}
                  </td>
                </tr>
                <tr className="flex">
                  <th className="border border-slate-600 flex-1 py-1 px-2 text-start">
                    D.O.B
                  </th>
                  <td className="border border-slate-600 flex-1 py-1 px-2 text-start">
                    {User.token ? (
                      <span>{User.dob}</span>
                    ) : (
                      <span>xxxxxxxxxx</span>
                    )}
                  </td>
                </tr>
                <tr className="flex">
                  <th className="border border-slate-600 flex-1 py-1 px-2 text-start">
                    Program
                  </th>
                  <td className="border border-slate-600 flex-1 py-1 px-2 text-start">
                    {User.token ? (
                      <span>{User.program}</span>
                    ) : (
                      <span>xxxxxxxxxx</span>
                    )}
                  </td>
                </tr>
                <tr className="flex">
                  <th className="border border-slate-600 flex-1 py-1 px-2 text-start">
                    Branch
                  </th>
                  <td className="border border-slate-600 flex-1 py-1 px-2 text-start">
                    {User.token ? (
                      <span>{User.branch}</span>
                    ) : (
                      <span>xxxxxxxxxx</span>
                    )}
                  </td>
                </tr>
                <tr className="flex">
                  <th className="border border-slate-600 flex-1 py-1 px-2 text-start">
                    Year
                  </th>
                  <td className="border border-slate-600 flex-1 py-1 px-2 text-start">
                    {User.token ? (
                      <span>{User.year}</span>
                    ) : (
                      <span>xxxxxxxxxx</span>
                    )}
                  </td>
                </tr>
                <tr className="flex">
                  <th className="border border-slate-600 flex-1 py-1 px-2 text-start">
                    College Roll Number
                  </th>
                  <td className="border border-slate-600 flex-1 py-1 px-2 text-start">
                    {User.token ? (
                      <span>{User.CRN}</span>
                    ) : (
                      <span>xxxxxxxxxx</span>
                    )}
                  </td>
                </tr>
                <tr className="flex">
                  <th className="border border-slate-600 flex-1 py-1 px-2 text-start">
                    University Roll Number
                  </th>
                  <td className="border border-slate-600 flex-1 py-1 px-2 text-start">
                    {User.token ? (
                      <span>{User.URN}</span>
                    ) : (
                      <span>xxxxxxxxxx</span>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
