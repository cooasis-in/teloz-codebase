import React from "react";
import Image from "next/image";
import Button from "./Button";

const FormReachOut = () => {
  return (
    <div className=" relative mb-[250px] container mt-[120px] flex justify-center items-center min-h-screen bg-white">
      {/* Image */}
      <div className="lg:relative md:absolute w-[1312px] h-[743px] ">
        <Image
          src="/image/hosts.png"
          alt="Teloz Venue"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className=" absolute mt-[250px] opacity-95 bg-white p-8 " style={{ width: '693px', height: '820px' }}>
      <h2 className="text-4xl font-semibold mb-6 text-center">Get in touch with us</h2>
      <form className="space-y-6 ">
        <div className="grid grid-cols-2 gap-4 mt-12">
          <input
            type="text"
            placeholder="Full Name*"
            className="border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            style={{ width: '299px', height: '59px' }}
          />
          <input
            type="email"
            placeholder="Email*"
            className="border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            style={{ width: '299px', height: '59px' }}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Company Name*"
            className="border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            style={{ width: '299px', height: '59px' }}
          />
          <input
            type="text"
            placeholder="Phone Number*"
            className="border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
            style={{ width: '299px', height: '59px' }}
          />
        </div>
        <div>
          <div className="grid grid-cols-2 gap-4">
          <label className="block text-[14px] font-semibold">What sort of event do you have in mind?</label> <br />        
          <input
              type="date"
              placeholder="Event Date*"
              className="border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              style={{ width: '299px', height: '59px' }}
            />
            <input
              type="time"
              placeholder="Event Time*"
              className="border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              style={{ width: '299px', height: '59px' }}
            />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            <input
              type="number"
              min="1"
              placeholder="No. of guests*"
              className="border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              style={{ width: '299px', height: '59px' }}
            />
            <div className="items-center space-x-">
              <span className="text-gray-700">Is your event open to Teloz members?*</span>
              <div className=" mt-3 items-start space-x-2 ">
                <input
                  type="radio"
                  id="yes"
                  name="teloz"
                  value="yes"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
                <label htmlFor="yes" className="text-sm font-medium text-gray-700">Yes</label>
                <input
                  type="radio"
                  id="no"
                  name="teloz"
                  value="no"
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300"
                />
                <label htmlFor="no" className="text-sm font-medium text-gray-700">No</label>
              </div>
            </div>
          </div>
        </div>
        <textarea
          placeholder="Additional Notes*"
          className="border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
          rows="4"
          style={{ width: '631px', height: '118px' }}
        ></textarea>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            className="h-4 w-4 text-blue-600 border-gray-300"
          />
          <label htmlFor="terms" className="text-sm font-medium text-gray-700">
            By clicking the above button, you agree to our{" "}
            <a href="#" className="text-blue-600 hover:underline">Terms of Service</a>{" "}
            and confirm that you have read and understood our{" "}
            <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
          </label>
        </div>
        <div>
          <Button
              size="lg:w-[234px] lg:h-[59px]"
              color=" bg-black"
              border="border"
              hover="none"
              borcolor="border-black"
            >
              Get in touch
            </Button>
            
        </div>
      </form>
    </div>
    </div>
  );
};

export default FormReachOut;
