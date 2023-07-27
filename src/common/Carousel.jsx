"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classNames from "classnames";

const Carousel = () => {
  return (
    <Slider {...settings} className='px-20'>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
    </Slider>
  );
};

export default Carousel;

const settings = {
  dots: false,
  //   infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
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

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={classNames(
        "!bg-light-green !bg-[url('/icon/right-arrow.svg')] !bg-no-repeat !bg-center !bg-[length:45%] !rounded-full !w-12 !h-12  hover:!bg-orange hover:!transition-all",
        className
      )}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={classNames(
        "!bg-light-green !bg-[url('/icon/left-arrow.svg')] !bg-no-repeat !bg-center !bg-[length:45%] !rounded-full !w-12 !h-12 hover:!bg-orange hover:!transition-all",
        className
      )}
      onClick={onClick}
    />
  );
}
