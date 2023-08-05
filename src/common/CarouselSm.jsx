import classNames from "classnames";
import Image from "next/image";
import React from "react";
import Slider from "react-slick";

const CarouselSm = ({ data }) => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 1,
    speed: 1000,
    arrows: false,
  };
  return (
    <Slider {...settings} className="carousel-sm">
      {data?.map((item) => (
        <div key={item.id} className={""}>
          <Image src={item.image} alt="Popular product" width={300} height={432} />
        </div>
      ))}
    </Slider>
  );
};
export default CarouselSm;
