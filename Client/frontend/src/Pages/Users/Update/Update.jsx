import React from "react";
import ProfilePicture from "./ProfilePicture";
import UserDetailsForm from "./UserDetailsForm";
import Navbar from "../../../Components/Navbar/Navbar";
import Footer from '../../../Components/Footer/Footer'
import UpdateVehicle from "./updateVehicle";

function Update() {
  return (
    <>
      <Navbar></Navbar>
      <div className="w-full flex justify-center">
        <div className="w-3/4 bg-white pt-9 pb-16">
          <ProfilePicture />
          <UserDetailsForm />
          <UpdateVehicle/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Update;
