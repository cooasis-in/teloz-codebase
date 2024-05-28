import Button from "./Button";

function Startup() {
  return (
    <div className="bg-[#FF5D22] relative py-2">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute left-2 top-5">
          <img src="image/left.png" alt="Decorative left image" className="w-8 sm:w-12 md:w-16" />
        </div>
        <div className="content">
          <h2 className="text-[32px] sm:text-[48px] md:text-[64px] lg:text-[96px] font-normal leading-tight text-center pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-4 sm:pb-6 md:pb-8 lg:pb-10 text-[#FFFCEE]">
            Are you a startup?
          </h2>
          <p className="font-light text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[27px] md:leading-[31px] text-center mx-auto pb-8 sm:pb-10 md:pb-12 lg:pb-16 text-[#FFFCEE] max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[761px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="text-center pb-6 sm:pb-8 md:pb-10 lg:pb-16">
          <Button 
            size="w-[140px] h-[45px] sm:w-[160px] sm:h-[50px] md:w-[180px] md:h-[55px] lg:w-[186px] lg:h-[59px]" 
            color="bg-black" 
            border="border" 
            hover="none" 
            borcolor="border-black"
          >
            Learn More
          </Button>
        </div>
        <div className="absolute right-2 top-5">
          <img src="image/right.png" alt="Decorative right image" className="w-8 sm:w-12 md:w-16" />
        </div>
      </div>
    </div>
  );
}

export default Startup;
