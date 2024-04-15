import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { uploadProfileImage } from "../../../Redux/Actions/Student";
import Loader from "../../../Components/Loader/Loader";
import userIcon from "/Images/user.png";
import { toast, Toaster } from "sonner";

function ProfilePicture() {

  const User = useSelector((state) => state.User.User);
  const isLoading = useSelector((state) => state.User.isLoading);
  const failure = useSelector((state) => state.User.failure);
  const dispatch = useDispatch();

  const [userData, setUserData] = useState({
    _Id: User._id,
    profilePicture: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("_Id", userData._Id);
    formData.append("profilePicture", userData.profilePicture);

    dispatch(uploadProfileImage(formData));
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
          Update Profile Picture
        </h1>
        <div className="flex flex-col gap-6 items-center justify-between">
          <div className="w-56 h-56 rounded-full border-4 border-slate-800 overflow-hidden">
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
              setUserData({ ...userData, profilePicture: e.target.files[0] })
            }
          />
          <button className="px-4 py-1 text-lg bg-slate-900 text-white rounded-sm hover:bg-slate-700">
            {isLoading ? <span>Loading....</span> : <span>Upload Image</span>}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProfilePicture;
