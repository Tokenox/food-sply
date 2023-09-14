import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const NftCard = ({ image, price, token, name, id }) => {
  const { push } = useRouter();
  return (
    <div
      className="mr-4 md:mr-auto md:mx-4 bg-white rounded-lg p-3 border border-silver flex-basis mb-5"
      onClick={() => push(`/nft/${id}`)}
    >
      <div className="flex flex-col justify-between items-start">
        <div className=" w-full flex justify-center items-start]">
          <Image src={image} alt="" width={270} height={290} className="h-[170px] rounded-lg" />
        </div>
        <h2 className="text-[#010101] text-xl font-semibold mb-3 mt-3 capitalize">{name}</h2>
        <div className="border-t-2 border-solid border-orange py-5 w-[100%] flex  justify-between items-center">
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
            <button className="py-1.5 px-3 border-2 border-solid border-orange rounded-[8px] text-orange hover:bg-orange hover:text-white">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftCard;
