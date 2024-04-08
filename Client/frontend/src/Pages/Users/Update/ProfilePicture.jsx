import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadProfileImage } from "../../../Redux/Actions/Student";
import Loader from "../../../Components/Loader/Loader";
import userIcon from "/Images/user.png";
import { toast, Toaster } from "sonner";

function ProfilePicture() {
  const [userData, setUserData] = useState({
    _Id: "",
    profilePicture: "",
  });

  const User = useSelector((state) => state.User.User);
  const isLoading = useSelector((state) => state.User.isLoading);
  const success = useSelector((state) => state.User.success);
  const failure = useSelector((state) => state.User.failure);
  const dispatch = useDispatch();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUserData({ ...userData, _ID: User._id });

    const formData = new FormData();
    formData.append("_Id", userData._Id);
    formData.append("profilePicture", userData.profilePicture);

    dispatch(uploadProfileImage(formData));
  };

  useEffect(() => {
    if (failure) {
      toast.success(failure);
    }
  }, [failure]);

  useEffect(() => {
    if (success) {
      toast.success(success);
    }
  }, [success]);

  return (
    <div className="border-b-2 border-b-slate-900">
      <Toaster></Toaster>
      <form
        className="flex flex-col items-center px-5 py-6 gap-7"
        onSubmit={handleFormSubmit}
      >
        <h1 className="text-4xl text-slate-900 font-bold">
          Update Profile Picture
        </h1>
        <div className="flex flex-col gap-6 items-center justify-between">
          <div className="w-56 h-56 rounded-full border-4 border-slate-800">
            <img
              src={`${
                User.token && User.profileImage ? User.profileImage : userIcon
              }`}
              alt="icon"
            />
          </div>
          <input
            type="file"
            name="profilePicture"
            onChange={(e) =>
              setUserData({ ...userData, filePath: e.target.files[0] })
            }
          />
          <button className="px-4 py-1 text-lg bg-slate-900 text-white rounded-sm hover:bg-slate-700">
            {isLoading ? (
              <div className="flex justify-center items-center">
                <Loader></Loader>
              </div>
            ) : (
              <span>Upload Image</span>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfilePicture;
