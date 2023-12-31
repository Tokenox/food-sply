"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const FeatureCard = ({ title, slug, description, width }) => {
  const images = {
    globalization: "/svg/feature/globalization.svg",
    education: "/svg/feature/education.svg",
    "food-waste": "/svg/feature/food-waste.svg",
    delivery: "/svg/feature/delivery.svg",
    innovation: "/svg/feature/innovation.svg",
    transparency: "/svg/feature/transparency.svg",
  };

  return (
    <div className="feature-card relative rounded-[15px] border border-[#D2D2D2] bg-white pt-4 pb-8 2xl:pb-12 px-4 xl:px-8 2xl:px-14 text-text-dark flex flex-col items-center justify-center text-center">
      <Image
        src={"/svg/feature/top-blob.svg"}
        alt={description}
        width={116}
        height={162}
        className="feature-blob absolute top-0 right-0 rounded-tr-[14px]"
      />

      <Image
        src={"/svg/feature/bottom-blob.svg"}
        alt={description}
        width={116}
        height={162}
        className="feature-blob absolute bottom-0 left-0 rounded-bl-[14px]"
      />
      <div className="h-[225px] flex items-center justify-center">
        <Image src={images[slug]} alt={title} width={width || 190} height={145} />
      </div>
      <div className="lg:h-[48%]">
        <h3 className="text-2xl xl:whitespace-nowrap xl:text-[32px] font-bold leading-[120%] uppercase mb-4 lg:mb-8">{title}</h3>
        <p className="feature-description xl:leading-[150%] h-[150px]  lg:h-[140px] xl:h-[100px] relative z-10">{description}</p>
      </div>
      {/* <Button className="feature-button link underline underline-offset-8 font-bold">Lean More</Button> */}
    </div>
  );
};

export default FeatureCard;
