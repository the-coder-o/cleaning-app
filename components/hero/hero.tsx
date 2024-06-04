import React from "react";

import Link from "next/link";

const Hero = () => {
  return (
    <div className=" bg flex flex-col items-center justify-start py-[80px]  text-center md:justify-center md:pt-0">
      <h2 className="asap pt-0 text-[20px] font-bold drop-shadow-2xl sm:text-3xl md:pt-[80px] md:text-4xl xl:text-5xl">
        WELCOME TO <span className="text-red-500 drop-shadow-2xl">MASTER CLEANING</span> PAGE
      </h2>
      <h3 className=" montserrat mt-8 flex flex-col pb-4 text-[16px] font-semibold leading-6 drop-shadow-2xl sm:text-[24px] md:mt-12 md:pb-24 md:text-[30px] md:leading-10 xl:text-[34px]">
        We make every effort to provide you with the <span className="montserrat text-[16px]  drop-shadow-2xl sm:text-2xl xl:text-3xl">BEST CLEANING SERVICE</span>
      </h3>
      <div>
        <div className="ml-auto mr-auto items-center gap-6 pt-2 md:grid-cols-2 md:gap-12 md:pt-6 lg:grid-cols-3">
          <Link href={"locations"} className=" montserrat w-full rounded-xl bg-white px-16 py-2 text-[18px] font-semibold shadow-2xl outline-none transition-all delay-75 duration-150 hover:bg-lime-400 hover:text-white hover:outline-none focus:border-none sm:text-base md:text-lg lg:text-xl xl:text-3xl  ">
            Washington
          </Link>
        </div>
        <h5 className="asap mt-8 text-[18px] font-semibold sm:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[34px]">or</h5>
        <div className="flex flex-col items-center  justify-evenly gap-3 pt-6 md:flex-row">
          <Link href={"/commercial-services"} className="text-md montserrat w-full rounded-xl bg-white px-2 py-[12px] font-semibold shadow-2xl outline-none transition-all delay-75 duration-150  hover:bg-red-500 hover:text-white  hover:outline-none focus:border-none md:w-[300px]  ">
            Commercial Janitorial Services
          </Link>
          <Link href={"/careers"} className="montserrat w-full rounded-xl bg-white px-[20px] py-2 text-[18px] font-semibold shadow-2xl outline-none transition-all delay-75 duration-150 hover:bg-red-500 hover:text-white hover:outline-none focus:border-none sm:w-[300px] sm:text-base md:text-lg lg:text-xl xl:text-2xl  ">
            Careers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
