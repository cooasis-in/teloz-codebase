import Cards from './Cards';

function TelozCommunity() {
  const cardArr = [
    {
      title: "Teloz Community",
      description: "A collaborative platform for our community and members",
      image: "image/cardLogo.png"
    },
    {
      title: "Investor Connect",
      description: "A collaborative platform for our community and members",
      image: "image/cardLogo.png"
    },
    {
      title: "Brand Strategy",
      description: "A collaborative platform for our community and members",
      image: "image/cardLogo.png"
    },
  ]

  const cardArr2 = [
    {
      title: "Teloz Community",
      description: "A collaborative platform for our community and members",
      image: "image/cardLogo.png"
    },
    {
      title: "Investor Connect",
      description: "A collaborative platform for our community and members",
      image: "image/cardLogo.png"
    },
    {
      title: "Brand Strategy",
      description: "A collaborative platform for our community and members",
      image: "image/cardLogo.png"
    },
  ]
  const cardArr3 = [
    {
      title: "Teloz Community",
      description: "A collaborative platform for our community and members",
      image: "image/cardLogo.png"
    },
    {
      title: "Investor Connect",
      description: "A collaborative platform for our community and members",
      image: "image/cardLogo.png"
    },
    {
      title: "Brand Strategy",
      description: "A collaborative platform for our community and members",
      image: "image/cardLogo.png"
    },
  ]
  return (
    <>
      <div className="container mx-auto mt-12 mb-20">
        <div className="px-8">
          <h2 className="text-[40px] text-[#000000] leading-[60px] font-normal text-start">Our Purpose</h2>
          <p className="max-w-[812px] text-[20px] leading-[30px] font-normal text-[#00000078] mt-7 mb-9">WeWork Labs aims to streamline the early-stage for both founders and investors. Through our varied offerings, we systematically eliminate barriers to growth, so that founders can focus on building sustainable, valuable companies of the future.</p>
        </div>
        <div className="px-5">
          <div className="flex justify-center items-center">
            {cardArr?.map((item, index) => (
              <Cards data={item} key={index} />
            ))}
          </div>
          <div className="flex justify-center items-center">
            {cardArr2?.map((item, index) => (
              <Cards data={item} key={index} />
            ))}
          </div>
          <div className="flex justify-center items-center">
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