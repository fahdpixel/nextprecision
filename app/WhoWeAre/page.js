import HomeBanner from "@/components/Home/HomeBanner";
import Image from "next/image";
import React from "react";

const WhoWeAre = () => {
  return (
    <>
      <HomeBanner
        image="/whowearebanner.jpg"
        headtext={"Who We Are"}
        location={"Home > Who We Are"}
      />
      {/* section 1 */}
      <section className="grid grid-cols-1 md:grid-cols-2 p-10 md:p-24 md:px-40 relative">
        <h1 className="font-playfair text-3xl xl:text-5xl font-extrabold leading-8 mb-4">
          Immersive Experiences, Delivered with Finesse
        </h1>
        <div className="font-sans relative text-lg">
          <p className="mb-4">
            With a couple of passionate people, Precision Pro Events was
            established as a fun venture by Mr Sundar Babu in a 300 sq. ft.
            rental space.
          </p>
          <p>
            {`The company was founded a couple of decades ago with the primary
            vision to deliver exceptional events that exceed clients’
            expectations. With time and experience, the company's growth and
            success became evident with its purchase of a three-storey office
            space that can accommodate more than 30 people with state-of-the-art
            equipment and technologies. Today, we are catering to the needs of
            all industries, businesses, households, corporates, and other niches
            with prompt services that leave an everlasting impact. `}
          </p>
        </div>
        <Image
          src="/bgcircle.png"
          width={350}
          height={350}
          alt="bgcircle"
          className="absolute left-[-130px] bottom-[-190px] rotate-90 z-[-10]"
        />
      </section>
      {/* section 2 */}
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
              To be the most creative event management company in the nation
              that constantly stays updated and meets industry standards and
              surpasses customer expectations.
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
      {/* section 3 */}
      <section className="relative"> 
        <Image src="/responsibilityimage.png" width={1800} height={100} alt="Responsibility Picture" />
        <h4 className="text-center absolute text-white left-0 right-0 mr-auto ml-auto top-10 md:top-20 lg:top-36 lg:px-96 font-extrabold font-playfair text-xl lg:text-4xl">Our Core Values that Help Us Deliver Exceptional Service</h4>
        <h5 className="text-[#FC2947] font-sans text-center absolute left-0 right-0 mr-auto ml-auto top-24 md:top-36 lg:top-72 lg:px-96 font-extrabold text-2xl lg:text-6xl">Responsibility </h5>
      </section>
    </>
  );
};

export default WhoWeAre;
