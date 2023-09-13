import Image from "next/image";
import React from "react";

const NftDetails = () => {
  return (
    <div className="section-margin">
      <div className="grid grid-cols-5 gap-12">
        {/* First col */}
        <div className="col-span-2">
          <Image
            src="/nft-images/nfts/smoothie.svg"
            alt="nft"
            width={552}
            height={670}
            className="border border-[#D2D2D2] rounded-xl p-1"
          />
        </div>
        {/* Second col */}
        <div className="col-span-3">
          <h3 className="text-green text-5xl font-bold">Mixed Smoothie</h3>
          <div className="flex items-center gap-4 mt-3">
            <p className="text-green text-2xl font-medium capitalize">Current Price:</p>
            <h6 className="text-gradient text-2xl font-bold uppercase">{"$210.00"}</h6>
          </div>
          <div className="bg-[#FEF9F3] border border-[#D2D2D2] py-12 px-11">
            <p className="text-[#878788] text-xl capitalize font-normal">
              “On the other hand, we denounce with righteous indignation and dislike men who are so
              beguiled and demoralized by the charms of pleasure of the moment, so blinded by
              desire. Bzed by the charms of pleasure of the moment.”
            </p>
            <div className="flex gap-5">
              <Image src="/user.svg" alt="food suply user" width={64} height={64} />
              <div>
                <h5 className="text-[#010101] text-xl font-medium">@Mario Mclaughlin</h5>
                <h6 className="text-[#878788] text-base font-medium">Owner</h6>
              </div>
            </div>
            <div>
              {[
                {
                  key: "Category",
                  value: "Fruit, Food",
                },
                {
                  key: "Token ID",
                  value: "12344568025809852-9",
                },
              ].map((item) => (
                <div key={item.key} className="flex gap-3 items-center">
                  <h5 className="text-[#010101] text-xl font-medium">{item.key}:</h5>
                  <p className="text-[#878788] text-lg capitalize">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftDetails;
