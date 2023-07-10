import Image from "next/image";
import React from "react";

const Responsibiltiy = () => {
  return (
    <section className="relative">
      <Image
        src="/responsibilityimage.png"
        width={1800}
        height={100}
        alt="Responsibility Picture"
      />
      <h4 className="text-center absolute text-white left-0 right-0 mr-auto ml-auto top-10 md:top-20 lg:top-36 lg:px-96 font-extrabold font-playfair text-xl lg:text-4xl">
        Our Core Values that Help Us Deliver Exceptional Service
      </h4>
      <h5 className="text-[#FC2947] font-sans text-center absolute left-0 right-0 mr-auto ml-auto top-24 md:top-36 lg:top-72 lg:px-96 font-extrabold text-2xl lg:text-6xl">
        Responsibility{" "}
      </h5>
    </section>
  );
};

export default Responsibiltiy;
