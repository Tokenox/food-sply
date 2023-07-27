import classNames from "classnames";
import React from "react";

const Roadmap = () => {
  return (
    <div className="section-margin-x">
      <div className="flex flex-col items-center w-full mb-[120px]">
        <h1 className="uppercase text-green text-5xl font-bold mb-7 text-center">
          Roadmaps Launch Timeline
        </h1>
        <p className="text-grey text-xl capitalize text-center w-[640px]">
          we believe that a well-defined roadmap is the key to achieving our vision and driving our
          organization towards success.
        </p>
      </div>
      <div className="">
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
      </div>
    </div>
  );
};

export default Roadmap;

const CardLeft = ({ title, description, slug }) => {
  return (
    <div className="h-[312px] mb-[105px]">
      <div
        className={classNames("bg-no-repeat w-[460px] h-[110px] relative", {
          ['bg-[url("/svg/roadmap/prototype.svg")]']: slug === "prototype",
          ['bg-[url("/svg/roadmap/accelerator.svg")]']: slug === "accelerator",
            ['bg-[url("/svg/roadmap/financial.svg")]']: slug === "financial",
        })}
      >
        <p className="text-2xl font-bold capitalize text-white text-center pt-5">{title}</p>
        <div className="bg-[#F2F2F2] w-[380px] h-[236px] roadmap-box flex justify-center items-center">
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

const CardRight = ({ title, description }) => {
  return (
    <div>
      <div className="bg-[url('/svg/roadmap/supply.svg')] bg-no-repeat w-[460px] h-[110px] relative">
        <p className="text-2xl font-bold capitalize text-white text-center pt-5">{title}</p>
        <div className="bg-[#F2F2F2] w-[380px] h-[236px] roadmap-box flex justify-center items-center">
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

const Circle = () => {
  return (
    <div className="w-[50px] h-[50px] rounded-full bg-orange">
      <div className="w-[32px] h-[32px] rounded-full bg-white" />
    </div>
  );
};
