import React from "react";
import Button from "./Button";
import Image from "next/image";

const OurHostSolutions = () => {
  return (
    <div className="container mx-auto mt-20 px-4 md:mt-40">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h3 className="text-2xl md:text-4xl font-normal text-center md:text-left mb-4 md:mb-0">
          Explore our host of solutions
        </h3>
        {/* <button className="block bg-white text-black px-4 py-2 border hover:bg-[#FFFCEE] w-[147px] h-[59px] text-center">
          View All
        </button> */}
        <Button className="mt-8" color=" bg-white" text="black" border="border" hover="hover:bg-[#FFFCEE] ">View All</Button>
      </div>
      <p className="lg:mt-10 mt-4 text-center md:text-left">
        From coworking spaces to private offices, you can choose from a range of
        solutions or even <br /> bundle our offerings to tailor solutions to
        suit your business
      </p>

      {/* Cards */}
      <div className="container mx-auto mt-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex items-center w-full md:w-[415px] h-[202px] bg-white border">
            <div className="image p-6">
              <Image
                src="/image/cardLogo.png"
                alt="Office Image"
                width={60}
                height={20}
              />
            </div>
            <div className="ml-3">
              <h1 className="font-bold text-lg md:text-2xl">Private Cabin</h1>
              <p className="text-sm md:text-xs text-[#0000008A] mt-2 md:mt-6">
                Fully-equipped, ready-to-move-in or <br /> customisable private
                offices
              </p>
            </div>
          </div>

          <div className="flex items-center w-full md:w-[415px] h-[202px] bg-white border">
            <div className="image p-6">
              <Image
                src="/image/cardLogo.png"
                alt="Office Image"
                width={60}
                height={20}
              />
            </div>
            <div className="ml-3">
              <h1 className="font-bold text-lg md:text-2xl">On Demand Pass</h1>
              <p className="text-sm md:text-xs text-[#0000008A] mt-2 md:mt-6">
                Fully-equipped, ready-to-move-in or <br /> customisable private
                offices
              </p>
            </div>
          </div>

          <div className="flex items-center w-full md:w-[415px] h-[202px] bg-white border">
            <div className="image p-6">
              <Image
                src="/image/cardLogo.png"
                alt="Office Image"
                width={60}
                height={20}
              />
            </div>
            <div className="ml-3">
              <h1 className="font-bold text-lg md:text-2xl">Flexi-seat</h1>
              <p className="text-sm md:text-xs text-[#0000008A] mt-2 md:mt-6">
                Fully-equipped, ready-to-move-in or <br /> customisable private
                offices
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurHostSolutions;
