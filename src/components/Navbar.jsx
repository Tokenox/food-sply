'use client';
import { NavbarItems } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import Button from "../common/Button";

const Navbar = () => {
  return (
    <div className="section-margin-x flex justify-between items-center">
      <Image src={"/logo.svg"} alt="Food Sply" width={151} height={54} />
      <div className="flex gap-8 h-[54px] items-center text-white">
        {NavbarItems?.map((item) => (
          <p className="navbar-hover-effect" key={item.title}>
            {item.title}
          </p>
        ))}
      </div>
      <Button type={"outline"}>Login</Button>
    </div>
  );
};

export default Navbar;
