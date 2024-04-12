import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

// Styling
const labelStyle = "col-span-1 font-bold";
const inputStyle =
  "col-span-3 border-2 focus:bg-fuchsia-100 focus:outline-none focus:border-fuchsia-600 rounded-lg font-semibold p-2 px-4";
const buttonStyle =
  "col-span-4 bg-fuchsia-600 p-2 px-10 rounded-full font-semibold text-lg text-white justify-self-center hover:bg-fuchsia-700 hover:shadow-xl active:bg-fuchsia-800 active:shadow-none";

export default function Login() {
  const navigate = useNavigate();
  const { user, loginUser } = useAuth();
  const loginValues = useRef();

  const loginDataHandler = async (e) => {
    e.preventDefault();
    const email = loginValues.current.email.value;
    const password = loginValues.current.password.value;

    const userInfo = { email, password };
    loginUser(userInfo);
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <div className="container shadow-lg rounded-md mx-auto w-[60%] p-10 bg-fuchsia-100">
      <div className="login-register-container">
        <form
          className="grid grid-cols-4 gap-4"
          ref={loginValues}
          onSubmit={loginDataHandler}
        >
          <label className={labelStyle}>Email:</label>
          <input
            className={inputStyle}
            required
            type="email"
            name="email"
            placeholder="Enter email..."
          />

          <label className={labelStyle}>Password:</label>
          <input
            className={inputStyle}
            type="password"
            name="password"
            placeholder="Enter password..."
          />

          <button className={buttonStyle} type="submit">
            Login
          </button>
        </form>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/register" className="text-fuchsia-600 hover:font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
