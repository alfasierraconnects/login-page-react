import React, { useState, useEffect } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ErrorModal from "./components/ErrorModal";

export default function App() {
  const [errorPresent, setErrorPresent] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("isLoggedIn") === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

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
