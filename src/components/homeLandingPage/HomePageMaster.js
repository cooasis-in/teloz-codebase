import React from "react";
import HeroSection from "./HeroSection";
import LeadingCo from "./LeadingCo";
import OurHostSolutions from "./OurHostSolutions";
import CommunitySupport from "./CommunitySupport";
import WhyTeloz from "./WhyTeloz";
import StatisticsVolume from "./StatisticsVolume";
import BuiltToSupport from "./BuiltToSupport";
import PodCast from "./Podcast";
import FormHomeTouch from "./FormHomeTouch";
import OurClients from "./OurClients";
import AccordionSection from "./AccordionSection";
import AreUStartup from "../reusableComponents/AreUStartup";

const HomePageMaster = () => {
  return (
    <div>
      <HeroSection />
      <LeadingCo />
      <OurHostSolutions />
      <CommunitySupport />
      <WhyTeloz />
      <StatisticsVolume />
      <BuiltToSupport />
      <PodCast />
      <OurClients />
      <AccordionSection />
      <FormHomeTouch />
      <AreUStartup />
    </div>
  );
};

export default HomePageMaster;
