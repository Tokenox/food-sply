import Button from "@/common/Button";
import Image from "next/image";
import React from "react";

const OurCommunity = () => {
  return (
    <div className="bg-[url('/nft-images/community/image-sm.svg')] md:bg-[url('/nft-images/community/image-lg.svg')] h-[520px] sm:h-[650px] md:h-[480px] min-[1400px]:h-[620px] 2xl:h-[700px] bg-no-repeat bg-bottom bg-contain mt-14 lg:mt-[100px]">
      <h1 className="text-green text-3xl xl:text-[52px] font-bold uppercase text-center">
        Join the <span className="text-light-green"> FOOD</span>
        <span className="text-orange">SPLY</span> Community
      </h1>
      <div className="flex justify-center mt-2 md:mt-3">
        <p className="text-[#010101] text-base xl:text-2xl font-normal text-center lg:w-[70%] xl:w-[50%] 2xl:w-[45%]">
          Dive into where sustainability meets digital innovation. Engage, trade, and grow with
          fellow enthusiasts
        </p>
      </div>
      <div className="flex justify-center">
        <Button type="fill" className="mt-4 text-xl font-bold whitespace-nowrap">
          Dive In Now
        </Button>
      </div>
    </div>
  );
};

export default OurCommunity;
