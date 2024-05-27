import Button from "./Button";

function PodCast() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-16 md:mb-20 lg:mb-28 max-w-[995.35px] mt-10 sm:mt-16 md:mt-20">
      <div>
        <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] leading-tight sm:leading-snug md:leading-normal lg:leading-[40.8px] font-normal text-center max-w-[896px] mx-auto">
          We’re much more than just a co-working space
        </h2>
        <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[36px] font-light text-center mt-6 sm:mt-8 md:mt-10 lg:mt-14 max-w-[761px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-8 sm:mt-12 md:mt-16 lg:mt-20 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
        <img src="image/podcast.png" alt="Podcast" className="w-full sm:w-1/2 md:w-1/4 lg:w-auto" />
        <img src="image/podcast.png" alt="Podcast" className="w-full sm:w-1/2 md:w-1/4 lg:w-auto" />
        <img src="image/podcast.png" alt="Podcast" className="w-full sm:w-1/2 md:w-1/4 lg:w-auto" />
        <img src="image/podcast.png" alt="Podcast" className="w-full sm:w-1/2 md:w-1/4 lg:w-auto" />
      </div>
      <div className="text-center mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <Button size="w-[234px] h-[59px] sm:mt-6">Learn More</Button>
      </div>
    </div>
  );
}

export default PodCast;
