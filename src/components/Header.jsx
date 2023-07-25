import React from "react";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="h-screen bg-[url('/images/header-bg-img.svg')] bg-no-repeat bg-cover bg-center pt-4">
      <Navbar />
    </div>
  );
};

export default Header;
