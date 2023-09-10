import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NftHeader from "@/components/Nft/NftHeader";
import NftSteps from "@/components/Nft/NftSteps";
import React from "react";

const Nft = () => {
  return (
    <div>
      <NftHeader />
      <NftSteps />
      <Clients />
      <Footer />
    </div>
  );
};

export default Nft;
