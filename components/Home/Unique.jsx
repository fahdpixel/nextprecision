import React from "react";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";

const Unique = () => {
  return (
    <Wrapper className="my-6 md:my-20">
      <h3 className="text-2xl md:text-4xl font-extrabold text-center font-playfair mb-4">
        How Are We Different?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-sans mt-4 md:mt-8">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/unique-1.png"
            width={300}
            height={300}
            alt="unique picture"
          />
          <p className="font-sans text-lg font-medium px-16 text-center">Latest Technology & Equipment</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/unique-2.png"
            width={300}
            height={300}
            alt="unique picture"
          />
          <p className="font-sans text-lg font-medium px-16 text-center">Ethical Sourcing & Eco-Friendly Designs</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/unique-3.jpg"
            width={300}
            height={300}
            alt="unique picture"
          />
          <p className="font-sans text-lg font-medium px-16 text-center">In-house Set Designers & Prop Makers </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Unique;
