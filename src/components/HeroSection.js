import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-[#F9F6F1] flex flex-col md:flex-row items-center py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center w-full">
        <div className="md:w-1/2 flex flex-col items-start space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            An area <br />
            shared work <br />
            which promotes <br />
            <span className="text-[#F26622]">creativity</span>
          </h1>
          <div className="mt-8 flex space-x-4">
            <button className="bg-black text-white px-6 py-3 rounded text-lg hover:bg-gray-800">
              Book Now
            </button>
            <button className="border border-black text-black px-6 py-3 rounded text-lg hover:bg-gray-200">
              Watch Video
            </button>
          </div>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <Image
            src="/image/Header.png"  // Replace with your image path
            alt="Office Image"
            width={600}
            height={200}
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
