"use client";
import Carousel from "@/common/Carousel";
import CarouselSm from "@/common/CarouselSm";
import Product from "@/common/Product";
import { PopularProducts, Products } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import { Fade, Slide } from "react-awesome-reveal";

const OurProducts = () => {
  return (
    <div className="bg-[#f7941d0d] mb-6 lg:mb-[100px]">
      <div className="py-10">
        <div className="section-margin flex flex-col lg:flex-row justify-between items-center gap-4">
          {/* First col */}
          <Slide direction="up" fraction={0} triggerOnce>
            <Fade triggerOnce delay={200} duration={2000}>
              <div className="mb-6 lg:mb-0 lg:w-[650px] ">
                <h1 className="uppercase text-green text-3xl lg:text-5xl font-bold mb-4 text-center lg:text-left lg:mb-7">
                  Our Featured Products
                </h1>
                <p className="lg:text-xl leading-[150%] text-text-dark text-center lg:text-left">
                  Agriculture is one of the largest industries in the world. Currently its going
                  threw a revolution, let us help you navigate the new world.{" "}
                </p>
              </div>
            </Fade>
          </Slide>
          {/* Second col */}
          <div className="lg:w-[50%] flex justify-end">
            <Slide direction="up" fraction={0} triggerOnce>
              <Fade triggerOnce delay={200} duration={2000}>
                <Image
                  src={"/svg/our-products.svg"}
                  alt="Food sply services provides"
                  width={700}
                  height={320}
                />
              </Fade>
            </Slide>
          </div>
        </div>
        {/* Products E commerce */}
        <div>
          <Slide
            triggerOnce
            direction="up"
            damping={0.1}
            className="overflow-x-scroll justify-start mt-16 lg:mt-[120px] h-[470px] px-6 lg:px-0 md:mb-10 flex gap-9 2xl:gap-12 lg:justify-center items-center"
          >
            <Fade triggerOnce cascade damping={0.2}>
              {Products.map((product) => (
                <Product
                  key={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  image={product.image}
                />
              ))}
            </Fade>
          </Slide>
        </div>
      </div>
      {/* Popular Products */}
      <div>
        <Slide triggerOnce direction="up">
          <Fade triggerOnce delay={600}>
            <h2 className="text-green text-2xl lg:text-[32px] font-bold uppercase leading-[120%] underline text-center pt-10 lg:pt-[90px] lg:pb-[75px]">
              Most popular in list
            </h2>
          </Fade>
        </Slide>
        <div className="hidden md:block">
          <Slide triggerOnce direction="up" damping={0.5}>
            <Fade triggerOnce cascade damping={0.5}>
              <Carousel data={PopularProducts} />
            </Fade>
          </Slide>
        </div>
        <div className="mt-10 md:hidden">
          <CarouselSm data={PopularProducts} />
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
