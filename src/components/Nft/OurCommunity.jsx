import Button from "@/common/Button";
import Image from "next/image";
import React from "react";

const OurCommunity = () => {
  return (
    <div className="mt-[100px]">
      <h1 className="text-green text-[52px] font-bold uppercase text-center">
        Join the <span className="text-light-green"> FOOD</span>
        <span className="text-orange">SPLY</span> Community
      </h1>
      <div className="flex justify-center mt-3">
        <p className="text-[#010101] text-2xl font-normal text-center lg:w-[70%] xl:w-[50%] 2xl:w-[45%]">
          Dive into where sustainability meets digital innovation. Engage, trade, and grow with
          fellow enthusiasts
        </p>
      </div>
      <div className="relative bg-[url('/nft-images/community/landscape.png')] mt-4 min-h-[500px] bg-bottom bg-no-repeat bg-size-x">
        <div className="flex justify-between items-start">
          <Image src="/nft-images/community/left.png" alt="" width={600} height={360} />
          <Button type="fill" className="mt-4 text-xl font-bold whitespace-nowrap">
            Dive In Now
          </Button>
          <Image src="/nft-images/community/right.png" alt="" width={600} height={360} />
        </div>
      </div>
    </div>
  );
};

export default OurCommunity;
