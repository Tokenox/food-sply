import { COLLECTION_CARD_DATA, Collection_UPER_BTNS } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import NftCard from "./NftCard";

const Collections = () => {
  return (
    <div className="p-[100px] pb-[156px] bg-[#FEF9F3]">
      <h1 className="text-green text-5xl font-bold mb-5">Explore Collection</h1>
      <p className="text-dark-text text-[22px] font-normal">
        Discover a lush array of digital veggies. Every NFT tells a story of sustainability, tech,
        and a brighter tomorrow.
      </p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-[1400px]:grid-cols-4  gap-5 mt-12">
        {COLLECTION_CARD_DATA.map((element, index) => (
          <NftCard key={index} name={element.card_heading} image={element.img} />
        ))}
      </div>
    </div>
  );
};

export default Collections;
