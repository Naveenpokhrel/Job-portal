import React from "react";
import HeroImg from "@/public/images/hero.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="pt-[5rem] pb-[3rem] h-[100vh]">
      <div className="w-[100%] h-[60vh] flex flex-col items-center justify-center">
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-[2rem]">
          {/* content */}
          <div>
            <h1 className="text-[28px] sm:text-[35px] lg:text-[45px] xl:text-[60px] text-[#05264e] leading-[3rem] lg:leading-[4rem] font-extrabold">
              The <span className="text-blue-500">Easiest Way</span> <br /> To
              Get Your New Job
            </h1>
            <div className="relative mt-4">
              <input
                type="text"
                placeholder="Search for job"
                className=" relative w-full h-[60px] mt-4  rounded-lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 text:ml-[50px] pl-4"
              />
              <button className="right-0 absolute w-[120px]  h-[60px] mt-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300">
                Search
              </button>
            </div>
          </div>
          {/* image */}
          <div className="hidden lg:block">
            <Image src="/Image/hero.svg" alt="image" width={700} height={400} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
