
import Image from "next/image";
import React from "react";
import Wrapper from "@/components/Wrapper";

const Evolution = () => {
  return (
    <section className="flex flex-col flex-wrap ">
      <h4 className="pt-4 md:pt-16 text-center font-playfair text-3xl xl:text-5xl font-extrabold leading-8 mb-1 md:mb-4">
        Our Evolution
      </h4>
      <Wrapper className="my-4 md:my-8 md:pb-10">
        <Image
          src="/evolution.png"
          width={1800}
          height={500}
          alt="Our Evolution Picture"
        />
      </Wrapper>
    </section>
  );
};

export default Evolution;
