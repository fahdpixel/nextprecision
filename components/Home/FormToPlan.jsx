import Image from "next/image";
import React from "react";
import Button from "@/components/Button";

const FormToPlan = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Image src="/formImage.png" width={700} height={700} alt="Form Picture" className="h-[400px] md:h-auto"/>
      <div className="p-10 md:px-20 md:py-20">
        <h6 className="md:px-10 font-playfair text-center text-3xl md:text-5xl font-extrabold  leading-10">
          Looking to Plan Your Next Celebration?
        </h6>
        <p className="py-10 md:pt-20 md:pb-15 text-center text-lg">
          At Precision Pro Events, we always make sure our clients always have a
          smooth and seamless event. Get in touch with us and we will help you
          plan your next celebration.
        </p>
        <form className="flex flex-col gap-4 font-sans">
          <input
            type="text"
            placeholder="Your Full Name"
            className="border-2 p-4 border-[#293462] bg-[#EFEFEF]"
          />
          <input
            type="number"
            placeholder="Mobile Number"
            className="border-2 p-4 border-[#293462] bg-[#EFEFEF]"
          />
          <input
            type="text"
            placeholder="Email address"
            className="border-2 p-4 border-[#293462] bg-[#EFEFEF]"
          />
          <input
            type="text"
            placeholder="Location"
            className="border-2 p-4 border-[#293462] bg-[#EFEFEF]"
          />
          <input
            type="text"
            placeholder="Select Your Event Type"
            className="border-2 p-4 border-[#293462] bg-[#EFEFEF]"
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Your Message"
            className="border-2 p-4 border-[#293462] bg-[#EFEFEF] resize-none"
          ></textarea>
          <div className="mt-4 flex justify-center">
            <Button
              className=" m-2 md:m-4 hover:bg-[#FC2947] w-32 md:w-36 text-[#293462] font-medium md:text-xl"
              spanColor="bg-[#FC2947]"
            >
              {"Let's Plan"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormToPlan;
