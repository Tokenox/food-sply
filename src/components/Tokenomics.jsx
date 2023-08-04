import { GraphData } from "@/utils/constants";
import classNames from "classnames";
import React from "react";
import { AirdropIcon } from "../../public";

const Tokenomics = () => {
  return (
    <div className="hidden lg:block bg-bg-dark">
      <div className="section-margin py-[100px]">
        <h2 className="capitalize text-5xl font-bold text-white mb-4">Tokenomics</h2>
        <p className="capitalize text-xl leading-6 text-white w-[620px]">
          we believe that a well-defined roadmap is the key to achieving our vision and driving our
          organization towards success.{" "}
        </p>
        <div className="mt-[100px] flex gap-10 h-[600px] items-end justify-around">
          {GraphData?.map((item) => (
            <div key={item.id} className=" w-[140px]">
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
                    className="-rotate-90 text-4xl font-bold pr-5"
                  >
                    {item.percentage}%
                  </p>
                </div>
                <div className="dark-color w-full h-7 rounded-[50%] absolute top-[-15px] border border-[#899AA1]" />
              </div>
              <div
                style={{
                  background: item.background,
                  height: item.hight,
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
                  className="airdrop-bottom-ellipse w-full h-[32px] absolute bottom-[-13px] z-[1]"
                />
                {/* //! need to fix it that's way commented */}
                {/* <div
                  style={{
                    background: item.backgroundLight,
                  }}
                  className="w-full h-[31px] absolute bottom-[-15%]"
                /> */}
              </div>
              <div className="mt-12 text-white text-xl text-center">
                <p>
                  {item.title} {item.percentage}%
                </p>
                <p>{item.revenue}$</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
