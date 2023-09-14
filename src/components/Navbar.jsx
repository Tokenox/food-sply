"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NavbarItems } from "@/utils/constants";
import Button from "../common/Button";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import classNames from "classnames";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

const Navbar = ({ className }) => {
  const [color, setColor] = useState(false);
  const address = useAddress();

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => window.removeEventListener("scroll", changeColor);
  }, []);
  const changeColor = () => {
    if (window.scrollY >= 60) setColor(true);
    else setColor(false);
  };

  return (
    <div
      className={classNames("px-[100px] py-2 flex justify-between items-center", {
        // ['fixed w-full z-20 bg-green']: color,
      })}
    >
      <Image src={"/logo.svg"} alt="Food Sply" width={181} height={54} />
      <div className={classNames("flex gap-8 h-[54px] items-center text-white", className)}>
        {NavbarItems?.map((item, i) => (
          <Fade key={i} triggerOnce delay={i * 100}>
            <Link href={item.url} className="navbar-hover-effect text-xl">
              {item.title}
            </Link>
          </Fade>
        ))}
      </div>
      <Fade triggerOnce delay={NavbarItems.length * 100}>
        <Button
          type={"outline"}
          className={classNames("text-lg !py-1 !px-2 mt-3 connectWalletCOntainer", className)}
        >
          <ConnectWallet theme="light" className="" />
        </Button>
      </Fade>
    </div>
  );
};

export default Navbar;
