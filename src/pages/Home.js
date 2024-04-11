import React from "react";

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-fuchsia-600 mb-4">
          Welcome to my website!
        </h1>
        <p className="text-lg text-gray-700">
          This page should be protected by a{" "}
          <span className="font-semibold text-fuchsia-600">PrivateRoutes</span>{" "}
          component for authenticated users.
        </p>
      </div>
    </div>
  );
};

export default Home;
