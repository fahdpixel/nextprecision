"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Button from "@/components/Button";

const GallerySlider = () => {
  var settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipe: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "progressive",
  };
  return (
    <div>
      <h4 className="text-3xl md:text-5xl font-extrabold text-center font-playfair mb-4">
        Get a Glimpse of Our Works
      </h4>
      <div className="flex justify-center mb-6">
        <Button
          className="m-4 self-start hover:bg-pink-600 w-36 text-[#293462] hover:text-white font-medium"
          spanColor="bg-pink-600"
        >
          View Gallery
        </Button>
      </div>
      <Slider {...settings}>
        <div className="relative">
          <Image
            src="/sliderimage.png"
            width={1600}
            height={700}
            alt="Picture of Slider"
          />
          <div className="px-10 md:px-40 absolute z-10 bottom-10 md:bottom-[70px] flex items-center justify-between gap-1 w-full">
            <p className="text-white font-playfair font-extrabold text-base md:text-4xl ">
              Corporate Events
            </p>
            <Button
              className="m-2 md:m-4 hover:bg-pink-600 w-36 text-white font-medium"
              spanColor="bg-pink-600"
            >
              View Gallery
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/sliderimage.png"
            width={1600}
            height={700}
            alt="Picture of Slider"
          />
          <div className="px-10 md:px-40 absolute z-10 bottom-10 md:bottom-[70px] flex items-center justify-between gap-1 w-full">
            <p className="text-white font-playfair font-extrabold text-base md:text-4xl ">
              Corporate Events
            </p>
            <Button
              className="m-2 md:m-4 hover:bg-pink-600 w-36 text-white font-medium"
              spanColor="bg-pink-600"
            >
              View Gallery
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/sliderimage.png"
            width={1600}
            height={700}
            alt="Picture of Slider"
          />
          <div className="px-10 md:px-40 absolute z-10 bottom-10 md:bottom-[70px] flex items-center justify-between gap-1 w-full">
            <p className="text-white font-playfair font-extrabold text-base md:text-4xl ">
              Corporate Events
            </p>
            <Button
              className="m-2 md:m-4 hover:bg-pink-600 w-36 text-white font-medium"
              spanColor="bg-pink-600"
            >
              View Gallery
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/sliderimage.png"
            width={1600}
            height={700}
            alt="Picture of Slider"
          />
          <div className="px-10 md:px-40 absolute z-10 bottom-10 md:bottom-[70px] flex items-center justify-between gap-1 w-full">
            <p className="text-white font-playfair font-extrabold text-base md:text-4xl ">
              Corporate Events
            </p>
            <Button
              className="m-2 md:m-4 hover:bg-pink-600 w-36 text-white font-medium"
              spanColor="bg-pink-600"
            >
              View Gallery
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/sliderimage.png"
            width={1600}
            height={700}
            alt="Picture of Slider"
          />
          <div className="px-10 md:px-40 absolute z-10 bottom-10 md:bottom-[70px] flex items-center justify-between gap-1 w-full">
            <p className="text-white font-playfair font-extrabold text-base md:text-4xl ">
              Corporate Events
            </p>
            <Button
              className="m-2 md:m-4 hover:bg-pink-600 w-36 text-white font-medium"
              spanColor="bg-pink-600"
            >
              View Gallery
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/sliderimage.png"
            width={1600}
            height={700}
            alt="Picture of Slider"
          />
          <div className="px-10 md:px-40 absolute z-10 bottom-10 md:bottom-[70px] flex items-center justify-between gap-1 w-full">
            <p className="text-white font-playfair font-extrabold text-base md:text-4xl ">
              Corporate Events
            </p>
            <Button
              className="m-2 md:m-4 hover:bg-pink-600 w-36 text-white font-medium"
              spanColor="bg-pink-600"
            >
              View Gallery
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/sliderimage.png"
            width={1600}
            height={700}
            alt="Picture of Slider"
          />
          <div className="px-10 md:px-40 absolute z-10 bottom-10 md:bottom-[70px] flex items-center justify-between gap-1 w-full">
            <p className="text-white font-playfair font-extrabold text-base md:text-4xl ">
              Corporate Events
            </p>
            <Button
              className="m-2 md:m-4 hover:bg-pink-600 w-36 text-white font-medium"
              spanColor="bg-pink-600"
            >
              View Gallery
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/sliderimage.png"
            width={1600}
            height={700}
            alt="Picture of Slider"
          />
          <div className="px-10 md:px-40 absolute z-10 bottom-10 md:bottom-[70px] flex items-center justify-between gap-1 w-full">
            <p className="text-white font-playfair font-extrabold text-base md:text-4xl ">
              Corporate Events
            </p>
            <Button
              className="m-2 md:m-4 hover:bg-pink-600 w-36 text-white font-medium"
              spanColor="bg-pink-600"
            >
              View Gallery
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/sliderimage.png"
            width={1600}
            height={700}
            alt="Picture of Slider"
          />
          <div className="px-10 md:px-40 absolute z-10 bottom-10 md:bottom-[70px] flex items-center justify-between gap-1 w-full">
            <p className="text-white font-playfair font-extrabold text-base md:text-4xl ">
              Corporate Events
            </p>
            <Button
              className="m-2 md:m-4 hover:bg-pink-600 w-36 text-white font-medium"
              spanColor="bg-pink-600"
            >
              View Gallery
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/sliderimage.png"
            width={1600}
            height={700}
            alt="Picture of Slider"
          />
          <div className="px-10 md:px-40 absolute z-10 bottom-10 md:bottom-[70px] flex items-center justify-between gap-1 w-full">
            <p className="text-white font-playfair font-extrabold text-base md:text-4xl ">
              Corporate Events
            </p>
            <Button
              className="m-2 md:m-4 hover:bg-pink-600 w-36 text-white font-medium"
              spanColor="bg-pink-600"
            >
              View Gallery
            </Button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default GallerySlider;
