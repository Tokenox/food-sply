import Image from "next/image";
import React from "react";

const Product = ({ title, price, description, image, link }) => {
  return (
    <div className="w-[275px] product-card flex flex-col items-center">
      <div className="bg-[url('/svg/product/round.svg')] w-[220px] h-[220px] flex flex-col items-center justify-center">
        <Image src={image} alt={title} width={175} height={175} />
      </div>
      <div className="product-card h-[200px] text-center px-7">
        <h4 className="text-light-green text-2xl capitalize my-2.5">{title}</h4>
        <p className="text-text-dark capitalize">{description}</p>
      </div>
    </div>
  );
};

export default Product;
