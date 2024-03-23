import React from "react";

const labelStyle = "col-span-1 font-bold";
const inputStyle = "col-span-3 border-2 rounded-lg font-semibold p-1 px-1.5";
const buttonStyle =
  "col-span-4 bg-fuchsia-900 p-2 px-12 rounded-full font-semibold text-lg text-white justify-self-center";

export default function Login() {
  return (
    <div>
      <form className="mx-auto mt-4 shadow-xl border-2 rounded-xl md:w-1/2 grid grid-cols-4 p-10 gap-4">
        <label className={labelStyle}>E-Mail</label>
        <input className={inputStyle} type="email" />
        <label className={labelStyle}>Password</label>
        <input className={inputStyle} type="password" />
        <button className={buttonStyle} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
