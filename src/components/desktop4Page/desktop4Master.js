import HeroSection from "../homeLandingPage/HeroSection";
import AreUStartup from "../reusableComponents/AreUStartup";
import GrowthNetwork from "./GrowthNetwork";
import OurPartners from "./OurPartners";
import TelozCommunity from "./TelozCommunity";
import WantPartnerWithUs from "./WantPartnerWithUs";

const Desktop4Master = () => {
  return (
    <>
      <HeroSection />
      <TelozCommunity />
      <AreUStartup />
      <GrowthNetwork/>
      <OurPartners/>
      <WantPartnerWithUs/>
    </>
  );
}

export default Desktop4Master;