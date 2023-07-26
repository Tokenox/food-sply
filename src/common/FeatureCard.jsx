"use client";

import React from "react";
import Button from "./Button";

const FeatureCard = ({ title, slug, description }) => {
  return (
    <div className="feature-card rounded-[15px] border border-[#D2D2D2] bg-white py-11 px-14 text-text-dark text-center">
      <h3 className="text-[32px] font-bold leading-[120%] uppercase mb-8">{title}</h3>
      <p className="mb-10 leading-[150%]">{description}</p>
      <Button className="link underline underline-offset-8 font-bold">Lean More</Button>
    </div>
  );
};

export default FeatureCard;
