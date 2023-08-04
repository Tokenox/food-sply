'use client';
import FeatureCard from "@/common/FeatureCard";
import { FeatureData } from "@/utils/constants";
import React from "react";

const Features = () => {
  return (
    <div className="hidden lg:block section-margin-x">
      <h2 className="text-green text-[32px] font-bold uppercase leading-[120%] underline text-center">
        Discover the key features
      </h2>
      <div className="mt-[90px] grid grid-cols-3 gap-9">
        {FeatureData?.map((item) => (
          <FeatureCard
            key={item.id}
            title={item.title}
            slug={item.slug}
            width={item.width}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
