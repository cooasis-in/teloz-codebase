import React from "react";

function OurClients() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl lg:text-4xl font-normal text-center text-black">
        Hear it from our clients
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="card bg-gray-100 border border-gray-100 shadow-md w-full max-w-xs mx-auto h-80 hover:cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="p-6">
            <div className="flex items-center">
              <img
                src="image/card.png"
                alt="Client"
                className="w-16 h-16"
              />
              <div className="ml-4">
                <h5 className="text-lg font-semibold text-black">Steve Jobs</h5>
                <span className="block text-sm text-gray-700">
                  Co-Founder & CEO
                </span>
                <span className="block text-sm text-gray-700">Apple Inc.</span>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-[16px] leading-[25.2px] font-normal text-[#1D1E1C]">
              &ldquo;The 24/7 access and secure facilities have been incredibly convenient for my team&apos;s flexible schedules. We love the coworking space!&ldquo;
              </p>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card bg-gray-100 border border-gray-100 shadow-md w-full max-w-xs mx-auto h-80 hover:cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="p-6">
            <div className="flex items-center">
              <img
                src="image/card.png"
                alt="Client"
                className="w-16 h-16"
              />
              <div className="ml-4">
                <h5 className="text-lg font-semibold text-black">Steve Jobs</h5>
                <span className="block text-sm text-gray-700">
                  Co-Founder & CEO
                </span>
                <span className="block text-sm text-gray-700">Apple Inc.</span>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-[16px] leading-[25.2px] font-normal text-[#1D1E1C">
              &quot;The 24/7 access and secure facilities have been incredibly convenient for my team&apos;s flexible schedules. We love the coworking space!&quot;
              </p>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card bg-gray-100 border border-gray-100 shadow-md w-full max-w-xs mx-auto h-80 hover:cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="p-6">
            <div className="flex items-center">
              <img
                src="image/card.png"
                alt="Client"
                className="w-16 h-16"
              />
              <div className="ml-4">
                <h5 className="text-lg font-semibold text-black">Steve Jobs</h5>
                <span className="block text-sm text-gray-700">
                  Co-Founder & CEO
                </span>
                <span className="block text-sm text-gray-700">Apple Inc.</span>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-[16px] leading-[25.2px] font-normal text-[#1D1E1C">
              &quot;The 24/7 access and secure facilities have been incredibly convenient for my team&apos;s flexible schedules. We love the coworking space!&quot;
              </p>
            </div>
          </div>
        </div>
        {/* Card 4 */}
        <div className="card bg-gray-100 border border-gray-100 shadow-md w-full max-w-xs mx-auto h-80 hover:cursor-pointer transform transition-transform duration-300 ease-in-out hover:scale-105">
          <div className="p-6">
            <div className="flex items-center">
              <img
                src="image/card.png"
                alt="Client"
                className="w-16 h-16"
              />
              <div className="ml-4">
                <h5 className="text-lg font-semibold text-black">Steve Jobs</h5>
                <span className="block text-sm text-gray-700">
                  Co-Founder & CEO
                </span>
                <span className="block text-sm text-gray-700">Apple Inc.</span>
              </div>
            </div>
            <div className="mt-12">
              <p className="text-[16px] leading-[25.2px] font-normal text-[#1D1E1C">
              &quot;The 24/7 access and secure facilities have been incredibly convenient for my team&apos;s flexible schedules. We love the coworking space!&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurClients;
