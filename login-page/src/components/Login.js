import React, { useState } from "react";

const labelStyle = "col-span-1 font-bold";
const inputStyle =
  "col-span-3 border-2 focus:bg-fuchsia-100 focus:outline-none focus:border-fuchsia-900 rounded-lg font-semibold p-1 px-1.5";
const buttonStyle =
  "col-span-4 bg-fuchsia-900 p-2 px-12 rounded-full font-semibold text-lg text-white justify-self-center hover:bg-fuchsia-950 hover:shadow-xl active:bg-fuchsia-900 active:shadow-none";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChangeHandler = (e) => setEmail(e.target.value);
  const passwordChangeHandler = (e) => setPassword(e.target.value);

  const loggingInHandler = (e) => {
    e.preventDefault();
    if (
      email.trim().length === 0 ||
      password.trim().length === 0 ||
      email !== "abc@xyz.com" ||
      password !== "12345"
    ) {
      props.sendError();
    }
    if (email === "abc@xyz.com" && password === "12345") {
      props.setLoginStatus();
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <div className="mx-auto mt-4 shadow-xl border-2 rounded-xl md:w-1/2 p-10">
        {props.loginStatus && (
          <div className="text-3xl font-bold text-center">Welcome back !</div>
        )}
        {props.loginStatus || (
          <form className="grid grid-cols-4 gap-4" onSubmit={loggingInHandler}>
            <label className={labelStyle}>E-Mail</label>
            <input
              onChange={emailChangeHandler}
              className={inputStyle}
              type="email"
              value={email}
              required
            />
            <label className={labelStyle}>Password</label>
            <input
              onChange={passwordChangeHandler}
              className={inputStyle}
              type="password"
              value={password}
              required
            />
            <button className={buttonStyle} type="submit">
              Login
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
