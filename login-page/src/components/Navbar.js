import React from "react";

export default function Navbar(props) {
  return (
    <nav className="bg-fuchsia-800 text-white flex p-6 px-8">
      <h2 className="grow font-bold text-4xl">A Typical Page</h2>
      {props.loginStatus && (
        <ul className="flex gap-6 font-semibold text-lg">
          <li>
            <button className="align-middle">Users</button>
          </li>
          <li>
            <button className="align-middle">Admin</button>
          </li>
          <li>
            <button
              onClick={props.setLoginStatus}
              className="bg-pink-500 p-1 px-6 rounded-full hover:bg-pink-600 hover:shadow-lg active:bg-pink-500 active:shadow-none"
            >
              Logout
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
