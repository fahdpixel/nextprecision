import Image from "next/image";
import React from "react";
import Wrapper from "@/components/Wrapper";

const CSRActivities = () => {
  return (
    <section>
      <h5 className="text-center font-playfair text-3xl xl:text-5xl font-extrabold leading-8 mb-1 md:mb-8 pt-4 md:pt-8 ">
        Our CSR Activities
      </h5>
      <Wrapper className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 my-4 place-content-center place-items-center">
        <div className="bg-[#00187B] font-sans text-white w-[325px] h-[325px] text-center p-24 px-10 text-lg rounded-[70px] flex items-center">
          <p>
            Sponsor for the yearly talent display event held for
            differently-abled children.
          </p>
        </div>
        <div className="bg-[#00187B] bg-opacity-70 font-sans text-white w-[325px] h-[325px] text-center p-24 px-10 text-lg rounded-[70px] flex justify-center items-center  lg:mt-12 relative">
          <Image
            src="/activity-1.png"
            width={1800}
            height={500}
            alt="activity picture"
            className="absolute top-0 z-[-5] h-[325px]"
          />
          <p>Madras Naturalists’ Society</p>
        </div>
        <div className="bg-[#00187B] bg-opacity-70 font-sans text-white w-[325px] h-[325px] text-center p-24 px-10 text-lg rounded-[70px] flex justify-center items-center relative">
          <Image
            src="/activity-2.png"
            width={1800}
            height={500}
            alt="activity picture"
            className="absolute top-0 z-[-5] h-[325px]"
          />
          <p>Run for Life</p>
        </div>
      </Wrapper>
    </section>
  );
};

export default CSRActivities;
