import React from 'react';
import Image from 'next/image';

const EventHostSteps = () => {
  const steps = [
    {
      id: 1,
      title: 'Reach Out',
      description: 'Get in touch with us with your event needs and our team will help you plan it.',
    },
    {
      id: 2,
      title: 'Team Preps',
      description: 'In a nutshell, we handle initial stages like floor plans, vendors, and AV equipment.',
    },
    {
      id: 3,
      title: 'You Host',
      description: 'Focus on your event while we take care of the rest.',
    },
  ];

  return (
    <div className='mt-[80px] bg-white'>
      <h2 className="text-center text-4xl font-bold mb-6">How to host an event with us</h2>
      <p className="text-center text-lg mb-10">
        You don’t need to be a member to host an event with us, <br /> just follow these simple steps.
      </p>
      <div className="flex justify-center mt-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-[#FF5D220D] cursor-pointer p-6 text-center  border transform transition-transform duration-300 ease-in-out hover:scale-105"
              style={{ width: '280px', height: '340px' }}
            >
              <div className="flex flex-row justify-between items-center mb-4">
                <div className="w-24 h-24 flex items-center justify-center bg-pink-100 mb-4 border transform transition-transform duration-300 ease-in-out hover:rotate-12">
                  <Image src="/image/Vector (1).png" alt="Icon" width={32} height={32} />
                </div>
                <div className="text-8xl text-[#FF5D2224]">{step.id}</div>
              </div>
              <div className="font-semibold text-xl mb-2 mt-6 text-start">{step.title}</div>
              <p className="text-lg text-gray-700 mt-4 text-start">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventHostSteps;
