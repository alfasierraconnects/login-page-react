import React from "react";

const Footer = () => {
  return (
    <footer className="bg-fuchsia-600 text-white py-6 px-8 mt-8">
      <div className="container mx-auto flex items-center justify-between">
        <p>
          © <span className="font-bold">LOGO</span> 2024. All rights reserved.
        </p>
        <div className="flex gap-6">
          <p className="hover:text-pink-200 cursor-pointer">Terms of Service</p>
          <p className="hover:text-pink-200 cursor-pointer">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
