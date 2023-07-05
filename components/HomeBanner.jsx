import React from "react";
import Image from "next/image";
import { CgMenuRightAlt } from "react-icons/cg";

const HomeBanner = () => {
  return (
    <div className="relative">
      <Image
        src="/homebanner.png"
        width={1800}
        height={500}
        alt="Picture of Banner"
        priority
        style={{ position: "absolute" }}
      />
      <Image
        src="/homebanneroverlay.png"
        width={1800}
        height={500}
        alt="Picture of Banner Overlay"
        priority
        style={{ position: "absolute" }}
      />
      <div>
        <Image
          src="/logobgbanner.png"
          width={350}
          height={350}
          alt="logo-bg"
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: "0",
            right: "0",
          }}
        />
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="logo"
          style={{
            marginTop: "8px",
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: "0",
            right: "0",
          }}
        />
      </div>
      <div className="absolute z-10 top-5 right-5 lg:top-10 lg:right-20 text-gray-100 text-2xl md:text-3xl">
        <button>
          <CgMenuRightAlt />
        </button>
      </div>
      <div className="relative z-10 mr-auto ml-auto w-11/12 ">
        <div className="absolute text-white inset-x-0 top-[100px] md:top-[230px] lg:top-[330px] xl:top-[500px] text-center ">
          <p className="text-lg font-bold lg:text-5xl font-['Playfair_Display']">
            Making Every Event a Celebration!
          </p>
          <button className="mt-1 md:mt-4 xl:mt-8 text-sm lg:text-xl font-medium font-['DM_Sans'] rounded-full border-2 border-pink-600 hover:bg-pink-600 hover:scale-105 px-6 py-2 capitalize ease-in-out duration-300">
            Plan Your Next Event with us
          </button>
          <div className="hidden lg:flex">
            <Image
              src="/scrollbanner.png"
              width={35}
              height={35}
              alt="scroll"
              style={{
                position: "absolute",
                marginLeft: "auto",
                marginRight: "auto",
                left: "0",
                right: "0",
                marginTop: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
