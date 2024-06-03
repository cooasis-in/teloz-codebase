import Cards from "./Cards";

function TelozCommunity() {
  const cardArr = [
    {
      title: "Teloz Community",
      description: "A collaborative platform for our community and members",
      image: "image/cardLogo.png",
    },
    {
      title: "Investor Connect",
      description: "A collaborative platform for our community and members",
      image: "image/cardLogo.png",
    },
    {
      title: "Brand Strategy",
      description: "A collaborative platform for our community and members",
      image: "image/cardLogo.png",
    },
  ];

  const cardArr2 = [
    {
      title: "Teloz Community",
      description: "A collaborative platform for our community and members",
      image: "image/cardLogo.png",
    },
    {
      title: "Investor Connect",
      description: "A collaborative platform for our community and members",
      image: "image/cardLogo.png",
    },
    {
      title: "Brand Strategy",
      description: "A collaborative platform for our community and members",
      image: "image/cardLogo.png",
    },
  ];
  const cardArr3 = [
    {
      title: "Teloz Community",
      description: "A collaborative platform for our community and members",
      image: "image/cardLogo.png",
    },
    {
      title: "Investor Connect",
      description: "A collaborative platform for our community and members",
      image: "image/cardLogo.png",
    },
    {
      title: "Brand Strategy",
      description: "A collaborative platform for our community and members",
      image: "image/cardLogo.png",
    },
  ];
  
  return (
    <>
      <div className="container mx-auto mt-10 mb-20">
        <div className="px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-[40px] text-[#000000] leading-tight sm:leading-[50px] lg:leading-[60px] font-normal text-start">
            Our Purpose
          </h2>
          <p className="max-w-[812px] text-base sm:text-lg lg:text-[20px] leading-relaxed sm:leading-7 lg:leading-[30px] font-normal text-[#00000078] mt-4 sm:mt-5 lg:mt-7 mb-6 sm:mb-7 lg:mb-9">
            We Work Labs aims to streamline the early-stage for both founders
            and investors. Through our varied offerings, we systematically
            eliminate barriers to growth, so that founders can focus on building
            sustainable, valuable companies of the future.
          </p>
        </div>
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cardArr?.map((item, index) => (
              <Cards data={item} key={index} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 sm:mt-6 lg:mt-8">
            {cardArr2?.map((item, index) => (
              <Cards data={item} key={index} />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 sm:mt-6 lg:mt-8">
            {cardArr3?.map((item, index) => (
              <Cards data={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default TelozCommunity;
