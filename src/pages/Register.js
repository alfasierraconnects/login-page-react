import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

const labelStyle = "col-span-1 font-bold";
const inputStyle =
  "col-span-3 border-2 focus:bg-fuchsia-100 focus:outline-none focus:border-fuchsia-600 rounded-lg font-semibold p-2 px-4";
const buttonStyle =
  "col-span-4 bg-fuchsia-600 p-2 px-10 rounded-full font-semibold text-lg text-white justify-self-center hover:bg-fuchsia-700 hover:shadow-xl active:bg-fuchsia-800 active:shadow-none";

const Register = () => {
  const { registerUser } = useAuth();
  const registerForm = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = registerForm.current.name.value;
    const email = registerForm.current.email.value;
    const password1 = registerForm.current.password1.value;
    const password2 = registerForm.current.password2.value;

    if (password1 !== password2) {
      alert("Passwords did not match!");
      return;
    }

    const userInfo = { name, email, password1, password2 };

    registerUser(userInfo);
  };

  return (
    <div className="container mx-auto w-[60%] p-10 bg-fuchsia-100 shadow-lg rounded-md ">
      <form
        className="grid grid-cols-4 gap-4"
        ref={registerForm}
        onSubmit={handleSubmit}
      >
        <label className={labelStyle}>Name:</label>
        <input
          className={inputStyle}
          required
          type="text"
          name="name"
          placeholder="Enter name..."
        />

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
          name="password1"
          placeholder="Enter password..."
        />

        <label className={labelStyle}>Confirm Password:</label>
        <input
          className={inputStyle}
          type="password"
          name="password2"
          placeholder="Confirm password..."
        />

        <button type="submit" className={buttonStyle}>
          Register
        </button>
      </form>

      <p className="mt-4 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-fuchsia-600 hover:font-semibold">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
