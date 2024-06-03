"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurPartners() {
  var settings = {
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
  return (
    <div className="container">
      <div className="mb-6">
        <h2 className="text-2xl lg:text-3xl text-center lg:text-start md:text-center font-semibold text-[#000000]">Our Partners</h2>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="p-4">
            <div className="border flex items-center justify-center min-h-[100px] p-4">
              <img src="/image/cooasis.svg" alt="COOASIS" className="h-16" />
            </div>
          </div>
          <div className="p-4">
            <div className="border flex items-center justify-center min-h-[100px] p-4">
              <img src="/image/google.svg" alt="Google" className="h-16" />
            </div>
          </div>
          <div className="p-4">
            <div className="border flex items-center justify-center min-h-[100px] p-4">
              <img src="/image/miro.svg" alt="Miro" className="h-16" />
            </div>
          </div>
          <div className="p-4">
            <div className="border flex items-center justify-center min-h-[100px] p-4">
              <img src="/image/microsoftazure.svg" alt="Microsoft Azure" className="h-16" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default OurPartners;
