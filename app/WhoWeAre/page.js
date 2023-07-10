import HomeBanner from "@/components/Home/HomeBanner";
import Evolution from "@/components/WhoWeAre/Evolution";
import Responsibiltiy from "@/components/WhoWeAre/Responsibiltiy";
import VisionAndMission from "@/components/WhoWeAre/VisionAndMission";
import WhoweareDetails from "@/components/WhoWeAre/WhoweareDetails";
import CSRActivities from "@/components/WhoWeAre/CSRActivities";

import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <>
      <HomeBanner
        image="/whowearebanner.jpg"
        headtext={"Who We Are"}
        location={"Home > Who We Are"}
      />
      <WhoweareDetails />
      <VisionAndMission />
      <Responsibiltiy />
      <Evolution />
      <CSRActivities />
      <section className="mt-4 lg:mt-12 relative">
        <h5 className="text-center font-playfair text-3xl xl:text-5xl font-extrabold leading-8 mb-1 md:mb-8 pt-4 lg:pt-8 ">
          Adherence to Industry Practices
        </h5>
        <Image
          src="/industrypractices.jpg"
          width={1800}
          height={300}
          alt="Picture of Industry Practices"
        />
        <div className="bg-[#B01D42] text-white p-10 lg:p-16 lg:absolute right-0 bottom-0 lg:w-3/5 flex justify-center items-center gap-8 flex-col flex-wrap text-center font-sans text-lg">
          <p>
            Our job doesn’t stop with organizing events but lies in learning and
            doing more beyond the expectations of our customers. By
            participating in conferences, events, workshops, and seminars on
            event management, we give our best.
          </p>
          <Image
            src="/eemalogowhite.png"
            width={170}
            height={170}
            alt="Picture of eema logo white"
          />
          <p>
            EEMA is a non-profit organization that brings the country’s event
            management companies and other organizing companies under one roof.
            We, at Precision Pro Events, attend all their webinars, meetings,
            and sessions on software interactions, new industry updates and
            standards, and monthly vendor meets to stay attuned to the market
            needs. 
          </p>
        </div>
      </section>
      <section className="bg-black">
        <h6 className="text-center font-playfair text-3xl xl:text-5xl font-extrabold leading-8 mb-1 md:mb-8 pt-4 lg:pt-16 text-white p-8">
          Countries Where We Have Hosted Events
        </h6>
        <Image
          src="/countrymap.png"
          width={1800}
          height={300}
          alt="Picture of country map"
          className="lg:h-[600px] overflow-hidden object-top object-contain md:object-cover"
        />
      </section>
    </>
  );
};

export default Page;
