import React from "react";
import Image from "next/image";
import { ClientData } from "@/utils/constants";

const Clients = () => {
  return (
    <div className="hidden lg:block bg-bg-dark">
      <div className="section-margin-x py-[70px] flex gap-6 2xl:gap-[75px] items-center justify-between ">
        {ClientData?.map((item) => (
          <Image
            key={item.id}
            src={item.image}
            alt="food sply clients"
            width={item.width || 200}
            height={100}
            className=""
          />
        ))}
      </div>
    </div>
  );
};

export default Clients;
