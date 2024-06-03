"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const partnerLogos = [
  { src: "/image/cooasis.svg", alt: "COOASIS" },
  { src: "/image/google.svg", alt: "Google" },
  { src: "/image/miro.svg", alt: "Miro" },
  { src: "/image/microsoftazure.svg", alt: "Microsoft Azure" },
];

const OurPartners = () => (
  <div className="container mx-auto lg:px-8 py-12">
    <h2 className="text-2xl lg:text-3xl font-semibold text-[#000000] mb-6">
      Our Partners
    </h2>
    <Slider {...sliderSettings}>
      {partnerLogos.map((logo, index) => (
        <div key={index} className="p-4">
          <div className="border flex items-center justify-center min-h-[100px] p-4">
            <img src={logo.src} alt={logo.alt} className="h-16" />
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default OurPartners;
