import CommunitySupport from "@/components/CommunitySupport";
import HeroSection from "@/components/HeroSection";
import LeadingCo from "@/components/LeadingCo";
import Navbar from "@/components/Navbar";
import OurHostSolutions from "@/components/OurHostSolutions";
import StatisticsVolume from "@/components/StatisticsVolume";
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
       </div>
    </main>
  );
}
