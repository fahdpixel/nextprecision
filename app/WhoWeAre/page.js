import HomeBanner from "@/components/Home/HomeBanner";
import Evolution from "@/components/WhoWeAre/Evolution";
import Responsibiltiy from "@/components/WhoWeAre/Responsibiltiy";
import VisionAndMission from "@/components/WhoWeAre/VisionAndMission";
import WhoweareDetails from "@/components/WhoWeAre/WhoweareDetails";
import CSRActivities from "@/components/WhoWeAre/CSRActivities";
import IndustryPractices from "@/components/WhoWeAre/IndustryPractices";
import CountryMap from "@/components/WhoWeAre/CountryMap";
import React from "react";

const Whoweare = () => {
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
      <IndustryPractices />
      <CountryMap />
    </>
  );
};

export default Whoweare;
