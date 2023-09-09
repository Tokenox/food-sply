import Button from "@/common/Button";
import Image from "next/image";
import React from "react";
import Navbar from "../Navbar";

const NftHeader = () => {
  return (
    <div className="bg-[url('/nft-images/header/nft-header.svg')] h-screen w-full bg-no-repeat bg-cover bg-center min-h-[800px]">
      <Navbar />
      <div className="section-margin-x">
        <div className="flex justify-center mt-[80px]">
          <Image
            src="/nft-images/header/nft-header-text.svg"
            alt="discover and collect nfts"
            width={700}
            height={63}
          />
        </div>
        <div className="relative flex justify-center mt-8">
          <div className="relative z-[1]">
            <Image
              src="/nft-images/header/men-vector.svg"
              alt="food sply nft"
              width={302}
              height={480}
            />
          </div>
          <div className="w-[695px] flex flex-col items-center">
            <h2 className="text-border-v2 text-[42px] text-white capitalize w-[630px]">
              Own Tomorrow&apos;s Harvest Today
            </h2>
            <p className="text-2xl text-white capitalize text-center w-[544px] my-9">
              Dive into a digital harvest where each NFT stands for sustainability and tech harmony.
              Cultivate the future, one veggie at a time.
            </p>
            <Button type="fill" className="text-xl font-bold py-3">
              Mint My Veggie NFT
            </Button>
            <Image
              src="/nft-images/header/header-line.svg"
              alt="discover and collect nfts"
              width={1050}
              height={200}
              className="absolute bottom-[-60px]"
            />
          </div>
          <div className="relative z-[1]">
            <Image
              src="/nft-images/header/lady-vector.svg"
              alt="food sply nft"
              width={270}
              height={480}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftHeader;
