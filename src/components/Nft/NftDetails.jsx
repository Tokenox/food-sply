"use client";
import Button from "@/common/Button";
import Image from "next/image";
import React, { Fragment } from "react";
import Slider from "react-slick";
import { COLLECTION_CARD_DATA } from "../../utils/constants";
import NftCard from "./NftCard";

const NftDetails = () => {
  return (
    <Fragment>
      <div className="section-margin">
        <div className="block lg:grid grid-cols-5 gap-12 items-center">
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
          <div className="col-span-3 flex flex-col gap-10">
            <div>
              <h3 className="text-green text-2xl xl:text-5xl font-bold">Mixed Smoothie</h3>
              <div className="flex items-center gap-4 mt-3 ">
                <p className="text-green text-2xl font-medium capitalize">Current Price:</p>
                <h6 className="text-gradient text-2xl font-bold uppercase">{"$210.00"}</h6>
              </div>
            </div>
            <div className="bg-[#FEF9F3] border border-[#D2D2D2] py-12 px-11 rounded-xl">
              <p className="text-[#878788] text-xl capitalize font-normal mb-7 leading-9 min-[1700px]::w-[90%]">
                “On the other hand, we denounce with righteous indignation and dislike men who are
                so beguiled and demoralized by the charms of pleasure of the moment, so blinded by
                desire. Bzed by the charms of pleasure of the moment.”
              </p>
              <div className="flex gap-5 mb-7">
                <Image src="/user.svg" alt="food suply user" width={64} height={64} />
                <div>
                  <h5 className="text-[#010101] text-xl font-medium">@Mario Mclaughlin</h5>
                  <h6 className="text-[#878788] text-base font-medium">Owner</h6>
                </div>
              </div>
              <div>
                {TOKEN_DETAILS.map((item) => (
                  <div key={item.key} className="flex gap-3 items-center">
                    <h5 className="text-[#010101] text-xl font-medium">{item.key}:</h5>
                    <p className="text-[#878788] text-lg capitalize">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <Button
                type="fill"
                className="w-[95%] flex justify-center items-center text-2xl font-bold gap-4"
              >
                <Image src="/svg/cart.svg" alt="buy" width={24} height={24} />
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Slider */}
      <div className="section-margin">
        <div className="flex items-center gap-5">
          <Image src="/svg/grid-icon.svg" alt="food sply nfts" width={36} height={36} />
          <h3 className="text-green text-[40px] font-bold">Related NFT</h3>
        </div>
        <div className="w-full h-[2px] bg-[#D2D2D2] mt-5 mb-14" />
        {/* <Slider {...settings} className="bg-red-600 min-h-[400px]">
          {COLLECTION_CARD_DATA.map((item, index) => (
            <div className="p-3 bg-red-300 rounded-2xl" key={index}>
              <div className="flex flex-col justify-between items-start">
                <div className="h-[39vh] w-[100%]">
                  <Image
                    src={item.img}
                    alt=""
                    width={270}
                    height={290}
                    className="h-full w-[100%] rounded-t-2xl object-fit border"
                  />
                </div>
                <h2 className="text-[#010101] text-2xl font-bold mb-3 mt-3 capitalize">{item.card_heading}</h2>
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
          ))}
        </Slider> */}
      </div>
    </Fragment>
  );
};

export default NftDetails;

const TOKEN_DETAILS = [
  {
    key: "Category",
    value: "Fruit, Food",
  },
  {
    key: "Token ID",
    value: "12344568025809852-9",
  },
];

const settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
