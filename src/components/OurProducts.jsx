"use client";
import Carousel from "@/common/Carousel";
import Product from "@/common/Product";
import { PopularProducts, Products } from "@/utils/constants";
import Image from "next/image";
import React from "react";

const OurProducts = () => {
  return (
    <div className="bg-[#f7941d0d]">
      <div className="section-margin py-10">
        <div className=" flex justify-between items-center gap-4">
          {/* First col */}
          <div className="w-[550px]">
            <h1 className="uppercase text-green text-5xl font-bold mb-7">Services we provide</h1>
            <p className="text-xl leading-[150%] ">
              Agriculture is one of the largest industries in the world. Currently its going threw a
              revolution, let us help you navigate the new world.{" "}
            </p>
          </div>
          {/* Second col */}
          <div className="w-[50%] flex justify-end">
            <Image
              src={"/svg/our-products.svg"}
              alt="Food sply services provides"
              width={700}
              height={320}
            />
          </div>
        </div>
        {/* Products E commerce */}
        <div className="mt-[120px] flex gap-9 2xl:gap-12 justify-center items-center">
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
        {/* Popular Products */}
        <div>
          <h2 className="text-green text-[32px] font-bold uppercase leading-[120%] underline text-center pt-[90px] pb-[75px]">
            Most popular in list
          </h2>
          <div>
            <Carousel data={PopularProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
