'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "./card/card";
function CoworkingSpaces() {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
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

  const cardArr = [
    {
      title: "On-demand Day Passes",
      description: "Book day passes at any of our coworking spaces on-the-go and pay per use",
      image: "image/cardimg.svg"
    },
    {
      title: "On-demand Day Passes",
      description: "Book day passes at any of our coworking spaces on-the-go and pay per use",
      image: "image/cardimg.svg"
    },
    {
      title: "On-demand Day Passes",
      description: "Book day passes at any of our coworking spaces on-the-go and pay per use",
      image: "image/cardimg.svg"
    },
    {
      title: "On-demand Day Passes",
      description: "Book day passes at any of our coworking spaces on-the-go and pay per use",
      image: "image/cardimg.svg"
    },
    {
      title: "On-demand Day Passes",
      description: "Book day passes at any of our coworking spaces on-the-go and pay per use",
      image: "image/cardimg.svg"
    },
    {
      title: "On-demand Day Passes",
      description: "Book day passes at any of our coworking spaces on-the-go and pay per use",
      image: "image/cardimg.svg"
    },
  ]

  const cardArr2 = [
    {
      title: "Events & Shoots",
      description: "Book day passes at any of our coworking spaces on-the-go and pay per use",
      image: "image/cardimg.svg"
    },
    {
      title: "Virtual Office",
      description: "Book day passes at any of our coworking spaces on-the-go and pay per use",
      image: "image/cardimg.svg"
    },
    {
      title: "Events & Shoots",
      description: "Book day passes at any of our coworking spaces on-the-go and pay per use",
      image: "image/cardimg.svg"
    },
    {
      title: "Virtual Office",
      description: "Book day passes at any of our coworking spaces on-the-go and pay per use",
      image: "image/cardimg.svg"
    },
    {
      title: "Events & Shoots",
      description: "Book day passes at any of our coworking spaces on-the-go and pay per use",
      image: "image/cardimg.svg"
    },
    {
      title: "Virtual Office",
      description: "Book day passes at any of our coworking spaces on-the-go and pay per use",
      image: "image/cardimg.svg"
    },
  ]
  return (
    <>
      <div className="bg-[#FFFFFF]">
        <section className="border-t-[1px] border-[solid] border-[#0000001A] mb-32">
          <div className="mt-24 container px-4 sm:px-6 lg:px-8 grid grid-cols-5">
            <div className="max-w-[352px] col-span-2">
              <h3 className="text-[40px] leading-[60px] font-normal text-[#000000]">Coworking Spaces</h3>
              <p className="text-[20px] leading-[30px] font-normal text-[#00000078] mt-8">Whether you need a productive workspace for the hour, day, or month, we’ve got a flexible solution for you and your team</p>
            </div>
            <div className="slider-container col-span-3">
              <Slider {...settings}>
                {cardArr?.map((item, index) => (
                  <Card data={item} />
                ))}
              </Slider>
            </div>
          </div>
        </section>
        <div className="container px-8">
          <div className=" border-b-[1px] border-[solid] border-[#D0D0D0]"></div>
        </div>
        <section className="border-b-[1px] border-[solid] border-[#0000001A]">
          <div className="mt-32 mb-32 container  px-4 sm:px-6 lg:px-8 grid grid-cols-5">
            <div className="col-span-2">
              <h3 className="max-w-[376px] text-[40px] leading-[60px] font-normal text-[#000000]">Additional Solutions</h3>
              <p className="max-w-[352px] text-[20px] leading-[30px] font-normal text-[#00000078] mt-8">From giving your business a premium address to a great location for your next event, we go beyond workspaces to meet your business goals</p>
            </div>
            <div className="slider-container col-span-3">
              <Slider {...settings}>
              {cardArr2?.map((item, index) => (
                  <Card data={item} />
                ))}             
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CoworkingSpaces;