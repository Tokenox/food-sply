import Image from "next/image";
import React from "react";

const NftCard = ({ image, price, token, name }) => {
  return (
    <div className="p-3 bg-red-300 rounded-2xl">
      <div className="flex flex-col justify-between items-start">
        <div className="h-[39vh] w-[100%]">
          <Image
            src={image}
            alt=""
            width={270}
            height={290}
            className="h-full w-[100%] rounded-t-2xl object-fit border"
          />
        </div>
        <h2 className="text-[#010101] text-2xl font-bold mb-3 mt-3 capitalize">{name}</h2>
        <div className="border-t-2 border-solid border-orange h-[12vh] w-[100%] flex  justify-between items-center">
          <div className="flex justify-between items-center gap-2">
            <div className="">
              <Image
                src="/nft-images/collection/Group 1000001783.svg"
                alt=""
                width={20}
                height={32}
              />
            </div>
            <div className="flex justify-center items-center flex-col ">
              <p className="text-xs font-normal text-[#010101] mb-1">Current Price</p>
              <p className="text-xl font-normal text-[#010101]">4.32 ETH</p>
            </div>
          </div>
          <div>
            <button className="py-[9px] px-[28px] border-2 border-solid border-orange rounded-[8px] text-orange hover:bg-orange hover:text-white">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;