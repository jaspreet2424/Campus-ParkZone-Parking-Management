import React from "react";
import GuardNavbar from "./GuardNavbar";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import notFound from "/Images/noDataFound.png";
import userIcon from "/Images/user.png";
import GuardFooter from "./GuardFooter";

function SingleStudentDetail() {
  const singleStudent = useSelector(
    (state) => state.studentDetails.singleStudent
  );

  return (
    <div>
      <GuardNavbar></GuardNavbar>
      <div className="page-container w-full flex items-center justify-center">
        <div className="w-3/4 h-fit pt-14 pb-20 ">
          <div className="student-details-card pt-5 px-20 flex flex-col">
            <h1 className="text-2xl text-white bg-slate-900 py-2 text-center font-bold">
              Student Details Card
            </h1>
            <div className="container flex bg-slate-100">
              <div className="left-student-detail-container flex-1 flex flex-col border-2 border-slate-900">
                <div className="upper-section py-5 px-5 flex items-center justify-center overflow-hidden">
                  <img
                    src={
                      singleStudent.profileImage
                        ? singleStudent.profileImage
                        : userIcon
                    }
                    alt="icon"
                    className="w-32 h-32 border-2 border-slate-900 rounded-full"
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
                      <span className="text-lg">
                        {singleStudent.fatherName}
                      </span>
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
                    {singleStudent.mobile ? (
                      <span className="text-lg">{singleStudent.mobile}</span>
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

          <div className="student-details-card pt-5 px-20 flex flex-col">
            <h1 className="text-2xl text-white bg-slate-900 py-2 text-center font-bold">
              Vehicles Details Card
            </h1>
            <div className="container flex bg-slate-100">
              <div className="left-student-detail-container flex-1 flex flex-col border-2 border-slate-900">
                <div className="lower-section py-5 px-5 flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">Chassis Number :</span>
                    {singleStudent.RCNumber ? (
                      <span className="text-lg">{singleStudent.RCNumber}</span>
                    ) : (
                      <span className="text-lg">xxxxxxxx</span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">
                      Registration Number :
                    </span>
                    {singleStudent.numberPlate ? (
                      <span className="text-lg">
                        {singleStudent.numberPlate}
                      </span>
                    ) : (
                      <span className="text-lg">xxxxxxxx</span>
                    )}
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold text-lg">Vehicle Type :</span>
                    {singleStudent.vehicleType ? (
                      <span className="text-lg">
                        {singleStudent.vehicleType}
                      </span>
                    ) : (
                      <span className="text-lg">xxxxxxxx</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="right-student-detail-container flex-1 flex-col border-2 border-slate-900">
                <div className="upper-section py-5 px-5 flex items-center justify-center overflow-hidden">
                  <img
                    src={
                      singleStudent.RCImage
                        ? singleStudent.RCImage
                        : notFound
                    }
                    alt="icon"
                    className="w-full h-full border-2 border-slate-900"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-20 items-center justify-center gap-5">
            <Link
              to="/guard/dashboard"
              className="bg-slate-800 rounded-md px-5 py-2 text-white text-lg hover:underline"
            >
              Back To Dashboard
            </Link>
            <Link
              to="/guard/students-list"
              className="bg-slate-800 rounded-md px-5 py-2 text-white text-lg hover:underline"
            >
              Back To View Students
            </Link>
          </div>
        </div>
      </div>
      <GuardFooter/>
    </div>
  );
}

export default SingleStudentDetail;
