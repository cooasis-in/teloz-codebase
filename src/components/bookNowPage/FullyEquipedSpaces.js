import React from 'react';

const FullyEquipedSpaces = () => {
  return (
    <div className="bg-[#FF5D22] container relative my-20 overflow-hidden py-[85px]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="absolute left-0 top-0">
          <img src="image/left.png" alt="Decorative left image" className="h-full p-4" />
        </div>
        <div className="content text-center">
          <h2 className="max-w-[898px] mx-auto text-center text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] font-normal leading-tight pb-4 sm:pb-6 md:pb-8 lg:pb-10 text-[#FFFCEE]">
            Fully-Equipped spaces for your <br /> next big event
          </h2>
          <div className="flex justify-center space-x-8 mt-[30px]">
            <div className="text-center">
              <img className="mx-auto mb-2" src="image/spaces-event.svg" alt="Speaker Systems" />
              <h5 className="text-[16px] text-[#FFFCEE] font-normal">Speaker Systems</h5>
            </div>
            <div className="text-center">
              <img className="mx-auto mb-2" src="image/spaces-event.svg" alt="Camera Equipment" />
              <h5 className="text-[16px] text-[#FFFCEE] font-normal">Camera Equipment</h5>
            </div>
            <div className="text-center">
              <img className="mx-auto mb-2" src="image/spaces-event.svg" alt="High-Res Projector" />
              <h5 className="text-[16px] text-[#FFFCEE] font-normal">High-Res Projector</h5>
            </div>
            <div className="text-center">
              <img className="mx-auto mb-2" src="image/spaces-event.svg" alt="20 people seating" />
              <h5 className="text-[16px] text-[#FFFCEE] font-normal">20 people seating</h5>
            </div>
            <div className="text-center">
              <img className="mx-auto mb-2" src="image/spaces-event.svg" alt="Podcast Mic." />
              <h5 className="text-[16px] text-[#FFFCEE] font-normal">Podcast Mic.</h5>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0">
          <img src="image/right.png" alt="Decorative right image" className="h-full p-4 " />
        </div>
      </div>
    </div>
  );
};

export default FullyEquipedSpaces;
