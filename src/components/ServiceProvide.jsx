import Image from "next/image";
import React from "react";

const ServiceProvide = () => {
  return (
    <div className="section-padding flex justify-between items-center gap-4">
      {/* First col */}
      <div className="w-[550px]">
        <h1 className="uppercase text-green text-5xl font-bold mb-7">Services we provide</h1>
        <p className="text-xl leading-[150%] ">
          Agriculture is one of the largest industries in the world. Currently its going threw a
          revolution, let us help you navigate the new world.{" "}
        </p>
      </div>
      {/* Second col */}
      <Image
        src={"/svg/service-provide.svg"}
        alt="Food sply services provides"
        width={575}
        height={320}
      />
    </div>
  );
};

export default ServiceProvide;
