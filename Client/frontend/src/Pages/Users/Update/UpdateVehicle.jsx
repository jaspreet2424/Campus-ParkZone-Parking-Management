import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateVehicleDetails, uploadProfileImage } from "../../../Redux/Actions/Student";
import { toast, Toaster } from "sonner";
import notFound from "/Images/noDataFound.png";

function UpdateVehicle() {
  const User = useSelector((state) => state.User.User);
  const isLoading = useSelector((state) => state.User.isLoading);
  const failure = useSelector((state) => state.User.failure);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    _Id: User._id,
    RCNumber: "",
    RCImage: "",
    numberPlate: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("_Id", userData._Id);
    formData.append("RCImage", userData.RCImage);
    formData.append("RCNumber", userData.RCNumber);
    formData.append("numberPlate", userData.numberPlate);

    dispatch(updateVehicleDetails(formData));
  };

  useEffect(() => {
    if (failure) {
      toast.error(failure);
    }
  }, [failure]);

  return (
    <div className="border-b-2 border-b-slate-900">
      <Toaster richColors position="bottom-center"></Toaster>
      <form
        className="flex flex-col items-center px-5 py-6 gap-7"
        onSubmit={handleFormSubmit}
      >
        <h1 className="text-4xl text-slate-900 font-bold">
          Update Vehicle Details
        </h1>
        <div className="each-detail px-3 w-full items-center flex justify-between ">
          <label htmlFor="RCNumber" className="text-lg font-bold flex-1">
            Chessis Number :
          </label>
          <input
            type="text"
            id="RCNumber"
            value={userData.RCNumber}
            onChange={(e)=> setUserData({...userData , RCNumber : e.target.value})}
            placeholder="Enter Chessis Number"
            className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
          />
        </div>
        <div className="each-detail px-3 w-full items-center flex justify-between ">
          <label htmlFor="numberPlate" className="text-lg font-bold flex-1">
            Registration Number :
          </label>
          <input
            type="text"
            id="numberPlate"
            value={userData.numberPlate}
            onChange={(e)=> setUserData({...userData , numberPlate : e.target.value})}
            placeholder="Enter Registration Number"
            className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
          />
        </div>
        
        <div className="flex flex-col gap-6 items-center justify-between">
          <div className="w-76 h-52 rounded-lg border-4 border-slate-800 overflow-hidden">
            <img
              src={`${User.token && User.RCImage ? User.RCImage : notFound}`}
              alt="icon"
              className="w-full h-full"
            />
          </div>
          <input
            type="file"
            name="RCImage"
            onChange={(e) =>
              setUserData({ ...userData, RCImage: e.target.files[0] })
            }
          />
          <button className="px-4 py-1 text-lg bg-slate-900 text-white rounded-sm hover:bg-slate-700">
            {isLoading ? <span>Loading....</span> : <span>Update Now</span>}
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateVehicle;
