import React from "react";
import GuardNavbar from "./GuardNavbar";
import { useSelector } from "react-redux";

function SingleStudentDetail() {
  const singleStudent = useSelector(
    (state) => state.studentDetails.singleStudent
  );

  return (
    <div>
      <GuardNavbar></GuardNavbar>
      <div className="page-container w-full flex items-center justify-center">
        <div className="w-3/4 pt-14 pb-20 ">
          <div className="student-details-card pt-5 px-20 flex flex-col">
            <h1 className="text-2xl text-white bg-slate-900 py-2 text-center font-bold">
              Student Details Card
            </h1>
            <div className="container flex bg-slate-100">
              <div className="left-student-detail-container flex-1 flex flex-col border-2 border-slate-900">
                <div className="upper-section py-5 px-5 flex items-center justify-center">
                  <img
                    src="/Images/user.png"
                    alt=""
                    className="w-32 border-2 border-slate-900 rounded-full"
                  />
                </div>
                <div className="lower-section py-5 px-5 flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">Name :</span>
                    {singleStudent.name ? (
                      <span className="text-lg">{singleStudent.name}</span>
                    ) : (
                      <span className="text-lg">xxxxxxxx</span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">Father's Name :</span>
                    {singleStudent.fatherName ? (
                      <span className="text-lg">{singleStudent.fatherName}</span>
                    ) : (
                      <span className="text-lg">xxxxxxxx</span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">Email :</span>
                    {singleStudent.email ? (
                      <span className="text-lg">{singleStudent.email}</span>
                    ) : (
                      <span className="text-lg">xxxxxxxx</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="right-student-detail-container flex-1 flex-col border-2 border-slate-900">
                <div className=" py-5 px-5 flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">Gender :</span>
                    {singleStudent.gender ? (
                      <span className="text-lg">{singleStudent.gender}</span>
                    ) : (
                      <span className="text-lg">xxxxxxxx</span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">DOB :</span>
                    {singleStudent.dob ? (
                      <span className="text-lg">{singleStudent.dob}</span>
                    ) : (
                      <span className="text-lg">xxxxxxxx</span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">Mobile :</span>
                    {singleStudent.dob ? (
                      <span className="text-lg">{singleStudent.dob}</span>
                    ) : (
                      <span className="text-lg">xxxxxxxx</span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">CRN :</span>
                    {singleStudent.CRN ? (
                      <span className="text-lg">{singleStudent.CRN}</span>
                    ) : (
                      <span className="text-lg">xxxxxxxx</span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">URN :</span>
                    {singleStudent.URN ? (
                      <span className="text-lg">{singleStudent.URN}</span>
                    ) : (
                      <span className="text-lg">xxxxxxxx</span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">Program :</span>
                    {singleStudent.program ? (
                      <span className="text-lg">{singleStudent.program}</span>
                    ) : (
                      <span className="text-lg">xxxxxxxx</span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">Branch :</span>
                    {singleStudent.branch ? (
                      <span className="text-lg">{singleStudent.branch}</span>
                    ) : (
                      <span className="text-lg">xxxxxxxx</span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">Year :</span>
                    {singleStudent.year ? (
                      <span className="text-lg">{singleStudent.year}</span>
                    ) : (
                      <span className="text-lg">xxxxxxxx</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleStudentDetail;
