"use client";
import { GraphData } from "@/utils/constants";
import classNames from "classnames";
import React from "react";
import { AirdropIcon } from "../../public";
import { Fade, Slide, Reveal } from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

const Tokenomics = () => {
  return (
    <div className="bg-bg-dark" id="tokenomics">
      <div className="section-margin py-[100px]">
        <Slide triggerOnce direction="left">
          <Fade triggerOnce delay={400}>
            <h2 className="capitalize text-5xl font-bold text-white mb-4">Tokenomics</h2>
          </Fade>
        </Slide>
        <Slide triggerOnce direction="left">
          <Fade triggerOnce delay={400}>
            <p className="capitalize text-xl leading-6 text-white w-full md:w-[620px]">
              we believe that a well-defined roadmap is the key to achieving our vision and driving
              our organization towards success.{" "}
            </p>
          </Fade>
        </Slide>
        <div className="mt-0 lg:mt-[100px] flex gap-10 h-[550px] md:h-[600px] items-end justify-around">
          {GraphData?.map((item) => {
            const currentKeyframe = keyframes`
              from {
                height:80px;
              }
              to {
                height: ${item.hight}px;
              }
            `;
            return (
              <div key={item.id} className="w-12 md:w-[70px] lg:w-[140px]">
                <Fade triggerOnce>
                  <div
                    className={classNames("dark-color relative", {
                      "h-[125px]": item.percentage > 9,
                      "h-[90px]": item.percentage < 10,
                    })}
                  >
                    <div className="flex justify-center items-center h-full">
                      <p
                        style={{
                          background: item.background,
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                        className="-rotate-90 text-2xl md:text-4xl font-bold pr-5"
                      >
                        {item.percentage}%
                      </p>
                    </div>
                    <div className="dark-color w-full h-7 rounded-[50%] absolute top-[-15px] border border-[#899AA1]" />
                  </div>
                </Fade>
                <Reveal triggerOnce duration={1500} keyframes={currentKeyframe}>
                  <div
                    style={{
                      background: item.background,
                      height: "100%",
                    }}
                    className="w-full relative"
                  >
                    <div className="flex justify-between items-end h-full pb-7 px-2">
                      <div className="flex justify-between w-full items-center">
                        <p className="writing-mode font-xl font-bold text-white">{item.title}</p>
                        <AirdropIcon />
                      </div>
                    </div>
                    <div className="ellipse-middle w-full h-[32px] absolute top-[-15px]" />
                    <div
                      style={{
                        background: item.background,
                      }}
                      className=" w-full h-[32px] rounded-[60%] absolute bottom-[-15px] z-[1]"
                    />
                    {/* //! need to fix it that's way commented */}
                    {/* <div
                  style={{
                    background: item.backgroundLight,
                  }}
                  className="w-full h-[31px] absolute bottom-[-15%]"
                /> */}
                  </div>
                </Reveal>
                <Fade delay={500} triggerOnce>
                  <div className="hidden lg:block mt-12 text-white text-xl text-center">
                    <p>
                      {item.title} {item.percentage}%
                    </p>
                    <p>{item.revenue}$</p>
                  </div>
                </Fade>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
