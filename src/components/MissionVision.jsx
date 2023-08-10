"use client";
import Image from "next/image";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const MissionVision = () => {
  return (
    <Slide direction="up" fraction={0} triggerOnce>
      <Fade triggerOnce delay={200} duration={2000}>
        <div className="section-margin !my-[70px] lg:my-auto flex flex-col-reverse lg:flex-row justify-between items-center lg:gap-40">
          {/* First col */}
          <div className="w-[70%] lg:w-auto mt-10 lg:mt-auto">
            <Image
              src={"/svg/mission-vision/mission-img.svg"}
              alt="Food sply mission and vision"
              width={350}
              height={550}
            />
          </div>
          {/* Second col */}
          <div className="lg:w-[730px]">
            <div className="mb-8 lg:mb-[52px]">
              <h2 className="text-2xl lg:text-5xl text-green mb-3 lg:mb-6 font-bold">Mission</h2>
              <p className="text-base lg:text-[22px] text-text-dark">
                We are feeding the future by connecting farmers, suppliers, and consumers through
                our FOODSPLY Platform, building a network that nourishes today and sustains
                tomorrow.
              </p>
            </div>
            <div className="">
              <h2 className="text-2xl lg:text-5xl text-green mb-3 lg:mb-6 font-bold">Our Vision</h2>
              <p className="text-base lg:text-[22px] text-text-dark">
                Our vision is to create a food supply chain marketplace that brings together all
                parties in the agri-food value chain.
              </p>
            </div>
          </div>
        </div>
      </Fade>
    </Slide>
  );
};

export default MissionVision;
