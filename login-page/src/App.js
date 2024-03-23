import React, { useState } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ErrorModal from "./components/ErrorModal";

export default function App() {
  const [errorPresent, setErrorPresent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const errorModalHandler = () => setErrorPresent(!errorPresent);
  const loginStatusHandler = () => setIsLoggedIn(!isLoggedIn);

  return (
    <div>
      <Navbar setLoginStatus={loginStatusHandler} loginStatus={isLoggedIn} />
      <Login
        sendError={errorModalHandler}
        setLoginStatus={loginStatusHandler}
        loginStatus={isLoggedIn}
      />
      {errorPresent && <ErrorModal removeError={errorModalHandler} />}
    </div>
  );
}
