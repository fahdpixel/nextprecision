import Image from "next/image";
import React from "react";

const WhoweareDetails = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 p-10 md:p-24 md:px-40 relative">
      <h1 className="font-playfair text-3xl xl:text-5xl font-extrabold leading-8 mb-4">
        Immersive Experiences, Delivered with Finesse
      </h1>
      <div className="font-sans relative text-lg">
        <p className="mb-4">
          With a couple of passionate people, Precision Pro Events was
          established as a fun venture by Mr Sundar Babu in a 300 sq. ft. rental
          space.
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
  );
};

export default WhoweareDetails;
