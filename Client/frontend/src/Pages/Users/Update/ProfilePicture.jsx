import React from "react";

function ProfilePicture() {
  return (
    <div className="border-b-2 border-b-slate-900">
      <form className="flex flex-col items-center px-5 py-6 gap-7">
        <h1 className="text-4xl text-slate-900 font-bold">
          Update Profile Picture
        </h1>
        <div className="flex flex-col gap-6 items-center justify-between">
          <div className="w-56 h-56">
            <img src="\Images\user.png" alt="" />
          </div>
          <input type="file" />
          <button className="px-4 py-1 text-lg bg-slate-900 text-white rounded-sm hover:bg-slate-700">
            Update Details
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfilePicture;
