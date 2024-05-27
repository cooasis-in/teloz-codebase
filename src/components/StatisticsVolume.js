"use client";
import React from "react";
import CountUp from "react-countup";

const StatisticsVolume = () => {
  return (
    <div className="container mx-auto mt-20 px-4">
      <h1 className="text-center text-4xl mb-10">
        Transformative Statistics that speak volumes
      </h1>
      <div className=" lg:mt-20 md:mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center justify-items-center">
        <div className="text-center">
          <h1 className="font-bold text-5xl">
            <CountUp end={240} duration={5} suffix="%" />
          </h1>
          <p className="text-[#FF5D22] text-xs">Community Growth</p>
        </div>
        <div className="text-center">
          <h1 className="font-bold text-5xl">
            <CountUp end={150} duration={5} suffix="%" />
          </h1>
          <p className="text-[#FF5D22] text-xs">Happy Customers</p>
        </div>
        <div className="text-center">
          <h1 className="font-bold text-5xl">
            <CountUp end={99} duration={5} suffix="%" />
          </h1>
          <p className="text-[#FF5D22] text-xs">Customer Satisfaction</p>
        </div>
        <div className="text-center">
          <h1 className="font-bold text-5xl">
            <CountUp end={100} duration={5} suffix="%" />
          </h1>
          <p className="text-[#FF5D22] text-xs">Community Growth</p>
        </div>
      </div>
    </div>
  );
};

export default StatisticsVolume;
