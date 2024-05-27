import React from "react";
import Image from "next/image";
import Button from "./Button";

const LeadingCo = () => {
  return (
    <section className=" container mx-auto flex items-center justify-center mt-10">
      <div className="text-center">
        <h1 className="font-semibold lg:text-xs md:text-lg leading-[18px]">
          Trusted by Leading Companies
        </h1>
        <div className="mt-6">
          <Image
            src="/image/LeadingCom.png"
            alt="Office Image"
            layout="fixed"
            width={1312}
            height={35}
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default LeadingCo;
