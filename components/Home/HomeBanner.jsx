"use client";

import React, { useState } from "react";
import Image from "next/image";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import Button from "../Button";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import Link from "next/link";

const HomeBanner = ({ image, button, headtext, location, scrollCursor }) => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="relative h-screen">
      <Image
        src={image}
        width={1800}
        height={500}
        alt="Picture of Banner"
        priority
        style={{ position: "absolute", height: "100vh", objectFit: "cover" }}
      />
      <Image
        src="/blackoverlay.png"
        width={1800}
        height={500}
        alt="Picture of Banner Overlay"
        priority
        style={{ position: "absolute", height: "100vh" }}
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
      <div className="absolute z-10 top-5 right-5 lg:top-10 lg:right-20 text-gray-100 text-2xl md:text-4xl font-thin">
        <button>
          <CgMenuRightAlt onClick={() => setMenu((prev) => !prev)} />
        </button>
      </div>
      <div className="relative z-10 mr-auto ml-auto w-11/12 ">
        <div className="absolute text-white inset-x-0 top-[450px] xl:top-[500px] text-center ">
          {headtext && (
            <p className={`text-3xl md:text-5xl font-bold font-playfair ${scrollCursor ? "":"mt-16"}`}>
              {headtext}
            </p>
          )}
          {
            location && (
              <p className="text-sm md:text-lg font-normal font-sans mt-4 md:mt-8">
              {location}
            </p>
            )
          }
          <div className="text-center flex justify-center items-center">
            {button && (
              <Button
                className="text-center mt-4 xl:mt-8 text-md lg:text-xl font-medium font-sans hover:bg-pink-600 w-[250px] md:w-[320px]"
                spanColor="bg-pink-600"
              >
                {button}
              </Button>
            )}
          </div>
          <div>
            {scrollCursor && (
              <Image
                src="/scrollbanner.png"
                width={32}
                height={32}
                alt="scroll"
                style={{
                  position: "absolute",
                  marginLeft: "auto",
                  marginRight: "auto",
                  left: "0",
                  right: "0",
                  marginTop: "38px",
                }}
                className="animate-bounce"
              />
            )}
          </div>
        </div>
      </div>
      <div
        className={`flex flex-row absolute z-20 h-screen w-full ${
          menu ? "flex" : "hidden"
        }`}
      >
        <CgClose
          className="absolute top-5 right-5 lg:top-10 lg:right-20 text-2xl md:text-4xl text-white cursor-pointer"
          onClick={() => setMenu((prev) => !prev)}
        />
        <Image
          src="/menuimage.png"
          width={750}
          height={750}
          alt="Picture Of Menu"
          className="hidden md:flex"
        />
        <div className="bg-[#001D96] w-full flex flex-col items-center gap-4 md:gap-8">
          <Image
            src="/logo.png"
            width={160}
            height={160}
            alt="Picture Of Logo"
            className="mt-16 mb-6"
          />
          <Link href="/" className="cursor-pointer font-semibold md:text-3xl text-2xl  hover:text-white/[0.5] text-white">
            Home
          </Link>
          <Link href="/whoweare" className="cursor-pointer font-semibold md:text-3xl text-2xl  hover:text-white/[0.5] text-white">
            Who We Are
          </Link>
          <p className="cursor-pointer font-semibold md:text-3xl text-2xl  hover:text-white/[0.5] text-white">
            What We Do
          </p>
          <p className="cursor-pointer font-semibold md:text-3xl text-2xl  hover:text-white/[0.5] text-white">
            Why Choose Us
          </p>

          <p className="cursor-pointer font-semibold md:text-3xl text-2xl  hover:text-white/[0.5] text-white">
            Gallery
          </p>
          <div className="flex flex-col items-center md:flex-row text-lg md:gap-8 my-4">
            <p className="cursor-pointer  text-white hover:text-white/[0.5]">
              Blogs
            </p>
            <p className="cursor-pointer  text-white hover:text-white/[0.5]">
              Testimonials
            </p>
            <p className="cursor-pointer  text-white hover:text-white/[0.5]">
              Careers
            </p>
            <p className="cursor-pointer  text-white hover:text-white/[0.5]">
              Privacy Policy
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-white hover:bg-white/[0.5] cursor-pointer">
              <FaFacebookF size={16} />
            </div>
            <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-white hover:bg-white/[0.5] cursor-pointer">
              <FaInstagram size={16} />
            </div>

            <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-white hover:bg-white/[0.5] cursor-pointer">
              <FaYoutube size={16} />
            </div>
            <div className="w-8 h-8 rounded-full border-2 flex items-center justify-center text-white hover:bg-white/[0.5] cursor-pointer">
              <FaLinkedinIn size={16} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
