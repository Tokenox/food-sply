"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TeamMembers } from "@/utils/constants";
import marioImage from "../../public/images/team/Mario-Mclaughlin.jpg";
import sabinaImage from "../../public/images/team/Sabina-Zunguze.jpg";
import { Bounce, Fade, Slide, Zoom } from "react-awesome-reveal";

const Team = () => {
  const [isActive, setIsActive] = useState(0);

  const handleCardFlip = (e, value) => {
    // if mouse enter
    if (e.type === "mouseenter") {
      setIsActive(value);
      return;
    }
    // if mouse leave
    setIsActive(0);
  };

  const TeamImages = {
    "mario-mclaughlin": marioImage,
    "sabina-zunguze": sabinaImage,
  };

  return (
    <div className="mt-10 lg:mt-[130px] section-margin-x">
      <Slide triggerOnce direction="up">
        <Fade triggerOnce delay={600}>
          <h2 className="text-3xl font-bold text-green mb-5 lg:mb-[80px] text-center uppercase">
            Meet Our team
          </h2>
        </Fade>
      </Slide>

      <div className="flex justify-start md:justify-center items-center gap-4 lg:gap-14 overflow-x-scroll">
        {TeamMembers?.map((item) => (
          <Zoom triggerOnce>
            <div
              key={item.id}
              style={{
                // add flex to fix the card width
                flex: "0 0 auto",
              }}
              className="custom-light flip-card w-[290px] h-[436px] rounded-md"
              onMouseEnter={(e) => handleCardFlip(e, item.id)}
              onMouseLeave={(e) => handleCardFlip(e)}
            >
              <div
                className={`flip-card-inner ${
                  isActive == item.id ? "flip-card-flip" : ""
                }`}
              >
                {/* // front side */}
                <div className="flip-card-front rounded-[15px]">
                  <Image
                    src={TeamImages[item.slug]}
                    alt="Mario-Mclaughlin"
                    className="w-full h-full object-cover rounded-[15px]"
                  />
                </div>
                {/* // back side */}
                <div className="flip-card-back rounded-[15px] p-8 text-center text-[#656565] flex flex-col justify-center">
                  <h4 className="text-2xl font-bold capitalize text-light-green mb-4">
                    {item.name}
                  </h4>
                  <p className="leading-6 mb-5">{item.title}</p>
                  <p className="leading-7 text-lg font-light">
                    {item.description}
                  </p>
                  <div className="flex gap-6 items-center justify-center mt-[60px]">
                    <Image
                      src={"/svg/social-icon/facebook2.svg"}
                      alt="social media"
                      width={8}
                      height={15}
                      className="cursor-pointer"
                    />
                    <Image
                      src={"/svg/social-icon/twitter.svg"}
                      alt="social media"
                      width={15}
                      height={15}
                      className="cursor-pointer"
                    />
                    <Image
                      src={"/svg/social-icon/instagram.svg"}
                      alt="social media"
                      width={15}
                      height={15}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Team;
