import Image from "next/image";
import React from "react";

const MobileApp = () => {
  return (
    <div className="background-mobile">
      <div className="section-margin-x py-12 lg:py-[115px] flex justify-center items-center lg:gap-48 xl:gap-64">
        {/* First col */}
        <div className="">
          <Image src="/logo2.svg" alt="food suply" width={315} height={94} className="mb-8" />
          <p className="hidden md:block text-text-dark text-xl mb-[88px] w-[526px]">
            Discover the freshest agricultural products with FOODSPLY, now on mobile! Download now
            on Google Play or the Apple Store and connect directly with the farm-to-table
            experience.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <Image
              src={"/svg/mobile-app/googleplay.svg"}
              alt="Food sply app"
              width={200}
              height={60}
            />
            <Image
              src={"/svg/mobile-app/appstore.svg"}
              alt="Food sply app"
              width={200}
              height={60}
            />
          </div>
        </div>
        {/* Second col */}
        <div>
          <Image src="/svg/mobile-app/phone.svg" alt="food suply" width={305} height={615} />
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
