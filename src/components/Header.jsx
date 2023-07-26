"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import Divider from "./Divider";
import Navbar from "./Navbar";

const Header = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      timeLeftToInvest();
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // write a funcation time left to invest
  const timeLeftToInvest = () => {
    const currentDate = new Date();
    const endDate = new Date("2023-08-31");
    const totalSeconds = (endDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;
    setDays(days);
    setHours(hours);
    setMinutes(minutes);
    setSeconds(seconds);
  };

  return (
    <div className="h-screen bg-[url('/images/header-bg-img.svg')] bg-no-repeat bg-cover bg-center pt-4">
      <Navbar />
      <div className="section-padding-x flex justify-between items-center h-[75%]">
        {/* First Col */}
        <div className="flex flex-col gap-[38px]">
          <div>
            <div className="mb-5">
              <Image src={"/images/new-era.png"} alt="New Era" width={344} height={38} />
            </div>
            <div>
              <Image src={"/images/agri-tech.png"} alt="Agri Tech" width={414} height={183} />
            </div>
          </div>
          <div className="custom-border backdrop-blur-[6px] px-12 pt-3 pb-5">
            <p className="font-bold text-white text-center mb-5">Time Left To Invest</p>
            <div className="flex gap-4 items-center text-white">
              <div className="box-filled rounded-md w-[50px] h-[50px] flex justify-center items-center text-[22px] text-white">
                {days}
              </div>
              :
              <div className="box-filled rounded-md w-[50px] h-[50px] flex justify-center items-center text-[22px] text-white">
                {hours}
              </div>
              :
              <div className="box-filled rounded-md w-[50px] h-[50px] flex justify-center items-center text-[22px] text-white">
                {minutes}
              </div>
              :
              <div className="box-filled rounded-md w-[50px] h-[50px] flex justify-center items-center text-[22px] text-white">
                {seconds}
              </div>
            </div>
          </div>
        </div>
        {/* Second Col */}
        <div>
          <div className="custom-border backdrop-blur-[6px] text-white py-6 px-5">
            <p className="text-[22px] font-bold text-center">Token Swap</p>
            <div className="mb-4">
              <p className="ml-4 mb-2.5">From</p>
              <div className="bg-night flex justify-between items-center p-2 pr-6 rounded-full w-[324px]">
                <div className="rounded-full bg-dark py-3 px-5 flex gap-6">
                  <div className="flex gap-2">
                    <Image src={"/icon/eth-icon.svg"} alt="Ethereum" width={22} height={22} />
                    <b>USDT</b>
                  </div>
                  <Image src={"/icon/down-arrow.svg"} alt="Arrow Down" width={13} height={22} />
                </div>
                <p className="text-text-grey text-sm">Balance: 430.00</p>
              </div>
            </div>
            <div className="">
              <p className="ml-4 mb-2.5">To</p>
              <div className="bg-night flex justify-between items-center p-2 pr-6 rounded-full w-[324px]">
                <div className="rounded-full bg-dark py-3 px-5 flex gap-6">
                  <div className="flex gap-2">
                    <Image src={"/icon/eth-icon.svg"} alt="Ethereum" width={22} height={22} />
                    <b>USDT</b>
                  </div>
                  <Image src={"/icon/down-arrow.svg"} alt="Arrow Down" width={13} height={22} />
                </div>
                <p className="text-text-grey text-sm">Balance: 430.00</p>
              </div>
            </div>
            <div className="py-6">
              <Divider />
            </div>
            <Button className="flex gap-4 justify-center items-center w-full" type={"fill"}>
              <Image src={"/icon/swap-icon.svg"} alt="Swap" width={16} height={16} />
              <span className="font-bold">Convert</span>
            </Button>
            <div className="flex justify-between items-center my-4 text-silver">
              <p>Total</p>
              <p>591.78 BUSD</p>
            </div>
          </div>
        </div>
      </div>
      {/* Header Bottom */}
      <div className="section-padding-x text-white flex flex-col items-center">
        <div className="w-[600px] text-center">
          <p className="pb-5">
            We are feeding the world, by providing a frictionless food supply chain marketplace that
            brings together all parties in the agri-food value chain.
          </p>
          <Button type={"fill"}>Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
