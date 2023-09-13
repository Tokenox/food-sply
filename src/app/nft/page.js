import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Collections from "@/components/Nft/Collections";
import NftHeader from "@/components/Nft/NftHeader";
import NftSteps from "@/components/Nft/NftSteps";
import OurCommunity from "@/components/Nft/OurCommunity";
import React from "react";

const Nft = () => {
  return (
    <div>
      <NftHeader />
      <NftSteps />
      <Collections />
      <OurCommunity />
      <Clients />
      <Footer />
    </div>
  );
};

export default Nft;
