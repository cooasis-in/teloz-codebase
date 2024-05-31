function Card({data}) {

  return (
    <>
      <div className="px-2">
        <div className="bg-[#FF5D220D] border-[0.5px] border-[solid] border-[#1D1E1C21] p-6">
          <div className="flex justify-center items-center">
            <img src={data?.image} alt="" />
          </div>
          <div className="mt-6">
            <h2 className="text-[25px] text-[#000000] leading-[25.5px] font-normal">{data?.title}</h2>
            <p className="text-[18px] text-[#00000078] leading-[27px] font-normal mt-4">{data?.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;