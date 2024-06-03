"use client";
import React from "react";
import Slider from "react-slick";

function OurPartners() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return( 
    <>
    <div className="container mx-auto lg:px-8">
      <div>
        <h2 className="text-[40px] text-[#000000] leading-[60px] font-normal text-start">Our Partners</h2>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="!inline-flex items-center justify-center min-h-[100px]">
            <img src="image/cooasis.svg" alt="" />
          </div>
          <div className="!inline-flex items-center justify-center min-h-[100px]">
          <img src="image/google.svg" alt="" />
          </div>
          <div className="!inline-flex items-center justify-center min-h-[100px]">
          <img src="image/miro.svg" alt="" />
          </div>
          <div className="!inline-flex items-center justify-center min-h-[100px]">
          <img src="image/microsoftazure.svg" alt="" />
          </div>
          <div className="!inline-flex items-center justify-center min-h-[100px]">
            <img src="image/cooasis.svg" alt="" />
          </div>
          <div className="!inline-flex items-center justify-center min-h-[100px]">
          <img src="image/google.svg" alt="" />
          </div>
          <div className="!inline-flex items-center justify-center min-h-[100px]">
          <img src="image/miro.svg" alt="" />
          </div>
          <div className="!inline-flex items-center justify-center min-h-[100px]">
          <img src="image/microsoftazure.svg" alt="" />
          </div>
        </Slider>
      </div>
    </div>
    </>
   );
}

export default OurPartners;