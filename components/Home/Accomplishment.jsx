import React from "react";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

const Accomplishment = () => {
  return (
    <div>
      <Wrapper className="my-6 md:my-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col">
            <h1 className="text-4xl md:text-5xl font-semibold font-playfair">
              Creating Bespoke Experiences Worldwide
            </h1>
            <p className="mt-4 md:mt-8 font-sans">
              With years of experience and expertise in the industry, we have
              been creating an ever-lasting impact on brands, businesses, and
              people with creative and flawless events. Our wide range of
              services includes venue sourcing, design & decor, vendor
              coordination, entertainment, logistics, and more. Our attention to
              detail and our commitment to excellence have facilitated the
              hosting of corporate, virtual/ hybrid, weddings, parties, product
              launches, and other events to the utmost satisfaction of clients.
            </p>
            <button className="mt-4 md:mt-8 rounded-full border-2 border-pink-600 hover:bg-pink-600 hover:scale-105 px-6 py-2 capitalize ease-in-out duration-300 self-baseline font-sans hover:text-white">
              Read More
            </button>
          </div>
          <div className="flex justify-center relative">
            <Image
              src="/aboutimage.png"
              width={500}
              height={500}
              alt="Picture of About Section"
              priority
              style={{ zIndex: "10" }}
            />
            <Image
              src="/bgcircle.png"
              width={500}
              height={500}
              alt="Picture of About Section"
              priority
              style={{ position: "absolute", top: "-70px" }}
            />
          </div>
        </div>
        <div className="mt-16 md:mt-32 grid grid-cols-1 md:grid-cols-4 gap-4 self-start">
          <div className="flex flex-col gap-4">
            <p className="font-mont text-4xl md:text-8xl text-[#001D96] font-semibold justify-center">
              20
              <span className="font-mont text-3xl md:text-8xl text-[#001D96] font-light">
                +
              </span>
            </p>
            <p className="font-sans">Years Of Excellence</p>
          </div>
          <div className="flex flex-col gap-4 lg:ml-[-35px]">
            <p className="font-mont text-4xl md:text-8xl text-[#001D96] font-semibold ">
              2.5K
              <span className="font-mont text-3xl md:text-8xl text-[#001D96] font-light">
                +
              </span>
            </p>
            <p className="font-sans">Events Organized Across India </p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-mont text-4xl md:text-8xl text-[#001D96] font-semibold ">
              6K
              <span className="font-mont text-3xl md:text-8xl text-[#001D96] font-light">
                +
              </span>
            </p>
            <p className="font-sans">Happy Customers</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-mont text-4xl md:text-8xl text-[#001D96] font-semibold ">
              50
              <span className="font-mont text-3xl md:text-8xl text-[#001D96] font-light">
                +
              </span>
            </p>
            <p className="font-sans">Experienced Team Members</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Accomplishment;
