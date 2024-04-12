import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ErrorModal() {
  const location = useLocation();
  const errorMessage = location.state?.message;
  const navigate = useNavigate();

  const handleOkayClick = () => {
    navigate(-1); // Go back to the previous location
  };

  return (
    <div className="bg-black inset-0 fixed bg-opacity-75 flex justify-center items-center">
      <div className="flex flex-col bg-white font-semibold h-[40%] w-[40%] relative rounded-md overflow-hidden">
        <h3 className="p-4 px-6 bg-fuchsia-900 text-white text-xl">Error !</h3>
        <p className="p-10">{errorMessage}</p>
        <button
          onClick={handleOkayClick}
          className="absolute right-0 bottom-0 bg-fuchsia-900 p-2 px-6 rounded-full text-white m-6 hover:bg-fuchsia-950 hover:shadow-lg active:bg-fuchsia-900 active:shadow-none"
        >
          Okay
        </button>
      </div>
    </div>
  );
}
