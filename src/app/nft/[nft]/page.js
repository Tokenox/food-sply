"use client";
import React, { useState } from "react";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NftDetails from "@/components/Nft/NftDetails";
import SlideDownMenu from "@/components/SlideDownMenu";
import Image from "next/image";
import { HamburgerIcon } from "../../../../public";
import { NavbarItems } from "@/utils/constants";

const NftDetailsPage = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <div className="hidden lg:block">
        <Navbar className="!text-green" />
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
      <div className="section-margin-x py-4 flex justify-between items-center">
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
      <NftDetails />
      <Clients />
      <Footer />
    </div>
  );
};

export default NftDetailsPage;
