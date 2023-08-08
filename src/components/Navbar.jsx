"use client";
import { NavbarItems } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import Button from "../common/Button";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
  return (
    <div className="section-margin-x flex justify-between items-center">
      <Image src={"/logo.svg"} alt="Food Sply" width={181} height={54} />
      <div className="flex gap-8 h-[54px] items-center text-white">
        {NavbarItems?.map((item, i) => (
          <Fade key={i} triggerOnce delay={i * 100}>
            <p className="navbar-hover-effect text-xl" key={item.title}>
              {item.title}
            </p>
          </Fade>
        ))}
      </div>
      <Fade triggerOnce delay={NavbarItems.length * 100}>
        <Button type={"outline"} className="text-lg">
          Login
        </Button>
      </Fade>
    </div>
  );
};

export default Navbar;
