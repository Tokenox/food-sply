"use client";
import React from "react";
import Image from "next/image";
import { FooterLinks } from "@/utils/constants";
import Button from "@/common/Button";
import { Fade, Slide } from "react-awesome-reveal";

const Footer = () => {
  return (
    <div className="section-margin-x my-10 lg:my-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-10 justify-between">
        {/* First col */}
        <div className="lg:w-[80%]">
          <Slide triggerOnce direction="up">
            <Fade triggerOnce delay={400}>
              <Image
                src={"/logo2.svg"}
                alt="Food sply"
                width={190}
                height={58}
              />
              <p className="text-text-silver lg:text-xl leading-[24px] opacity-[0.8] mt-[14px] mb-3 lg:mb-6">
                We love food, and food goes perfect with community, together
                pulling in the same direction.
              </p>
            </Fade>
          </Slide>
          <div className="flex items-center gap-3 lg:gap-4 lg:w-[150px] mb-2">
            {FooterLinks?.map((item, i) => (
              <Slide triggerOnce direction="left" key={i}>
                <Fade triggerOnce delay={i * 200}>
                  <p
                    key={item.id}
                    className="text-[#283646] text-xs lg:text-lg leading-[150%] whitespace-nowrap"
                  >
                    {item.title}
                  </p>
                </Fade>
              </Slide>
            ))}
          </div>
        </div>
        {/* Second col */}
        <Slide triggerOnce direction="up">
          <Fade triggerOnce delay={400}>
            <div className="flex justify-end">
              <div className="lg:w-[90%]">
                <h4 className="text-green text-2xl lg:text-[32px] font-bold capitalize">
                  Newsletter
                </h4>
                <p className="lg:text-xl leading-6 text-text-silver my-3 mb-5">
                  Be the first one to know about discounts, offers and events
                  weekly in your mailbox.{" "}
                </p>
                <div className="border border-secondary rounded-full flex p-1">
                  <input
                    type={"search"}
                    style={{
                      all: "unset",
                      paddingLeft: "20px",
                      paddingRight: "10px",
                      width: "100%",
                      color: "#9A9EA6",
                      fontSize: "14px",
                    }}
                    placeholder="Enter your email"
                  />
                  <Button type={"fill-light"} className="rounded-full px-9">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </Fade>
        </Slide>
      </div>
      {/* // Footer links */}
      <div className="line my-4 lg:mt-[84px] lg:mb-6" />
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-1 lg:gap-0 justify-between ">
        <div className="flex gap-4 items-center">
          <Image
            src="/svg/social-icon/facebook.svg"
            alt="facebook"
            width={24}
            height={24}
          />
          <Image
            src="/svg/social-icon/youtube.svg"
            alt="twitter"
            width={24}
            height={24}
          />
          <Image
            src="/svg/social-icon/whatsapp.svg"
            alt="youtube"
            width={24}
            height={24}
          />
        </div>
        <p className="text-text-silver text-xm">
          All Copyrights Reserved by Foodsply
        </p>
      </div>
    </div>
  );
};

export default Footer;
