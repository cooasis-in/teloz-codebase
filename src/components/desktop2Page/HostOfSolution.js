import Image from "next/image";

function HostOfSolution() {
  return (
    <>
      <section className="container mx-auto py-16 mt-20 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col items-start space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[96px] text-[#000000] font-normal lg:leading-[97.92px] max-w-[541.94px] mb-8 mt-0 lg:mt-4">
                Explore our host of solutions
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-[20px] text-[#00000078] leading-6 sm:leading-7 md:leading-8 lg:leading-[30px] font-normal max-w-[541.94px]">
                Whether you&apos;re an established enterprise or a start-up, we&apos;ve got a host of workspace solutions from office spaces to coworking spaces, to suit your business goals.
              </p>
            </div>
            <div className="mt-8 md:mt-0 flex justify-center relative">
              <Image
                src="/image/hostofsolution.JPG"
                alt="Host of solutions"
                width={540} // specify your image width
                height={540} // specify your image height
                layout="intrinsic" // adjust layout as needed (e.g., responsive, fixed, intrinsic)
                className="rounded-lg" // optional: add any additional styling classes
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HostOfSolution;
