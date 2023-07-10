import Image from "next/image";
import React from "react";

const CountryMap = () => {
  return (
    <section className="bg-black">
      <h6 className="text-center font-playfair text-3xl xl:text-5xl font-extrabold leading-8 mb-1 md:mb-8 pt-4 lg:pt-16 text-white p-8">
        Countries Where We Have Hosted Events
      </h6>
      <Image
        src="/countrymap.png"
        width={1800}
        height={300}
        alt="Picture of country map"
        className="lg:h-[600px] overflow-hidden object-top object-contain md:object-cover"
      />
    </section>
  );
};

export default CountryMap;
