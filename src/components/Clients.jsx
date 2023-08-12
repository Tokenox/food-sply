"use client";
import React from "react";
import Image from "next/image";
import { ClientData } from "@/utils/constants";
import { Fade, Slide } from "react-awesome-reveal";

const Clients = () => {
  return (
    <div className="bg-bg-dark">
      <div className="section-margin-x py-[40px] flex gap-6 2xl:gap-[75px] items-center justify-between overflow-x-auto">
        {ClientData?.map((item, i) => (
          <Slide key={i} triggerOnce direction="up" delay={i * 150}>
            <Fade triggerOnce delay={i * 200}>
              <Image
                key={item.id}
                src={item.image}
                alt="food sply clients"
                width={item.width || 200}
                height={100}
                className=""
              />
            </Fade>
          </Slide>
        ))}
      </div>
    </div>
  );
};

export default Clients;
