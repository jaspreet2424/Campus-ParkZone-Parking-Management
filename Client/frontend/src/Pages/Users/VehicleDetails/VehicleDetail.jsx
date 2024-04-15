import React, { useEffect, useState } from "react";
import Loader from "../../../Components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UPLOAD_VEHICLE_DETAIL_FAILURE } from "../../../Redux/Constants/Student";
import { uploadVehicleDetails } from "../../../Redux/Actions/Student";
import { toast, Toaster } from "sonner";

function VehicleDetail() {
  const [vehicleData, setvehicleData] = useState({
    CRN: localStorage.getItem("CRN"),
    vehicleType: "",
    RCNumber: "",
    numberPlate: "",
    RCImage: "",
  });

  const isLoading = useSelector((state) => state.User.isLoading);
  const failure = useSelector((state) => state.User.failure);
  const success = useSelector((state) => state.User.success);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const clearInputFields = () => {
    setvehicleData({
      vehicleType: "",
      RCNumber: "",
      numberPlate: "",
      RCImage: "",
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("CRN", vehicleData.CRN);
    formData.append("vehicleType", vehicleData.vehicleType);
    formData.append("RCNumber", vehicleData.RCNumber);
    formData.append("numberPlate", vehicleData.numberPlate);
    formData.append("RCImage", vehicleData.RCImage);

    dispatch(uploadVehicleDetails(formData, navigate));
    // console.log(vehicleData.getAll());
  };

  useEffect(() => {
    if (failure) {
      toast.error(failure);
      dispatch({ type: UPLOAD_VEHICLE_DETAIL_FAILURE, payload: "" });
    }
  }, [failure]);

  useEffect(() => {
    if (success) {
      toast.success(success);
    }
  }, [success]);

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Toaster richColors position="bottom-right"></Toaster>
      <div className="details-form w-1/3 bg-white px-6 pb-8">
        <form
          className="flex flex-col items-center py-6 gap-7"
          onSubmit={handleFormSubmit}
        >
          <h1 className="text-4xl text-slate-900 font-bold">Upload Details</h1>

          <div className="each-detail px-3 w-full  flex flex-col justify-between ">
            <label htmlFor="vehicleType" className="text-lg font-bold flex-1">
              Vehicle Type :
            </label>
            <select
              name="vehicleType"
              id="vehicleType"
              className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
              value={vehicleData.vehicleType}
              onChange={(e) =>
                setvehicleData({ ...vehicleData, vehicleType: e.target.value })
              }
            >
              <option value="" className="px-4 py-2 "></option>
              <option value="2 Wheeler" className="px-4 py-2 ">
                2 Wheeler
              </option>
              <option value="4 Wheeler" className="px-4 py-2 ">
                4 Wheeler
              </option>
            </select>
          </div>

          <div className="each-detail px-3 w-full  flex flex-col justify-between ">
            <label htmlFor="rcNumber" className="text-lg font-bold flex-1">
              Enter Chassis Number :
            </label>
            <input
              type="text"
              id="rcNumber"
              placeholder="eg : MBLHA11XXXXXXXX21"
              value={vehicleData.RCNumber}
              onChange={(e) =>
                setvehicleData({ ...vehicleData, RCNumber: e.target.value })
              }
              className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
            />
          </div>

          <div className="each-detail px-3 w-full  flex flex-col justify-between ">
            <label htmlFor="numberPlate" className="text-lg font-bold flex-1">
              Enter Vehicle Registration Number :
            </label>
            <input
              type="text"
              id="numberPlate"
              placeholder="eg : PB10XXXXXX"
              value={vehicleData.numberPlate}
              onChange={(e) =>
                setvehicleData({ ...vehicleData, numberPlate: e.target.value })
              }
              className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
            />
          </div>

          <div className="each-detail px-3 w-full  flex flex-col justify-between ">
            <label htmlFor="image" className="text-lg font-bold flex-1">
              Upload RC Image :
            </label>
            <input
              type="file"
              name="RCImage"
              id="image"
              onChange={(e) =>
                setvehicleData({ ...vehicleData, RCImage: e.target.files[0] })
              }
              className="px-3 py-1 text-lg rounded-sm border border-slate-400 hover:border-slate-600 focus:outline-slate-950 bg-slate-100 flex-1"
            />
          </div>

          <div className="w-full bg-slate-600" style={{ height: "2px" }}></div>

          <button className="px-4 py-1 text-lg bg-slate-900 text-white rounded-sm hover:bg-slate-700">
            {isLoading ? <span>Loading....</span> : <span>Proceed</span>}
          </button>
        </form>
        <div className="flex justify-center">
          <button
            className="px-4 py-1 text-lg bg-slate-900 text-white rounded-sm hover:bg-slate-700 "
            onClick={clearInputFields}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default VehicleDetail;
