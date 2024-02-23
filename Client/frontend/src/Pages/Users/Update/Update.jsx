import React from "react";
import ProfilePicture from "./ProfilePicture";
import UserDetailsForm from "./UserDetailsForm";
import Navbar from "../../../Components/Navbar/Navbar";

function Update() {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-full flex justify-center">
        <div className="w-3/4 bg-white pt-9">
          <ProfilePicture />
          <UserDetailsForm />
        </div>
      </div>
    </>
  );
}

export default Update;
