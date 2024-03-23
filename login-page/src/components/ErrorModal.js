import React from "react";

export default function ErrorModal(props) {
  return (
    <div className="bg-black inset-0 fixed bg-opacity-75 flex justify-center items-center">
      <div className="flex flex-col bg-white font-semibold w-72 h-36 relative rounded-md overflow-hidden">
        <h3 className="p-2 bg-fuchsia-900 text-white text-xl">Error !</h3>
        <p className="p-2">Please enter correct E-Mail and Password</p>
        <button
          onClick={() => {
            props.removeError();
          }}
          className="absolute right-0 bottom-0 bg-fuchsia-900 p-1 px-4 rounded-full text-white m-2 hover:bg-fuchsia-950 hover:shadow-lg active:bg-fuchsia-900 active:shadow-none"
        >
          Okay
        </button>
      </div>
    </div>
  );
}
