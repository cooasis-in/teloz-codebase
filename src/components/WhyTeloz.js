import Image from "next/image";
import React from "react";
import Button from "./Button";

const WhyTeloz = () => {
  return (
    <div className="container mx-auto mt-20 bg-white p-8 shadow-md flex flex-col lg:flex-row justify-between items-start">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
        <Image
          src="/image/teloz-space.png"
          alt="Office"
          width={600}
          height={500}
        />
      </div>
      <div className="w-full lg:w-1/2 lg:pl-10 lg:mt-10">
        <h2 className="text-2xl font-bold mb-6">Why Choose Teloz Spaces?</h2>
        <ul className="space-y-4">
          <li className="flex justify-between items-center border-b pb-2">
            <span>Expertise</span>
            <svg
              className="w-4 h-4 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M9 5l7 0 0 7"
              ></path>
            </svg>
          </li>
          <li className="flex justify-between items-center border-b pb-2">
            <span>Experience</span>
            <svg
              className="w-4 h-4 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M9 5l7 0 0 7"
              ></path>
            </svg>
          </li>
          <li className="flex justify-between items-center border-b pb-2">
            <span>End-to-end Solutions</span>
            <svg
              className="w-4 h-4 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M9 5l7 0 0 7"
              ></path>
            </svg>
          </li>
          <li className="flex justify-between items-center border-b pb-2">
            <span>Flexibility</span>
            <svg
              className="w-4 h-4 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M9 5l7 0 0 7"
              ></path>
            </svg>
          </li>
          <li className="flex justify-between items-center">
            <span>Design</span>
            <svg
              className="w-4 h-4 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="4"
                d="M9 5l7 0 0 7"
              ></path>
            </svg>
          </li>
        </ul>
        <div className="mt-6">
          <Button
            className="mt-8"
            color="bg-white"
            text="black"
            border="border"
            hover="hover:bg-[#FFFCEE]"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhyTeloz;
