import Image from "next/image";

function Cards ({data}) {
  return ( 
    <>
    <div className="flex flex-col md:flex-row p-3">
          <div className="flex items-center w-full md:max-w-[415px] h-[202px] bg-[#FF5D2224] border-[1px] boredr-[solid] border-[#0000001A] p-9">
            <div className="image pr-6">
            <img src={data?.image} alt="" />
            </div>
            <div className="ml-3">
              <h1 className="font-bold text-lg md:text-2xl mb-[-10px]">{data?.title}</h1>
              <p className="text-[15px] leading-[22.5px] font-normal md:text-xs text-[#0000008A] mt-3 md:mt-6 max-w-[279px]">{data?.description}</p>
            </div>
          </div>
          </div>
    </>
   );
}

export default Cards;