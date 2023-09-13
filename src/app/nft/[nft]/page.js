import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NftDetails from "@/components/Nft/NftDetails";
import React from "react";

const NftDetailsPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar className="!text-green" />
      <NftDetails />
      <Clients />
      <Footer />
    </div>
  );
};

export default NftDetailsPage;
