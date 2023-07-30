import React from "react";

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
          <div className="dark-color h-[85px] relative ">
            <div className="dark-color  w-full h-7 rounded-[50%] absolute top-[-15px] border border-[#899AA1]" />
          </div>
          <div className="liquidity-center w-full h-[210px] relative">
            <div className="ellipse-middle w-full h-[32px] absolute top-[-15px]"></div>
            <div className="airdrop-bottom-ellipse liquidity-center w-full h-[32px] absolute bottom-[-13px] z-[1]"></div>
            <div className="airdrop-light w-full h-[31px] absolute bottom-[-15%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
