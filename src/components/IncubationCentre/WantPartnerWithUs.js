import React from "react";
import Button from "../reusableComponents/Button";

const WantPartnerWithUs = () => {
  return (
    <div className="container mx-auto flex mt-6 mb-20 px-6 py-12">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold mb-4">Want to be partner with us?</h2>
        <p className="text-sm">
          At Teloz Spaces, we build impactful partnership models with key
          ecosystem players including angel investors, tech enterprises, startup
          communities, and more to advance our mission of accelerating the
          growth of the Indian startup ecosystem. Partner with us as we provide
          the ideal infrastructure to scale brand value and impact.
        </p>

        <div className="mt-14">
          <Button
            size="lg:w-[186px] lg:h-[59px]"
            color=" bg-black"
            border="border"
            hover="none"
            borcolor="border-black"
          >
            Partner With Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WantPartnerWithUs;
