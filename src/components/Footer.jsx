import React from "react";
import Image from "next/image";
import { FooterLinks } from "@/utils/constants";

const Footer = () => {
  return (
    <div className="section-margin-x my-14">
      <div className="grid grid-cols-2 gap-10 justify-between">
        {/* First col */}
        <div>
          <Image src={"/logo2.svg"} alt="Food sply" width={190} height={58} />
          <p className="text-text-silver text-xl leading-[24px] opacity-[0.8] mt-[14px] mb-6">
            We love food, and food goes perfect with community, together pulling in the same
            direction.
          </p>
          <div className="flex items-center justify-between gap-4">
            {FooterLinks?.map((item) => (
              <p key={item.id} className="text-[#283646] text-lg leading-[150%]">
                {item.title}
              </p>
            ))}
          </div>
        </div>
        {/* Second col */}
        <div className="">
          <h4 className="text-green text-[32px] font-bold capitalize">Newsletter</h4>
          <p className="text-xl leading-6 text-text-silver my-3">
            Be the first one to know about discounts, offers and events weekly in your mailbox.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
