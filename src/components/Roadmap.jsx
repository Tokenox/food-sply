"use client";
import classNames from "classnames";
import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const Roadmap = () => {
  return (
    <div>
      <div className="hidden lg:block section-margin-x">
        <div className="flex flex-col items-center w-full mb-[120px]">
          <Slide triggerOnce direction="up">
            <Fade triggerOnce delay={400}>
              <h1 className="uppercase text-green text-5xl font-bold mb-7 text-center">
                Roadmaps Launch Timeline
              </h1>
            </Fade>
          </Slide>
          <Slide triggerOnce direction="up">
            <Fade triggerOnce delay={400}>
              <p className="text-text-grey text-xl capitalize text-center w-[640px]">
                we believe that a well-defined roadmap is the key to achieving
                our vision and driving our organization towards success.
              </p>
            </Fade>
          </Slide>
        </div>
        {/* //! Roadmap */}
        <div className="flex justify-center">
          <div className="flex gap-14 2xl:gap-[72px]">
            {/* Left side */}
            <div className="">
              <CardLeft
                title={"Prototype Completion"}
                slug={"prototype"}
                description={`Crafting a comprehensive prototype within a span of <b> 4-6 months </b> to visualize our offering.`}
              />

              <CardLeft
                title={"Food Accelerator Development"}
                slug={"accelerator"}
                description={`Committing <span> 4-8 months </span> to develop a Food Accelerator for rapid advancement in the field.`}
              />
              <CardLeft
                title={"Financial Product Development"}
                slug={"financial"}
                description={`Dedicating <b> 6 months </b> to devise innovative financial products to support our stakeholders.`}
              />
            </div>
            {/* Center circles */}
            <div className="bg-[#E6E6E6] w-1.5 relative h-[875px] mt-4">
              <div className="roadmap-circle-1">
                <Circle color="#DE54FF" />
              </div>
              <div className="roadmap-circle-2">
                <Circle color="#B6D329" />
              </div>
              <div className="roadmap-circle-3">
                <Circle color="#F9B545" />
              </div>
              <div className="roadmap-circle-4">
                <Circle color="#5EB77A" />
              </div>
              <div className="roadmap-circle-5">
                <Circle color="#DE6790" />
              </div>
            </div>
            {/* Right side */}
            <div className="">
              <CardRight
                title={"Agriculture Supply Chain Building"}
                slug={"supply"}
                description={`Initiating the construction of a decentralized supply chain for agriculture in the next <b> 3-6 months. </b>`}
                className={"mt-[200px]"}
              />
              <CardRight
                title={"Community-Based Agriculture Program Initiation"}
                slug={"initiation"}
                description={`Fostering local engagement by starting a community-based agriculture program.`}
                className={"mt-[105px]"}
              />
            </div>
          </div>
        </div>
      </div>
      {/* //! Small screen */}
      <div className="section-margin-x md:hidden">
        <div className="mb-6">
          <h1 className="uppercase text-green text-[32px] font-bold text-center leading-[40px] mb-5">
            Roadmaps Launch Timeline
          </h1>
          <p className="text-text-dark capitalize text-center">
            we believe that a well-defined roadmap is the key to achieving our
            vision and driving our organization towards success.
          </p>
        </div>
        <div className="relative">
          <div className="roadmap-bar-sm bg-[#E6E6E6] w-3 h-[1100px] absolute"></div>
          <CardLeft
            title={"Prototype Completion"}
            slug={"prototype"}
            description={`Crafting a comprehensive prototype within a span of <b> 4-6 months </b> to visualize our offering.`}
          />
          <CardRight
            title={"Agriculture Supply Chain Building"}
            slug={"supply"}
            description={`Initiating the construction of a decentralized supply chain for agriculture in the next <b> 3-6 months. </b>`}
            className={""}
          />
          <CardLeft
            title={"Food Accelerator Development"}
            slug={"accelerator"}
            description={`Committing <span> 4-8 months </span> to develop a Food Accelerator for rapid advancement in the field.`}
          />
          <CardRight
            title={"Community-Based Agriculture Program Initiation"}
            slug={"initiation"}
            description={`Fostering local engagement by starting a community-based agriculture program.`}
            className={""}
          />
          <CardLeft
            title={"Financial Product Development"}
            slug={"financial"}
            description={`Dedicating <b> 6 months </b> to devise innovative financial products to support our stakeholders.`}
          />
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

const CardLeft = ({ title, description, slug }) => {
  return (
    <div className="h-[312px] mb-0 md:mb-[105px] last:mb-0">
      <Slide triggerOnce direction="left">
        <Fade triggerOnce delay={400}>
          <div
            className={classNames(
              "bg-no-repeat bg-contain w-full md:w-[460px] h-[110px] relative",
              {
                ['bg-[url("/svg/roadmap/prototype.svg")]']:
                  slug === "prototype",
                ['bg-[url("/svg/roadmap/accelerator.svg")]']:
                  slug === "accelerator",
                ['bg-[url("/svg/roadmap/financial.svg")]']:
                  slug === "financial",
              }
            )}
          >
            <p className="text-lg md:text-2xl font-bold capitalize text-white text-center pt-4 md:pt-5">
              {title}
            </p>
            <div className="roadmap-box-left bg-[#F2F2F2] w-[300px] md:w-[380px] h-[180px] md:h-[236px] flex justify-center items-center">
              <p
                dangerouslySetInnerHTML={{ __html: description }}
                className={classNames(
                  "roadmap-description px-3 md:px-0 md:text-lg leading-[140%] capitalize text-center text-text-dark w-[280px]"
                )}
              />
            </div>
          </div>
        </Fade>
      </Slide>
    </div>
  );
};

const CardRight = ({ title, description, slug, className }) => {
  return (
    <div
      className={classNames("h-[312px]", {
        [className]: className,
      })}
    >
      <Slide triggerOnce direction="right">
        <Fade triggerOnce delay={400}>
          <div
            className={classNames(
              "bg-no-repeat bg-contain w-full md:w-[460px] h-[110px] relative",
              {
                ["bg-[url('/svg/roadmap/supply.svg')]"]: slug === "supply",
                ['bg-[url("/svg/roadmap/initiation.svg")]']:
                  slug === "initiation",
              }
            )}
          >
            <p
              className={classNames(
                "font-bold capitalize text-white text-center pt-4 md:pt-5",
                {
                  ["text-lg md:text-2xl"]: slug === "supply",
                  ["initiation-text text-base md:text-lg h-[44px] md:h-[52px] md:pt-6"]:
                    slug === "initiation",
                }
              )}
            >
              {title}
            </p>
            <div className="roadmap-box-right bg-[#F2F2F2] w-[300px] md:w-[380px] h-[180px] md:h-[236px] flex justify-center items-center">
              <p
                dangerouslySetInnerHTML={{ __html: description }}
                className={classNames(
                  "roadmap-description px-3 md:px-0 text-lg leading-[140%] capitalize text-center text-text-dark w-[280px]"
                )}
              />
            </div>
          </div>
        </Fade>
      </Slide>
    </div>
  );
};

const Circle = ({ color }) => {
  return (
    <Zoom triggerOnce>
      <div
        className={classNames(
          "w-[50px] h-[50px] rounded-full flex justify-center items-center"
        )}
        style={{ backgroundColor: color }}
      >
        <div className="w-[32px] h-[32px] rounded-full bg-white" />
      </div>
    </Zoom>
  );
};
