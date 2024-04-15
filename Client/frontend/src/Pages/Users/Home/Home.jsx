import React from "react";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from "../../../Components/Footer/Footer";
import AGlogo from "/Images/logoBG.png";
// import "../../Guards/Guard.css";

function Home() {
  const guideLines = [
    {
      id: 1,
      rule: "Authorized Parking Area",
      description:
        "Students should be instructed to park their vehicles only in designated parking areas. This helps in maintaining order and preventing congestion.",
    },
    {
      id: 2,
      rule: "Respect Reserved Parking Spaces",
      description:
        "Students should respect parking spaces reserved for faculty, staff, visitors, or specific purposes. Unauthorized use of reserved spaces may result in penalties.",
    },
    {
      id: 3,
      rule: "Locking Vehicles",
      description:
        "Students should be encouraged to lock their vehicles and secure valuable belongings to prevent theft or vandalism. ",
    },
    {
      id: 3,
      rule: "Report Suspicious Activities",
      description:
        "Students should report any suspicious activities or incidents observed in the parking area to security personnel immediately. This includes unauthorized individuals loitering around vehicles, attempted break-ins. ",
    },
    {
      id: 4,
      rule: "Seperate Parking Slots",
      description:
        "There are seperate parking slots for BOYS and GIRLS . Students are requested to park their vehicle in their designated areas.",
    },
  ];

  return (
    <>
      <Navbar></Navbar>
      <div className="introduction-section w-full h-fit">
        <div className="upper-section flex flex-col items-center justify-center pt-32 gap-2">
          <h1 className="text-5xl text-slate-900 font-bold z-10">
            GURU NANAK DEV ENGINEERING COLLEGE
          </h1>
          <h1 className="text-2xl text-slate-700 z-10">
            An Autonomous College U/S UGC Act-1956 &#91; 2&#40;f&#41; and
            12&#40;B&#41; &#93;
          </h1>
          <h1 className="text-lg text-slate-700 z-10">
            AICTE Approved, ISO 9001:2015 Certified
          </h1>
          <h1 className="text-lg text-slate-700 z-10">
            Affiliated to I.K. Gujral Punjab Technical University , Jalandhar
          </h1>
          <h1 className="text-lg text-slate-700 z-10">
            IEI Accredited , UG Programmes
          </h1>
          <h1 className="text-lg text-slate-700 z-10">
            Institute Accredited by NAAC&#40;A Grade&#41; and TCS
          </h1>
        </div>

        <div className=" relative lower-section flex flex-col items-center justify-center pt-12 gap-2 ">
          <h1 className="text-3xl text-slate-700 z-10">Welcome To </h1>
          <h1 className="logo-text text-5xl text-slate-900 text-center font-bold my-4 z-10">
            AutoSecure Guardian
          </h1>
        </div>
      </div>

      <div className="mt-24 w-full flex flex-col justify-center items-center bg-white py-12">
        <h1 className="text-slate-900 text-3xl font-semibold underline">
          Guidelines to Students for Ensuring Security and Safety
        </h1>
        <div className="flex flex-col items-start gap-6 w-2/4 py-12">
          {guideLines.map((item) => {
            return (
              <div className="bg-slate-100 px-4 py-2 rounded-md shadow-lg hover:shadow-xl">
                <span className="text-xl font-semibold underline">
                  {item.rule}
                </span>
                <span className="text-lg text-slate-900">
                  {" : "}
                  {item.description}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
