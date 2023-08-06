"use client";
import React, { useState } from "react";
import Accordion from "@/common/Accordion";
import CustomAccordion from "@/common/Accordion";
import { Faqs } from "@/utils/constants";
import Image from "next/image";
import { Fade, Slide } from "react-awesome-reveal";

const Faq = () => {
  return (
    <div className="bg-bg-color relative">
      <div className="section-margin-x lg:mt-[105px] py-10 lg:py-[148px]">
        <Slide triggerOnce direction="up">
          <Fade triggerOnce delay={400}>
            <div className="lg:mb-14">
              <h1 className="text-2xl lg:text-4xl tracking-[-0.72px] font-bold leading-[44px] text-center text-text-dark">
                Frequently asked questions
              </h1>
              <p className="lg:text-xl leading-[30px] text-text-silver text-center">
                Everything you need to know about the FoodSply
              </p>
            </div>
          </Fade>
        </Slide>
        <CustomAccordion data={Faqs} />
      </div>
      <Image
        src="/svg/faq/faq1.svg"
        alt="faq"
        width={300}
        height={200}
        className="hidden lg:block absolute left-0 bottom-0"
      />
      <Image
        src="/svg/faq/faq2.svg"
        alt="faq"
        width={300}
        height={200}
        className="hidden lg:block absolute right-0 bottom-0"
      />
    </div>
  );
};

export default Faq;
