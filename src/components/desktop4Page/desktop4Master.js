import HeroSection from "../homeLandingPage/HeroSection";
import AreUStartup from "../reusableComponents/AreUStartup";
import GrowthNetwork from "./GrowthNetwork";
import OurPartners from "./OurPartners";
import TelozCommunity from "./TelozCommunity";

const Desktop4Master = () => {
  return (
    <>
      <HeroSection />
      <TelozCommunity />
      <AreUStartup />
      <GrowthNetwork/>
      <OurPartners/>
    </>
  );
}

export default Desktop4Master;