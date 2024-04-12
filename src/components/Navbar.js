import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

export default function Navbar() {
  const navigate = useNavigate();

  const { user } = useAuth();
  console.log(user);

  const logoutClick = () => {
    navigate("/login");
  };

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
            onClick={logoutClick}
            className="bg-pink-500 p-1 px-6 rounded-full hover:bg-pink-600 hover:shadow-lg active:bg-pink-500 active:shadow-none"
          >
            Logout
          </button>
        </div>
      ) : (
        <button className="bg-pink-500 p-1 px-6 rounded-full hover:bg-pink-600 hover:shadow-lg active:bg-pink-500 active:shadow-none">
          Login
        </button>
      )}
    </nav>
  );
}
