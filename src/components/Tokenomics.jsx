import React from "react";
import { AirdropIcon } from "../../public";

const Tokenomics = () => {
  return (
    <div className="bg-bg-dark">
      <div className="section-margin py-[80px]">
        <h2 className="capitalize text-5xl font-bold text-white mb-4">Tokenomics</h2>
        <p className="capitalize text-xl leading-6 text-white w-[620px]">
          we believe that a well-defined roadmap is the key to achieving our vision and driving our
          organization towards success.{" "}
        </p>
        <div className="mt-[100px] w-[140px]">
          <div className="dark-color h-[85px] relative">
            <div className="flex justify-center items-center h-full">
              <p className="airdrop-text -rotate-90 text-4xl font-bold pr-5">1%</p>
            </div>
            <div className="dark-color  w-full h-7 rounded-[50%] absolute top-[-15px] border border-[#899AA1]" />
          </div>
          <div className="airdrop-center w-full h-[210px] relative">
            <div className="flex justify-between items-end h-full pb-7 px-2">
              <div className="flex justify-between w-full items-center">
                <p className="writing-mode font-xl font-bold text-white">Airdrop</p>
                <AirdropIcon />
              </div>
            </div>
            <div className="ellipse-middle w-full h-[32px] absolute top-[-15px]" />
            <div className="airdrop-bottom-ellipse airdrop-center w-full h-[32px] absolute bottom-[-13px] z-[1]" />
            <div className="airdrop-light w-full h-[31px] absolute bottom-[-15%]" />
          </div>
          <div className="mt-12 text-white text-xl text-center">
            <p>Airdrop 1%</p>
            <p>50,000,000,000$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
