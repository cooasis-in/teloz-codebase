'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#F9F6F1] py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-[#F26622] flex items-center space-x-1">
              <span>Teloz</span>
              <span className="text-black">spaces</span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8">
            <Link href="#" className="text-gray-700 hover:text-[#F26622]">Locations</Link>
            <Link href="#" className="text-gray-700 hover:text-[#F26622]">Workspaces</Link>
            <Link href="#" className="text-gray-700 hover:text-[#F26622]">Incubation Centre</Link>
            <Link href="#" className="text-gray-700 hover:text-[#F26622]">Pricing</Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-gray-700 border border-black px-2 py-1">+91 7738344399</span>
            <button className="bg-[#F26622] text-white px-4 py-2 rounded hover:bg-[#e65b20]">
              Book Now
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="#" className="block text-gray-700 hover:text-[#F26622]">Locations</Link>
            <Link href="#" className="block text-gray-700 hover:text-[#F26622]">Workspaces</Link>
            <Link href="#" className="block text-gray-700 hover:text-[#F26622]">Incubation Centre</Link>
            <Link href="#" className="block text-gray-700 hover:text-[#F26622]">Pricing</Link>
            <span className="block text-gray-700 border border-black px-2 py-1 mt-2">+91 7738344399</span>
            <button className="block bg-[#F26622] text-white px-4 py-2 rounded mt-2 hover:bg-[#e65b20] w-full text-center">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
