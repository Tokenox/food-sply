import classNames from "classnames";
import React from "react";

const Roadmap = () => {
  return (
    <div className="hidden lg:block section-margin-x">
      <div className="flex flex-col items-center w-full mb-[120px]">
        <h1 className="uppercase text-green text-5xl font-bold mb-7 text-center">
          Roadmaps Launch Timeline
        </h1>
        <p className="text-grey text-xl capitalize text-center w-[640px]">
          we believe that a well-defined roadmap is the key to achieving our vision and driving our
          organization towards success.
        </p>
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
  );
};

export default Roadmap;

const CardLeft = ({ title, description, slug }) => {
  return (
    <div className="h-[312px] mb-[105px] last:mb-0">
      <div
        className={classNames("bg-no-repeat w-[460px] h-[110px] relative", {
          ['bg-[url("/svg/roadmap/prototype.svg")]']: slug === "prototype",
          ['bg-[url("/svg/roadmap/accelerator.svg")]']: slug === "accelerator",
          ['bg-[url("/svg/roadmap/financial.svg")]']: slug === "financial",
        })}
      >
        <p className="text-2xl font-bold capitalize text-white text-center pt-5">{title}</p>
        <div className="roadmap-box-left bg-[#F2F2F2] w-[380px] h-[236px] flex justify-center items-center">
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className={classNames(
              "roadmap-description text-lg leading-[140%] capitalize text-center text-text-dark w-[280px]"
            )}
          />
        </div>
      </div>
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
      <div
        className={classNames("bg-no-repeat w-[460px] h-[110px] relative", {
          ["bg-[url('/svg/roadmap/supply.svg')]"]: slug === "supply",
          ['bg-[url("/svg/roadmap/initiation.svg")]']: slug === "initiation",
        })}
      >
        <p
          className={classNames("font-bold capitalize text-white text-center pt-5", {
            ["text-2xl"]: slug === "supply",
            ["text-lg h-[52px] pt-6"]: slug === "initiation",
          })}
        >
          {title}
        </p>
        <div className="roadmap-box-right bg-[#F2F2F2] w-[380px] h-[236px] flex justify-center items-center">
          <p
            dangerouslySetInnerHTML={{ __html: description }}
            className={classNames(
              "roadmap-description text-lg leading-[140%] capitalize text-center text-text-dark w-[280px]"
            )}
          />
        </div>
      </div>
    </div>
  );
};

const Circle = ({ color }) => {
  return (
    <div
      className={classNames("w-[50px] h-[50px] rounded-full flex justify-center items-center")}
      style={{ backgroundColor: color }}
    >
      <div className="w-[32px] h-[32px] rounded-full bg-white" />
    </div>
  );
};
