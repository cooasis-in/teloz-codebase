"use client";
import React from "react";
import Button from "../reusableComponents/Button";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HostEventCard = () => {
  const events = [
    {
      id: 1,
      title: "Growth Network",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/image/hostEvents.png",
    },
    {
      id: 2,
      title: "Discussion Forums",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/image/hostEvents (2).png",
    },
    {
      id: 3,
      title: "Startup Tech Credits",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/image/hostEvents (2).png",
    },
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600, // For screens smaller than 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-[100px] px-4 mt-2">
      <div className="flex flex-col md:flex-row justify-between items-center p-4">
        <h3 className="text-[40px] leading-[60px] text-[#000000] md:text-4xl font-normal text-center md:text-left mb-4 md:mb-0">
        What is Teloz Community
        </h3>
      </div>
      <Slider {...settings} className="mt-8">
        {events.map((event) => (
          <div key={event.id} className="p-4">
            <div className="grid lg:grid-cols-1 md:grid-cols-1 cursor-pointer overflow-hidden transform transition-transform duration-300 hover:scale-105">
              <Image
                src={event.image}
                alt={event.title}
                width={400}
                height={250}
                className="w-full  object-cover"
              />
              <div className="py-4">
                <h3 className="text-[30px] font-normal leading-[30.6px] text-[#000000] py-4">{event.title}</h3>
                <p className="text-[20px] font-light text-[#000000] leading-[31px]">{event.content}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HostEventCard;
