"use client";
import Carousel from "@/common/Carousel";
import CarouselSm from "@/common/CarouselSm";
import Product from "@/common/Product";
import { PopularProducts, Products } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const OurProducts = () => {
  return (
    <div className="bg-[#f7941d0d] mb-6 lg:mb-[100px]">
      <div className="py-10">
        <div className="section-margin flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* First col */}
          <div className="mb-6 lg:mb-0 lg:w-[550px] ">
            <h1 className="uppercase text-green text-3xl lg:text-5xl font-bold mb-4 text-center lg:text-left lg:mb-7">
              Services we provide
            </h1>
            <p className="lg:text-xl leading-[150%] text-text-dark text-center lg:text-left">
              Agriculture is one of the largest industries in the world. Currently its going threw a
              revolution, let us help you navigate the new world.{" "}
            </p>
          </div>
          {/* Second col */}
          <div className="lg:w-[50%] flex justify-end">
            <Image
              src={"/svg/our-products.svg"}
              alt="Food sply services provides"
              width={700}
              height={320}
            />
          </div>
        </div>
        {/* Products E commerce */}
        <div className="overflow-x-scroll justify-start mt-16 lg:mt-[120px] h-[470px] px-6 lg:px-0 md:mb-10 flex gap-9 2xl:gap-12 lg:justify-center items-center">
          {Products.map((product) => (
            <Product
              key={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </div>
      {/* Popular Products */}
      <div>
        <h2 className="text-green text-2xl lg:text-[32px] font-bold uppercase leading-[120%] underline text-center pt-10 lg:pt-[90px] lg:pb-[75px]">
          Most popular in list
        </h2>
        <div className="hidden md:block">
          <Carousel data={PopularProducts} />
        </div>
        <div className="mt-10 md:hidden">
          <CarouselSm data={PopularProducts} />
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
