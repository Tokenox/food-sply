'use client';
import Image from "next/image";
import React from "react";

const ServiceProvide = () => {
  return (
    <div className="section-margin flex flex-col lg:flex-row justify-between items-center gap-4">
      {/* First col */}
      <div className="w-full lg:w-[550px]">
        <h1 className="uppercase text-green text-3xl text-center lg:text-left lg:text-5xl font-bold mb-5 lg:mb-7">Services we provide</h1>
        <p className="text-base text-center lg:text-left lg:text-xl leading-[150%] text-text-dark">
          Agriculture is one of the largest industries in the world. Currently its going threw a
          revolution, let us help you navigate the new world.{" "}
        </p>
      </div>
      {/* Second col */}
      <div className="w-[90%] mt-9 lg:mt-0 lg:w-[50%] flex justify-center lg:justify-end">
        <Image
          src={"/svg/service-provide.svg"}
          alt="Food sply services provides"
          width={700}
          height={320}
        />
      </div>
    </div>
  );
};

export default ServiceProvide;
