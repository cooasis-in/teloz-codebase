"use client";
import React from "react";
import Image from "next/image";
import Button from "../reusableComponents/Button";

const HeroSection = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center w-full">
        <div className="md:w-1/2 flex flex-col items-start mb-2 lg:mb-[150px] space-y-4">
          <h1 className="text-5xl lg:text-7xl font-bold md:text-6xl lg:leading-[97.92px]">
            Incubation Centre
          </h1>
          <p className="text-base max-w-lg  text-[#00000078]">
            Incubation Centre is the investment and acceleration arm of Teloz
            Spaces, helping early-stage startups accelerate their growth journey
            by unlocking access to subsidised workspaces, curated founder
            communities and strategic investments.
          </p>
          <div className="mt-10">
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
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center relative">
          <Image
            src="/image/Mask group (3).png"
            alt="Office Image"
            width={500}
            height={834.3}
            className="lg:ml-[100px]"
          />
          <div className="hidden lg:block absolute bottom-[20px] left-[43px]">
            <Image
              src="/image/Group 97 (1).png"
              alt="Design Element"
              width={300}
              height={50}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
