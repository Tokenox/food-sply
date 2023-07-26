"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
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
      <div className="flex justify-between items-center section-padding-x h-[85%]">
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
              <div className="filled-box rounded-md w-[50px] h-[50px] flex justify-center items-center text-[22px] text-white">
                {days}
              </div>
              :
              <div className="filled-box rounded-md w-[50px] h-[50px] flex justify-center items-center text-[22px] text-white">
                {hours}
              </div>
              :
              <div className="filled-box rounded-md w-[50px] h-[50px] flex justify-center items-center text-[22px] text-white">
                {minutes}
              </div>
              :
              <div className="filled-box rounded-md w-[50px] h-[50px] flex justify-center items-center text-[22px] text-white">
                {seconds}
              </div>
            </div>
          </div>
        </div>
        {/* Second Col */}
        <div className="custom-border backdrop-blur-[6px] text-white py-6 px-5">
          <p className="text-[22px] font-bold text-center">Token Swap</p>
          <div className="">
            <label>From</label>
            <div className="bg-night flex p-2 rounded-full w-[324px]">
              <div className="rounded-full bg-dark py-3 px-5 flex gap-6">
                <div className="flex gap-2">
                  <Image src={"/icon/eth-icon.png"} alt="Ethereum" width={22} height={22} />
                  <b>USDT</b>
                </div>
                <Image src={"/icon/down-arrow.svg"} alt="Arrow Down" width={13} height={22} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
