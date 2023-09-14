"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from "classnames";
import Image from "next/image";
import { keyframes } from "@emotion/react";
import { Reveal } from "react-awesome-reveal";

const customAnimation = keyframes`
  0%   { transform: scale(1);}
  60%  { transform: scale(1.15);}
  100% { transform: scale(1);}
`;

const Carousel = ({ data }) => {
  return (
    <Slider {...settings} className="mx-20">
      {data?.map((item, i) =>
        i == 1 ? (
          <Reveal key={item.id} duration={2000} keyframes={customAnimation}>
            <div
              key={item.id}
              className={classNames(" px-2 !flex justify-center lg:h-[520px]", {})}
            >
              <Image
                src={item.image}
                alt="Popular product"
                width={400}
                height={432}
                className="transition-all"
              />
            </div>
          </Reveal>
        ) : (
          <div key={item.id} className={classNames(" px-2 !flex justify-center lg:h-[520px]", {})}>
            <Image
              src={item.image}
              alt="Popular product"
              width={400}
              height={432}
              className="transition-all"
            />
          </div>
        ),
      )}
    </Slider>
  );
};

export default Carousel;

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={classNames(
        " !bg-light-green !bg-[url('/icon/right-arrow.svg')] !bg-no-repeat !bg-center !bg-[length:45%] !rounded-full !w-12 !h-12  hover:!bg-orange hover:!transition-all",
        className,
      )}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={classNames(
        "!bg-light-green !bg-[url('/icon/left-arrow.svg')] !bg-no-repeat !bg-center !bg-[length:45%] !rounded-full !w-12 !h-12 hover:!bg-orange hover:!transition-all",
        className,
      )}
      onClick={onClick}
    />
  );
}

const settings = {
  dots: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
