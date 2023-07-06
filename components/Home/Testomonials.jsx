import Image from "next/image";
import React from "react";

const Testomonials = () => {
  return (
    <div className="bg-[#7149C6] h-[400px] mb-[450px] md:mb-80 relative">
      <div className="flex flex-col md:flex-row p-10 md:px-40 gap-6 md:pt-20">
        <h5 className="font-playfair text-3xl md:text-5xl font-extrabold text-white">
          What Our Customers Say
        </h5>
        <Image
          src="/testomonials-1.jpg"
          width={1000}
          height={1000}
          alt="Picture of testomonials"
        />
      </div>
      <div className="relative bg-white md:w-[600px] md:h-[380px] md:absolute md:bottom-[-230px] md:left-[100px] p-10 rounded-md shadow-xl">
        <p>
          “Precision Pro Events were incredibly professional, organized, and
          attentive to every detail, making my wedding planning process a
          breeze. From the initial consultation to the day of my wedding, their
          communication and coordination were outstanding. I highly recommend
          Precision Pro Events to anyone looking for an exceptional and
          stress-free wedding planning experience.”
        </p>
        <Image src="/avatar.png" width={40} height={40} alt="avatar" className="rounded-full mt-8"/>
        <h6 className="font-semibold mt-4">Aishwarya Barvadekar</h6>
        <p>Chennai</p>
        <Image src="/colonsymbol.png" width={80} height={80} alt="Colon" className="hidden md:flex absolute bottom-[-40px] right-[-50px]"/>
      </div>
    </div>
  );
};

export default Testomonials;
