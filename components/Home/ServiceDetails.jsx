"use client";
import React from "react";
import Wrapper from "@/components/Wrapper";
import ReactPlayer from "react-player/lazy";
import Image from "next/image";
import Button from "../Button";

const ServiceDetails = () => {
  return (
    <div className="bg-[#161616] mt-[280px] md:mt-[330px] pb-24">
      <Wrapper>
        <div className="player-wrapper">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="100%"
            controls={true}
            className="react-player"
          />
        </div>
      </Wrapper>
      <div>
        <h2 className="py-5 font-playfair font-semibold text-4xl text-white text-center mb-4">
          Our Services
        </h2>
        <div className="grid grid-cols-4 text-white font-sans">
          <div className="bg-[#9747FF] flex flex-col">
            <h3 className="p-4 font-medium text-xl">Corporate Events</h3>
            <Image
              src="/service-1.png"
              width={400}
              height={400}
              alt="Picture of Service"
            />
            <Button className="m-4 self-start border-pink-600 hover:bg-pink-600">Know More</Button>
          </div>
          <div className="bg-[#FC2947] flex flex-col">
            <h3 className="p-4 font-medium text-xl">Virtual & Hybrid Events</h3>
            <Image
              src="/service-2.png"
              width={400}
              height={400}
              alt="Picture of Service"
            />
            <Button className="m-4 self-start border-blue-900 hover:bg-blue-900" >Know More</Button>
          </div>
          <div className="bg-[#00187B] flex flex-col">
            <h3 className="p-4 font-medium text-xl">MICE</h3>
            <Image
              src="/service-3.png"
              width={400}
              height={400}
              alt="Picture of Service"
            />
           <Button className="m-4 self-start border-pink-600 hover:bg-pink-600">Know More</Button>
          </div>
          <div className="bg-[#8E008B] flex flex-col">
            <h3 className="p-4 font-medium text-xl">Medical Conferences</h3>
            <Image
              src="/service-4.png"
              width={400}
              height={400}
              alt="Picture of Service"
            />
           <Button className="m-4 self-start border-pink-600 hover:bg-pink-600">Know More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;