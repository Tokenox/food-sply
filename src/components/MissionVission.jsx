import Image from "next/image";
import React from "react";

const MissionVission = () => {
  return (
    <div className="section-margin flex justify-between items-center gap-40">
      {/* First col */}
      <div>
        <Image
          src={"/svg/mission-vision/mission-img.svg"}
          alt="Food sply mission and vision"
          width={380}
          height={550}
        />
      </div>
      {/* Second col */}
      <div className="w-[730px]">
        <div className="mb-[52px]">
          <h2 className="text-5xl text-green mb-6 font-bold">Mission</h2>
          <p className="text-[22px] text-text-dark">
            We are feeding the future by connecting farmers, suppliers, and consumers through our
            FOODSPLY Platform, building a network that nourishes today and sustains tomorrow.
          </p>
        </div>
        <div className="">
          <h2 className="text-5xl text-green mb-6 font-bold">Our Vision</h2>
          <p className="text-[22px] text-text-dark">
            Our vision is to create a food supply chain marketplace that brings together all parties
            in the agri-food value chain.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVission;
