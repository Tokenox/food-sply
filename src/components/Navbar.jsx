"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NavbarItems } from "@/utils/constants";
import Button from "../common/Button";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import classNames from "classnames";

const Navbar = () => {
  const [color, setColor] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);
  const changeColor = () => {
    if (window.scrollY >= 60) setColor(true);
    else setColor(false);
  };
  return (
    <div className={classNames("px-[100px] py-2 flex justify-between items-center",{
      // ['fixed w-full z-20 bg-green']: color,
    })}>
      <Image src={"/logo.svg"} alt="Food Sply" width={181} height={54} />
      <div className="flex gap-8 h-[54px] items-center text-white">
        {NavbarItems?.map((item, i) => (
          <Fade key={i} triggerOnce delay={i * 100}>
            <Link href={item.url} className="navbar-hover-effect text-xl">
              {item.title}
            </Link>
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
