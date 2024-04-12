import { Outlet, Navigate } from "react-router-dom";
import React from "react";

const PrivateRoutes = () => {
  const user = false;
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
