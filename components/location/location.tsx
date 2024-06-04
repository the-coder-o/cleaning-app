import Image from "next/image";
import React from "react";
import car_img from "../../images/jpg/car-img.jpg";

const Locations = () => {
  return (
    <div className=" container space-y-24">
      <div className="relative mt-28 flex items-center justify-evenly px-[10px] sm:p-0">
        <div className="rem absolute z-40 mx-[20px] flex h-[250px] w-[280px] flex-col items-center justify-center  bg-[#f5f5f5]/80 px-[20px] text-center shadow-2xl sm:relative sm:h-[250px] sm:w-[320px] md:h-[350px] md:w-[390px] lg:h-[390px] lg:w-[500px] xl:h-[430px] xl:w-[540px]">
          <h4 className="montserrat text-base font-bold sm:text-lg md:pb-[7px] md:text-xl lg:text-3xl xl:text-5xl">Washington</h4>
          <center>
            <div className="border-s-3 mt-1 h-[5px] w-[200px] bg-lime-400 sm:mt-3 sm:w-[220px] md:w-[250px] lg:w-[290px] xl:w-[323px]"></div>
          </center>
          <p className="montserrat py-[10px] text-xs font-medium md:text-sm lg:py-[30px]  lg:text-base xl:text-xl">We make every effort to provide the most hassle-free cleaning service, at the most competitive pricing, using state of the art truck-mounted carpet and upholstery cleaning equipment along with professionals organic cleaning supplies.</p>

          <div className="text-center">
            <button className="montserrat w-[150px]  border-2 border-black py-0 text-xs font-semibold outline-none transition-all duration-150 hover:border-transparent hover:bg-lime-400 hover:text-white hover:outline-none focus:border-none sm:w-[200px] sm:text-sm md:w-[250px] md:py-1 md:text-xl lg:w-[290px] lg:py-3 xl:w-[363px] xl:text-2xl ">GO TO WEBSITE</button>
          </div>
        </div>
        <div>
          <Image src={car_img} alt="location-img" className="z-0 h-[340px]  w-full max-w-[570px] sm:h-[250px] sm:w-[300px] md:h-[350px] md:w-[400px] lg:z-10 lg:h-[390px] lg:w-[460px] xl:h-[430px] xl:w-[500px]" width={540} height={470} />
        </div>
      </div>
    </div>
  );
};

export default Locations;
