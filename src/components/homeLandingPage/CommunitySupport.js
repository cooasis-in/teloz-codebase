import React from "react";
import Image from "next/image";
import Button from "../reusableComponents/Button";

const CommunitySupport = () => {
  return (
    <div className="container mx-auto mt-20 px-4 md:mt-40">
      <div className="flex flex-col md:flex-row items-center">
        <h3 className="text-2xl md:text-4xl font-normal text-center md:text-left mb-4 md:mb-0">
          Focused on community and support.
        </h3>
      </div>
      <p className="lg:mt-10 mt-4 text-center md:text-left">
        Hybrid work requires flexibility. Our month-to-month pricing is simple
        and straightforward,
        <br /> made for both individuals and teams alike.
      </p>

      {/* Cards */}
      <div className="Card-main flex justify-center items-center  gap-4 mt-16 flex-col md:flex-row">
        <div className="  bg-[#FF5D220D] hover:bg-orange-100 transition duration-300 ease-in-out w-[308px] h-[367px] border border-transparent p-6 max-w-xs cursor-pointer">
          <div className="ml-3">
            <h2 className="text-2xl font-bold mb-2">Flex</h2>
            <p className="text-orange-600 mb-4">No membership required</p>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-black inline-block mr-2"></span>
                  Day Pass
                </span>
                <span className="text-orange-600">- ₹ 500/day</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-black inline-block mr-2"></span>
                  Meeting Room
                </span>
                <span className="text-orange-600">- ₹ 700/hr</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-black inline-block mr-2"></span>
                  Virtual/Mailbox
                </span>
                <span className="text-orange-600">- ₹ 1,999/mo</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-black inline-block mr-2"></span>
                  Podcast
                </span>
                <span className="text-orange-600">- ₹ 1,999/mo</span>
              </li>
            </ul>

            <Button size="mt-6 w-[234px] h-[59px]">Book on Demo</Button>
          </div>
        </div>

        {/* Card 2 */}

        <div className=" bg-[#FF5D220D] hover:bg-orange-100 transition duration-300 ease-in-out w-[308px] h-[367px] border border-transparent p-6 max-w-xs cursor-pointer">
          <div className="ml-3">
            <h2 className="text-2xl font-bold mb-2">Seat</h2>
            <p className="text-orange-600 mb-4">Starting @ ₹ 4,999/day</p>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-black inline-block mr-2"></span>
                  8am-8pm access
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-black inline-block mr-2"></span>
                  Any open seat in shared area
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-black inline-block mr-2"></span>
                  ₹2999 monthly credits
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-black inline-block mr-2"></span>
                  24x7x365 upgrade + ₹1999
                </span>
              </li>
            </ul>
            <Button size="mt-6 w-[234px] h-[59px]">Join Today</Button>
          </div>
        </div>

        {/* Card 3 */}

        <div className=" bg-[#FF5D220D] hover:bg-orange-100 transition duration-300 ease-in-out w-[308px] h-[367px] border border-transparent p-6 max-w-xs cursor-pointer">
          <div className="ml-3">
            <h2 className="text-2xl font-bold mb-2">Desk</h2>
            <p className="text-orange-600 mb-4">Starting @ ₹ 4,999/day</p>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-black inline-block mr-2"></span>
                  8am-8pm access
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-black inline-block mr-2"></span>
                  Any open seat in shared area
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-black inline-block mr-2"></span>
                  ₹2999 monthly credits
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-black inline-block mr-2"></span>
                  24x7x365 upgrade + ₹1999
                </span>
              </li>
            </ul>
            <Button size="mt-6 w-[234px] h-[59px]">Join Today</Button>
          </div>
        </div>

        {/* Card 4 */}
        <div className=" bg-[#FF5D220D] hover:bg-orange-100 transition duration-300 ease-in-out w-[308px] h-[367px] border border-transparent p-6 max-w-xs cursor-pointer">
          <div className="absolute top-3 right-4 border border-transparent text-sm bg-white p-1 flex flex-col items-start">
            <div className="flex items-center text-orange-600 text-xs">
              <span className="w-2.5 h-2.5 bg-orange-600 inline-block mr-2"></span>
              Filling Fast
            </div>
            <div className="text-orange-600 text-xs ml-5">
              2 offices remaining
            </div>
          </div>
          <div className="ml-3">
            <h2 className="text-2xl font-bold mb-2">Office</h2>
            <p className="text-orange-600 mb-4">Starting @ ₹ 4,999/day</p>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-black inline-block mr-2"></span>
                  8am-8pm access
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-black inline-block mr-2"></span>
                  Any open seat in shared area
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-black inline-block mr-2"></span>
                  ₹2999 monthly credits
                </span>
              </li>
              <li className="flex justify-between items-center">
                <span className="flex items-center">
                  <span className="w-2.5 h-2.5 bg-black inline-block mr-2"></span>
                  24x7x365 upgrade + ₹1999
                </span>
              </li>
            </ul>
            <Button size="mt-6 w-[234px] h-[59px]">Join Today</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySupport;
