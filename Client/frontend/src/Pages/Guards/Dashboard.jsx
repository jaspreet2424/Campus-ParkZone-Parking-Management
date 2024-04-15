import React from "react";
import GuardNavbar from "./GuardNavbar";
import { Link } from "react-router-dom";
import GuardFooter from "./GuardFooter";
// import './Guard.css'

function Dashboard() {
  const cards = [
    {
      id: 1,
      title: "View Student Details",
      icon: "fa-regular fa-user",
      link : '/guard/students-list'
    },
    {
      id: 2,
      title: "Search Students",
      icon: "fa-solid fa-magnifying-glass",
      link : '/guard/search-filter'
    },
  ];

  return (
    <div>
      <GuardNavbar></GuardNavbar>
      <div className="introduction-section w-full h-fit">
        <div className="upper-section flex flex-col items-center justify-center pt-32 gap-2">
          <h1 className="text-5xl text-slate-900 font-bold">
            GURU NANAK DEV ENGINEERING COLLEGE
          </h1>
          <h1 className="text-2xl text-slate-700">
            An Autonomous College U/S UGC Act-1956 &#91; 2&#40;f&#41; and
            12&#40;B&#41; &#93;
          </h1>
          <h1 className="text-lg text-slate-700">
            AICTE Approved, ISO 9001:2015 Certified
          </h1>
          <h1 className="text-lg text-slate-700">
            Affiliated to I.K. Gujral Punjab Technical University , Jalandhar
          </h1>
          <h1 className="text-lg text-slate-700">
            IEI Accredited , UG Programmes
          </h1>
          <h1 className="text-lg text-slate-700">
            Institute Accredited by NAAC&#40;A Grade&#41; and TCS
          </h1>
        </div>

        <div className="lower-section flex flex-col items-center justify-center pt-12 gap-2">
          <h1 className="text-3xl text-slate-700 ">Welcome To </h1>
          <h1 className="logo-text text-5xl text-slate-900 text-center font-bold my-4">
            AutoSecure Guardian
          </h1>
        </div>
      </div>

      <div className="w-full mt-24 grid grid-col-2 grid-flow-col bg-white py-24">
        {cards.map((item) => {
          return (
            <Link
              className="w-80 bg-slate-100 text-slate-900 rounded-md transition-all duration-300 py-6 px-6 flex flex-col items-center mx-auto shadow-xl gap-6 hover:bg-slate-900 hover:text-white"
              key={item.id}
              to={item.link}
            >
              <span className="text-2xl font-semibold">
                {item.title}
              </span>
              <i className={`${item.icon} text-6xl`}></i>
            </Link>
          );
        })}
      </div>
      <GuardFooter/>
    </div>
  );
}

export default Dashboard;
