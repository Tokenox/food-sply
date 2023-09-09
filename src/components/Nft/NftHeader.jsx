import Button from "@/common/Button";
import Image from "next/image";
import React from "react";
import Navbar from "../Navbar";
import ladyVector from "../../../public/nft-images/header/lady-vector.svg";
import menVector from "../../../public/nft-images/header/men-vector.svg";

const NftHeader = () => {
  return (
    <div className="bg-[url('/nft-images/header/nft-header.svg')] h-screen w-full bg-no-repeat bg-cover bg-center">
      <Navbar />
      <div className="section-margin-x">
        <div className="flex justify-center mt-[40px] min-[1400px]:mt-[80px]">
          <Image
            src="/nft-images/header/nft-header-text.svg"
            alt="discover and collect nfts"
            width={700}
            height={63}
          />
        </div>
        <div className="relative flex justify-center mt-7 min-[1400px]:mt-8">
          <div className="relative z-[1]">
            <Image
              src={menVector}
              alt="food sply nft"
              className="w-[400px] lg:h-[390px] min-[1400px]:h-[570px]  object-contain"
            />
          </div>
          <div className="w-[595px] flex flex-col items-center">
            <h2 className="text-border-v2 text-center text-[42px] text-white capitalize w-[630px]">
              Own Tomorrow&apos;s Harvest Today
            </h2>
            <p className="text-2xl text-white capitalize text-center w-[544px] my-6 min-[1400px]:my-9">
              Dive into a digital harvest where each NFT stands for sustainability and tech harmony.
              Cultivate the future, one veggie at a time.
            </p>
            <Button type="fill" className="text-xl font-bold py-3 mt-4 min-[1400px]:mt-0">
              Mint My Veggie NFT
            </Button>
            <Image
              src="/nft-images/header/header-line.svg"
              alt="discover and collect nfts"
              width={1070}
              height={200}
              className="absolute hidden min-[1400px]:block bottom-[-30px] 2xl:bottom-[-50px]"
            />
          </div>
          <div className="relative z-[1]">
            <Image
              src={ladyVector}
              alt="food sply nft"
              className="w-[400px] lg:h-[390px] min-[1400px]:h-[570px] object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftHeader;
