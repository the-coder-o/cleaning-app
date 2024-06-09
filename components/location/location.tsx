import Image from "next/image";
import React from "react";
import car_img from "../../images/jpg/car-img.jpg";

const Locations = () => {
    return (
        <div className=' space-y-24 container'>
            <div className='mt-28 flex items-center justify-evenly relative  px-[10px] sm:p-0'>
                <div className='z-10 rem absolute sm:relative shadow-2xl bg-[#f5f5f5]/80 mx-[20px] w-[280px] h-[250px] sm:w-[320px]  sm:h-[250px] md:w-[390px] md:h-[350px] lg:w-[500px] lg:h-[390px] xl:w-[540px] xl:h-[430px] px-[20px] flex flex-col text-center justify-center items-center'>
                    <h4 className='font-bold text-base sm:text-lg md:text-xl lg:text-3xl xl:text-5xl md:pb-[7px] montserrat'>Washington</h4>
                    <p className='text-xs md:text-sm lg:text-base xl:text-xl font-medium py-[10px]  lg:py-[30px] montserrat'>
                        We make every effort to provide the most hassle-free cleaning service, at the most competitive pricing, using state of the art truck-mounted carpet and upholstery cleaning equipment along with professionals organic cleaning supplies.
                    </p>

                    <div className='text-center block w-full'>
                        <button className=' rounded-full w-full px-4 py-2 font-semibold  text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>GO TO WEBSITE</button>
                    </div>
                </div>
                <div>
                    <Image src={car_img} alt='location-img' className='z-0 lg:z-10  w-full max-w-[570px] h-[340px] sm:w-[300px] sm:h-[250px] md:w-[400px] md:h-[350px] lg:w-[460px] lg:h-[390px] xl:w-[500px] xl:h-[430px]' width={540} height={470} />
                </div>
            </div>
        </div>
    )
}

export default Locations;
