import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

export default function Navbar() {
  const { user, logoutUser } = useAuth();
  // console.log(user);

  return (
    <nav className="bg-fuchsia-800 text-white flex items-center justify-between p-6 px-8">
      <h2 className="font-bold text-4xl">LOGO</h2>
      {user ? (
        <div className="flex items-center gap-6 font-semibold text-lg">
          <Link to="/" className="hover:text-pink-500">
            Home
          </Link>
          <Link to="/profile" className="hover:text-pink-500">
            Profile
          </Link>
          <button
            onClick={logoutUser}
            className="bg-pink-500 p-1 px-6 rounded-full hover:bg-pink-600 hover:shadow-lg active:bg-pink-500 active:shadow-none"
          >
            Logout
          </button>
        </div>
      ) : (
        <Link
          to="/login"
          className="bg-pink-500 p-1 px-6 rounded-full hover:bg-pink-600 hover:shadow-lg active:bg-pink-500 active:shadow-none font-semibold text-lg"
        >
          Login
        </Link>
      )}
    </nav>
  );
}
