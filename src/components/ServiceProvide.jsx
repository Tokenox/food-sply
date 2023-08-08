"use client";
import Image from "next/image";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const ServiceProvide = () => {
  return (
    <div className="section-margin flex flex-col lg:flex-row justify-between items-center gap-4">
      {/* First col */}
      <Slide direction="up" fraction={0} triggerOnce>
        <Fade triggerOnce delay={200} duration={2000}>
          <div className="w-full lg:w-[580px]">
            <div className="mb-5 lg:mb-7">
              <h1 className="uppercase text-green text-3xl text-center lg:text-left lg:text-5xl font-bold mb-3">
                Food For Sale
              </h1>
              <h5 className="uppercase text-orange text-lg lg:text-xl font-bold text-center lg:text-left">
                Buy our delious produce ethically sourced!
              </h5>
            </div>
            <p className="text-base text-center lg:text-left lg:text-xl leading-[150%] text-text-dark">
              Agriculture is one of the largest industries in the world. Currently its going threw a
              revolution, let us help you navigate the new world.{" "}
            </p>
          </div>
        </Fade>
      </Slide>

      {/* Second col */}
      <div className="w-[90%] mt-9 lg:mt-0 lg:w-[50%] flex justify-center lg:justify-end">
        <Slide triggerOnce direction="up" fraction={0}>
          <Fade triggerOnce delay={200} duration={2000}>
            <Image
              src={"/svg/service-provide.svg"}
              alt="Food sply services provides"
              width={700}
              height={320}
            />
          </Fade>
        </Slide>
      </div>
    </div>
  );
};

export default ServiceProvide;
