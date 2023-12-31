import { NftStepsData } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const NftSteps = () => {
  return (
    <div className="section-margin">
      <h2 className="text-3xl xl:text-5xl text-green font-bold capitalize">Mint Your NFT</h2>
      <p className="text-dark-text text-base text-justify md:text-left lg:text-2xl font-normal xl:max-w-[90%] mt-4">
        Embark on a smooth journey to digital ownership. In just a few intuitive steps, claim your
        piece of the sustainable future with a unique FOODSPLY veggie NFT.
      </p>
      <div className="py-8 lg:py-[60px] flex lg:grid grid-cols-4 gap-5 overflow-x-auto">
        {NftStepsData.map((item) => (
          <div
            key={item.id}
            className="border-2 border-[#D2D2D2] px-6 2xl:px-8 h-[300px] flex flex-col justify-center items-center gap-5 rounded-2xl hover:bg-[#FEF9F3] flex-basis"
          >
            <Image src={item.image} alt={item.title} width={item.width} height={160} />
            <div className="text-center">
              <p className="text-light-green text-xl font-normal uppercase mb-3">Step {item.id}</p>
              <h3 className="text-green text-xl font-medium capitalize leading-7 xl:whitespace-nowrap 2xl:text-2xl">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NftSteps;
