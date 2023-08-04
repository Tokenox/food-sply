"use client";
import React, { useState } from "react";
import Accordion from "@/common/Accordion";
import CustomAccordion from "@/common/Accordion";
import { Faqs } from "@/utils/constants";
import Image from "next/image";

const Faq = () => {
  return (
    <div className="hidden lg:block bg-bg-color relative">
      <div className="section-margin-x mt-[105px] py-[148px]">
        <div className="mb-14">
          <h1 className="text-4xl tracking-[-0.72px] font-bold leading-[44px] text-center">
            Frequently asked questions
          </h1>
          <p className="text-xl leading-[30px] text-text-silver text-center">
            Everything you need to know about the FoodSply
          </p>
        </div>
        <CustomAccordion data={Faqs} />
      </div>
      <Image
        src="/svg/faq/faq1.svg"
        alt="faq"
        width={300}
        height={200}
        className="absolute left-0 bottom-0"
      />
      <Image
        src="/svg/faq/faq2.svg"
        alt="faq"
        width={300}
        height={200}
        className="absolute right-0 bottom-0"
      />
    </div>
  );
};

export default Faq;
