"use client";
import React, { Fragment, useState } from "react";
import Button from "@/common/Button";
import Image from "next/image";
import Navbar from "../Navbar";
import SlideDownMenu from "../SlideDownMenu";
import { HamburgerIcon } from "../../../public";
import { NavbarItems } from "@/utils/constants";

const NftHeader = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <Fragment>
      <div className="hidden lg:block bg-[url('/nft-images/header/hero-section-lg.png')] h-screen min-h-[700px] w-full bg-no-repeat bg-cover bg-inherit 2xl:bg-center">
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
            {/* <div className="relative z-[1]">
              <Image
                src={menVector}
                alt="food sply nft"
                className="w-[400px] lg:h-[390px] min-[1400px]:h-[570px]  object-contain"
              />
            </div> */}
            <div className="w-[595px] flex flex-col items-center">
              <h2 className="text-border-v2 text-center text-[42px] font-medium text-white capitalize w-[630px]">
                Own Tomorrow&apos;s Harvest Today
              </h2>
              <p className="text-border-sm text-2xl text-white capitalize text-center w-[544px] my-6 min-[1400px]:my-9">
                Dive into a digital harvest where each NFT stands for sustainability and tech
                harmony. Cultivate the future, one veggie at a time.
              </p>
              <Button type="fill" className="text-xl font-bold py-3 mt-4 min-[1400px]:mt-3">
                Mint My Veggie NFT
              </Button>
              {/* <Image
                src="/nft-images/header/header-line.svg"
                alt="discover and collect nfts"
                width={1070}
                height={200}
                className="absolute hidden min-[1400px]:block bottom-[-30px] 2xl:bottom-[-56px]"
              /> */}
            </div>
            {/* <div className="relative z-[1]">
              <Image
                src={ladyVector}
                alt="food sply nft"
                className="w-[400px] lg:h-[390px] min-[1400px]:h-[570px] object-contain"
              />
            </div> */}
          </div>
        </div>
      </div>
      {/* //! Small screens */}
      {isSideMenuOpen && (
        <SlideDownMenu
          menu={NavbarItems}
          callback={(value) => {
            setIsSideMenuOpen(value);
          }}
        />
      )}
      <div className="bg-[url('/nft-images/header/header-sm.svg')] w-full bg-cover h-screen bg-no-repeat lg:hidden">
        <div className="section-margin-x">
          <div className="py-4 flex justify-between items-center">
            <Image src={"/logo-sm.svg"} alt="Food sply" width={132} height={48} />
            <div
              className=""
              onClick={() => {
                setIsSideMenuOpen(true);
              }}
            >
              <HamburgerIcon />
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 min-[390px]:gap-6 pt-7 min-[375px]:pt-12">
            <Image
              src="/nft-images/header/title-sm.svg"
              alt="Discover & Collect Nfts"
              width={484}
              height={74}
            />
            <h2 className="text-center text-xl font-medium text-white capitalize">
              Own Tomorrow&apos;s Harvest Today
            </h2>
            <p className="text-border-sm text-base text-white capitalize text-center">
              Dive into a digital harvest where each NFT stands for sustainability and tech harmony.
              Cultivate the future, one veggie at a time.
            </p>
            <Button type="fill" className="font-bold min-[390px]:mt-4">
              Mint My Veggie NFT
            </Button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NftHeader;
