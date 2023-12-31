"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const Product = ({ title, price, description, image, link }) => {
  return (
    <div className="w-[275px] product-card flex flex-col items-center relative lg:mb-14">
      <div className="bg-[url('/svg/product/round.svg')] w-[220px] h-[220px] flex flex-col items-center justify-center relative">
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className="h-[174px] w-[174px] rounded-[100%] bg-no-repeat bg-center bg-cover"
        >
          {/* <Image src={image} alt={title} width={175} height={175} /> */}
        </div>
        <div className="bg-orange w-14 h-14 rounded-full border-4 border-white absolute bottom-4 right-8 flex justify-center items-center">
          {price}
        </div>
      </div>
      <div className="product-card h-[200px] text-center px-7">
        <h4 className="text-light-green text-2xl capitalize my-2.5">{title}</h4>
        <p className="text-text-dark capitalize">{description.substring(0, 90)}...</p>
      </div>
      <Button type="fill" className={"text-lg absolute bottom-[-5%] text-white"}>
        Order Now
      </Button>
    </div>
  );
};

export default Product;
