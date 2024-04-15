import React from "react";

function PageNotFound() {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="login-form flex flex-col items-center gap-8 bg-white px-10 py-12 w-2/4">
        <h1 className="text-5xl text-red-600">Error 404</h1>
        <h1 className="text-5xl text-slate-900">Page Not Found</h1>
        <i className="fa-solid fa-face-sad-tear text-8xl text-slate-500"></i>
      </div>
    </div>
  );
}

export default PageNotFound;
