import Image from "next/image";
import React from "react";

const BrandsTrustUs = () => {
  return (
    <div className="bg-[#00187B] mt-[-10px]">
      <h5 className="text-2xl md:text-4xl font-extrabold font-playfair text-center text-white pt-8 md:pt-16">
        Trusted By Brands Across the Nation
      </h5>
      <div className="flex justify-center items-center py-10 md:py-20 ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20 items-center justify-center">
          <Image
            src="/brand-1.png"
            width={145}
            height={145}
            alt="Brand Logo Picture"
            className="place-self-center"
            />
          <Image
            src="/brand-2.png"
            width={145}
            height={145}
            alt="Brand Logo Picture"
            className="place-self-center"
          />
          <Image
            src="/brand-3.png"
            width={145}
            height={145}
            alt="Brand Logo Picture"
            className="place-self-center"
          />
          <Image
            src="/brand-4.png"
            width={145}
            height={145}
            alt="Brand Logo Picture"
            className="place-self-center"
          />
          <Image
            src="/brand-5.png"
            width={60}
            height={60}
            alt="Brand Logo Picture"
            className="place-self-center"
          />
          <Image
            src="/brand-6.png"
            width={145}
            height={145}
            alt="Brand Logo Picture"
            className="place-self-center"
          />
          <Image
            src="/brand-7.png"
            width={145}
            height={145}
            alt="Brand Logo Picture"
            className="place-self-center"
          />
          <Image
            src="/brand-8.png"
            width={95}
            height={95}
            alt="Brand Logo Picture"
            className="place-self-center"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandsTrustUs;
