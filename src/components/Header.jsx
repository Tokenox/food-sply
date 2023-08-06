"use client";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import { HamburgerIcon } from "../../public";
import Button from "../common/Button";
import Divider from "../common/Divider";
import Navbar from "./Navbar";
import { Fade, Slide } from "react-awesome-reveal";

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
    <Fragment>
      <div className="hidden lg:block h-screen bg-[url('/svg/header-bg.svg')] bg-no-repeat bg-cover bg-center pt-4 min-h-[800px]">
        <Navbar />
        <div className="section-margin-x flex justify-between items-center h-[75%]">
          {/* First Col */}
          <div className="flex flex-col gap-[38px]">
            <Slide direction="left" duration={1000} triggerOnce>
              <Fade duration={2500} triggerOnce>
                <div>
                  <div className="mb-5">
                    <Image src={"/svg/new-era.svg"} alt="New Era" width={344} height={30} />
                  </div>
                  <div>
                    <h1>
                      <Fade
                        delay={1e3}
                        cascade
                        damping={1e-1}
                        className="text-border text-white font-bold text-[52px] capitalize mt-4 leading-tight w-[515px] !whitespace-break-spaces"
                      >
                        AgriTech Industry Nourishing a Sustainable Future
                      </Fade>
                    </h1>
                  </div>
                </div>
              </Fade>
            </Slide>
            <Slide direction="up" delay={1000} duration={1000} triggerOnce>
              <Fade duration={2000} delay={1000} triggerOnce>
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
              </Fade>
            </Slide>
          </div>
          {/* Second Col */}
          <Slide direction="right" duration={800} triggerOnce>
            <Fade duration={1500} triggerOnce>
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
                        <Image
                          src={"/icon/down-arrow.svg"}
                          alt="Arrow Down"
                          width={13}
                          height={22}
                        />
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
                        <Image
                          src={"/icon/down-arrow.svg"}
                          alt="Arrow Down"
                          width={13}
                          height={22}
                        />
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
            </Fade>
          </Slide>
        </div>
        {/* Header Bottom */}
        <div className="section-margin-x text-white flex flex-col items-center">
          <div className="w-[600px] text-center">
            <Fade delay={1e3} cascade damping={1e-1} triggerOnce>
              <p className="pb-5">
                We are feeding the world, by providing a frictionless food supply chain marketplace
                that brings together all parties in the agri-food value chain.
              </p>
            </Fade>
            <Fade delay={1200} cascade damping={0.1} triggerOnce>
              <Button type={"fill"}>Learn More</Button>
            </Fade>
          </div>
        </div>
      </div>
      {/* //! Small screens */}
      <div className="bg-[url('/svg/bg-header-sm.svg')] w-full bg-cover h-screen min-h-[1150px] bg-no-repeat lg:hidden">
        <div className="section-margin-x">
          <div className="py-4 flex justify-between items-center">
            <Image src={"/logo-sm.svg"} alt="Food sply" width={132} height={48} />
            <HamburgerIcon />
          </div>
          <div className="py-4">
            <Image src={"/images/header-title-one.svg"} alt="Food sply" width={235} height={18} />

            <h1 className="text-border text-white font-bold text-5xl capitalize mt-4 leading-tight">
              <Fade delay={1e3} cascade damping={1e-1} className="!whitespace-break-spaces">
                AgriTech Industry Nourishing a Sustainable Future
              </Fade>
            </h1>

            {/* Timer */}
            <div className="custom-border backdrop-blur-[6px] px-6 pt-3 pb-5 mt-6">
              <p className="font-bold text-white text-center mb-5">Time Left To Invest</p>

              <div className="flex gap-4 items-baseline text-white">
                <div className="flex flex-col items-center">
                  <div className="box-filled rounded-md w-[50px] h-[50px] flex justify-center items-center text-[22px] text-white">
                    {days}
                  </div>
                  <span className="mt-1">Days</span>
                </div>
                :
                <div className="flex flex-col items-center">
                  <div className="box-filled rounded-md w-[50px] h-[50px] flex justify-center items-center text-[22px] text-white">
                    {hours}
                  </div>
                  <span className="mt-1">Hours</span>
                </div>
                :
                <div className="flex flex-col items-center">
                  <div className="box-filled rounded-md w-[50px] h-[50px] flex justify-center items-center text-[22px] text-white">
                    {minutes}
                  </div>
                  <span className="mt-1">Min</span>
                </div>
                :
                <div className="flex flex-col items-center">
                  <div className="box-filled rounded-md w-[50px] h-[50px] flex justify-center items-center text-[22px] text-white">
                    {seconds}
                  </div>
                  <span className="mt-1">Sec</span>
                </div>
              </div>
            </div>
            {/* Calculate */}
            <div className="custom-border backdrop-blur-[6px] text-white py-6 px-5 mt-6">
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
      </div>
    </Fragment>
  );
};

export default Header;
