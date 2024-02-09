import React from "react";
import Details from "../Details/Details";

function Home() {
  return (
    <>
      <div className="introduction-section w-full h-fit">
        <div className="upper-section flex flex-col items-center justify-center pt-12 gap-2">
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

          
        </div>
      </div>
    </>
  );
}

export default Home;
