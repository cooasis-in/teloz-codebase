import React from "react";
import Image from "next/image";
import Button from "../reusableComponents/Button";

const HeroSection = () => {
  return (
    <div className=" container relative mt-[120px] flex items-center justify-center min-h-screen">
      <div className="relative z-10 bg-white p-16 shadow-lg max-w-sm lg:max-w-md w-[515px] h-[427px] mr-[-150px]">
        <div className="mt-10">
          <h1 className="text-4xl font-semibold mb-4">
            Host your events and shoots at Teloz
          </h1>
          <div className="mt-20">
            <Button
              size="lg:w-[186px] lg:h-[59px]"
              color=" bg-black"
              border="border"
              hover="none"
              borcolor="border-black"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
      <div className="lg:relative md:absolute w-[901px] h-[589px] ">
        <Image
          src="/image/hosts.png"
          alt="Teloz Venue"
          layout="fill"
          objectFit="cover"
          className="lg:ml-[15px]"
        />
      </div>
    </div>
  );
};

export default HeroSection;
