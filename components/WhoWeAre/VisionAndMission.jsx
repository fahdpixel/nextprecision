import Image from "next/image";
import React from "react";

const VisionAndMission = () => {
  return (
    <section className="bg-[#8E008B] text-white p-10 md:p-24 md:px-48 text-lg">
      <h2 className="text-center lg:px-72 mb-8 md:mb-16 font-sans">
        Our commitment to providing one-of-a-kind and customised solutions for
        all events has facilitated the creation of a culture that respects the
        organization’s values, vision, and mission.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
        <div>
          <div className="flex items-center justify-center gap-4 mb-4 md:mb-8">
            <Image
              src="/visionicon.png"
              width={40}
              height={40}
              alt="vision icon"
            />
            <h3 className="font-playfair text-xl md:text-3xl font-bold text-center ">
              Our Vision
            </h3>
          </div>
          <p className="text-center font-sans md:px-10">
            To be the most creative event management company in the nation that
            constantly stays updated and meets industry standards and surpasses
            customer expectations.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-4 mb-4 md:mb-8">
            <Image
              src="/missionicon.png"
              width={40}
              height={40}
              alt="vision icon"
            />
            <h3 className="font-playfair text-xl md:text-3xl font-bold text-center ">
              Our Mission
            </h3>
          </div>
          <p className="text-center font-sans md:px-10">
            To create timeless memories with flawless events and unique
            solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionAndMission;
