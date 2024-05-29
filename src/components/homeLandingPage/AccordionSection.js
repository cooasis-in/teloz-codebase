"use client";
import 'flowbite';

function AccordionSection() {

  return (
    <div className="container mx-auto mt-10 sm:mt-16 md:mt-20 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-start mb-10 sm:mb-12 md:mb-16">
      <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:mt-10 max-w-[531px]">
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-tight sm:leading-snug md:leading-normal lg:leading-[40.8px] font-normal text-[#000000]">
          Your roadmap to Coworking clarity
        </h2>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[36px] font-normal mt-4 sm:mt-6 md:mt-8 text-[#1D1E1C]">
          Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.
        </p>
      </div>
      
      <div id="accordion-collapse" data-accordion="collapse" className="w-full lg:w-1/2 lg:pl-10 lg:mt-10">
        {/* Accordian-dropdown-1 */}
        <h2 id="accordion-collapse-heading-1">
          <button type="button" className="flex items-center justify-between w-full border-b-[1px] border-solid border-[#0000000F] accordian-btn" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
            <span className="text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px] font-normal text-[#000000] pb-4">How flexible are coworking membership plans?</span>
            <img src="image/dropdown-icon.svg" className="mt-[-16px]" alt="" />
          </button>
        </h2>
        <div id="accordion-collapse-body-1" className="hidden" aria-labelledby="accordion-collapse-heading-1">
          <div className="p-5 pl-0">
            <p className="mb-2 text-gray-500 text-[20px] leading-[36px] font-normal">Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.</p>
          </div>
        </div>
        {/* Accordian-dropdown-2 */}
        <h2 id="accordion-collapse-heading-2">
          <button type="button" className="flex items-center justify-between w-full pt-4 border-b-[1px] border-solid border-[#0000000F] pb-4 accordian-btn" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
            <span className="text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px] font-normal text-[#000000]">How flexible are coworking membership plans?</span>
            <img src="image/dropdown-icon.svg" className="mt-[-16px]" alt="" />
          </button>
        </h2>
        <div id="accordion-collapse-body-2" className="hidden" aria-labelledby="accordion-collapse-heading-2">
          <div className="p-5 pl-0">
            <p className="mb-2 text-gray-500 text-[20px] leading-[36px] font-normal">Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.</p>
          </div>
        </div>
        {/* Accordian-dropdown-3 */}
        <h2 id="accordion-collapse-heading-3">
          <button type="button" className="flex items-center justify-between w-full pt-4 border-b-[1px] border-solid border-[#0000000F] pb-4 accordian-btn" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
            <span className="text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px] font-normal text-[#000000]">How flexible are coworking membership plans?</span>
            <img src="image/dropdown-icon.svg" className="mt-[-16px]" alt="" />
          </button>
        </h2>
        <div id="accordion-collapse-body-3" className="hidden" aria-labelledby="accordion-collapse-heading-3">
          <div className="p-5 pl-0">
            <p className="mb-2 text-gray-500 text-[20px] leading-[36px] font-normal">Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.</p>
          </div>
        </div>
        {/* Accordian-dropdown-4 */}
        <h2 id="accordion-collapse-heading-4">
          <button type="button" className="flex items-center justify-between w-full pt-4 border-b-[1px] border-solid border-[#0000000F] pb-4 accordian-btn" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4">
            <span className="text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px] font-normal text-[#000000]">How flexible are coworking membership plans?</span>
            <img src="image/dropdown-icon.svg" className="mt-[-16px]" alt="" />
          </button>
        </h2>
        <div id="accordion-collapse-body-4" className="hidden" aria-labelledby="accordion-collapse-heading-4">
          <div className="p-5 pl-0">
            <p className="mb-2 text-gray-500 text-[20px] leading-[36px] font-normal">Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.</p>
          </div>
        </div>
         {/* Accordian-dropdown-5 */}
        <h2 id="accordion-collapse-heading-5">
          <button type="button" className="flex items-center justify-between w-full pt-4 pb-4 accordian-btn" data-accordion-target="#accordion-collapse-body-5" aria-expanded="false" aria-controls="accordion-collapse-body-5">
            <span className="text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px] font-normal text-[#000000]">How flexible are coworking membership plans?</span>
            <img src="image/dropdown-icon.svg" className="mt-[-16px]" alt="" />
          </button>
        </h2>
        <div id="accordion-collapse-body-5" className="hidden" aria-labelledby="accordion-collapse-heading-5">
          <div className="p-5 pl-0">
            <p className="mb-2 text-gray-500 text-[20px] leading-[36px] font-normal">Frequently asked questions ordered by popularity. Remember that if the visitor has not committed to the call to action, they may still have questions (doubts) that can be answered.</p>
          </div>
        </div>
      </div>

      {/* <div className="">
        <ul className="space-y-4">
          <li className="flex justify-between items-center border-b pb-2">
            <span className="text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px] font-normal text-[#000000]">
              How flexible are coworking membership plans?
            </span>
            <svg
              className="w-4 h-4 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 0 0 7"></path>
            </svg>
          </li>
          <li className="flex justify-between items-center border-b pb-2">
            <span className="text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px] font-normal text-[#000000]">
              How flexible are coworking membership plans?
            </span>
            <svg
              className="w-4 h-4 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 0 0 7"></path>
            </svg>
          </li>
          <li className="flex justify-between items-center border-b pb-2">
            <span className="text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px] font-normal text-[#000000]">
              How flexible are coworking membership plans?
            </span>
            <svg
              className="w-4 h-4 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 0 0 7"></path>
            </svg>
          </li>
          <li className="flex justify-between items-center border-b pb-2">
            <span className="text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px] font-normal text-[#000000]">
              How flexible are coworking membership plans?
            </span>
            <svg
              className="w-4 h-4 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 0 0 7"></path>
            </svg>
          </li>
          <li className="flex justify-between items-center">
            <span className="text-[18px] sm:text-[20px] leading-[26px] sm:leading-[30px] font-normal text-[#000000]">
              How flexible are coworking membership plans?
            </span>
            <svg
              className="w-4 h-4 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 0 0 7"></path>
            </svg>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default AccordionSection;
