import React from "react";
import Image from "next/image";
import { FooterLinks } from "@/utils/constants";
import Button from "@/common/Button";

const Footer = () => {
  return (
    <div className="section-margin-x my-14">
      <div className="grid grid-cols-2 gap-10 justify-between">
        {/* First col */}
        <div className="w-[80%]">
          <Image src={"/logo2.svg"} alt="Food sply" width={190} height={58} />
          <p className="text-text-silver text-xl leading-[24px] opacity-[0.8] mt-[14px] mb-6">
            We love food, and food goes perfect with community, together pulling in the same
            direction.
          </p>
          <div className="flex items-center gap-4 w-[150px]">
            {FooterLinks?.map((item) => (
              <p key={item.id} className="text-[#283646] text-lg leading-[150%] whitespace-nowrap">
                {item.title}
              </p>
            ))}
          </div>
        </div>
        {/* Second col */}
        <div className="flex justify-end">
          <div className="w-[90%]">
            <h4 className="text-green text-[32px] font-bold capitalize">Newsletter</h4>
            <p className="text-xl leading-6 text-text-silver my-3 mb-5">
              Be the first one to know about discounts, offers and events weekly in your mailbox.{" "}
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
      </div>
      {/* // Footer links */}
      <div className="line mt-[84px] mb-6" />
      <div className="flex justify-between">
        <div className="flex gap-4 items-center">
          <Image src="/svg/social-icon/facebook.svg" alt="facebook" width={24} height={24} />
          <Image src="/svg/social-icon/youtube.svg" alt="twitter" width={24} height={24} />
          <Image src="/svg/social-icon/whatsapp.svg" alt="youtube" width={24} height={24} />
        </div>
        <p className="text-text-silver text-xm">All Copyrights Reserved by Foodsply</p>
      </div>
    </div>
  );
};

export default Footer;
