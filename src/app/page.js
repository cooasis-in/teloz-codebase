import CommunitySupport from "@/components/CommunitySupport";
import Footer from "@/components/Footer";
// import FormHomeTouch from "@/components/FormHomeTouch";
import HeroSection from "@/components/HeroSection";
import LeadingCo from "@/components/LeadingCo";
import Navbar from "@/components/Navbar";
import OurHostSolutions from "@/components/OurHostSolutions";
import PodCast from "@/components/Podcast";
import RoadMap from "@/components/RoadMap";
import Startup from "@/components/Startup";
import StatisticsVolume from "@/components/StatisticsVolume";
import SteveJobs from "@/components/SteveJobs";
import WhyTeloz from "@/components/WhyTeloz";
import Image from "next/image";

export default function Home() {
  return (
    <main>
       <div>
        <Navbar/>
        <HeroSection/>
        <LeadingCo/>
        <OurHostSolutions/>
        <CommunitySupport/>
        <WhyTeloz/>
        <StatisticsVolume/>
        <PodCast/>
        <SteveJobs/>
        <RoadMap/>
        {/* <FormHomeTouch/> */}
        <Startup/>
        <Footer/>
       </div>
    </main>
  );
}
