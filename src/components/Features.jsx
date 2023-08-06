"use client";
import FeatureCard from "@/common/FeatureCard";
import { FeatureData } from "@/utils/constants";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const Features = () => {
  return (
    <div className="section-margin-x mt-10">
      <Slide triggerOnce direction="up">
        <Fade triggerOnce delay={400}>
          <h2 className="text-green text-2xl lg:text-[32px] font-bold uppercase leading-[120%] underline text-center">
            Discover the key features
          </h2>
        </Fade>
      </Slide>

      <Slide
        triggerOnce
        direction="up"
        damping={0.1}
        className="mt-6 lg:mt-[90px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9"
      >
        <Fade triggerOnce cascade damping={0.2}>
          {FeatureData?.map((item) => (
            <FeatureCard
              key={item.id}
              title={item.title}
              slug={item.slug}
              width={item.width}
              description={item.description}
            />
          ))}
        </Fade>
      </Slide>
    </div>
  );
};

export default Features;
