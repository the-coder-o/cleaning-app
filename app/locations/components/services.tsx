import Image from "next/image";
import React from "react";
import card1 from "@/images/png/image_12.png";
import card2 from "@/images/png/photo507781168128286.png";
import card3 from "@/images/png/image_13.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="px-3">
      <div className="">
        <h2 className=" montserrat pl-0 text-center text-[36px] font-bold sm:text-start sm:text-[46px] md:pl-12">Our Services</h2>
      </div>
      <div className="mt-12 flex flex-col items-center justify-around gap-4 text-center xl:flex-row">
        <Link href={"/prices/carpet-cleaning"}>
          <div className="rem flex min-h-[320px] w-full flex-col rounded-2xl sm:flex-row xl:min-h-[500px] xl:w-[345px] xl:flex-col">
            <div className="">
              <Image className="h-full  w-full xl:w-[345px] xl:object-cover" src={card1} alt="card-img" />
            </div>
            <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-center">
              <h4 className="montserrat mt-2 w-full text-center text-[22px] font-semibold leading-7 xl:w-[120px] xl:text-[26px]">Carpet Cleaning</h4>
              <div className="my-4 block h-[2px] w-full border-t-4 border-lime-300 sm:hidden xl:block"></div>
              <p className=" montserrat px-1 text-center text-[14px] font-medium leading-5">The prcess of removing foreign matter from carpeting will extend the useful life of your carpet. Due to modern cleaning methods such service can be performed as many times as needed.</p>
              <div className="mt-2 flex w-full items-center justify-center text-center xl:mt-auto">
                <Button className="montserrat mb-4 mt-auto flex w-[320px] items-center justify-center  rounded-xl bg-lime-400 px-[4px] py-2 text-center text-[8px]  text-lg font-semibold text-white outline-none transition-all duration-200 hover:bg-lime-500 focus:border-none md:px-2 md:py-3 xl:w-[225px] xl:px-3 xl:py-2">Price</Button>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/prices/upholstery-cleaning"}>
          <div className="rem flex min-h-[320px] flex-col rounded-2xl sm:flex-row xl:min-h-[500px] xl:w-[345px] xl:flex-col">
            <div className="">
              <Image className="h-full   w-full xl:w-[345px] xl:object-cover" src={card2} alt="card-img" />
            </div>
            <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-center">
              <h4 className="xl: montserrat mt-2 w-[147px] text-center text-[22px] font-semibold leading-7">Upholstery Cleaning</h4>
              <div className="my-4 block h-[2px] w-full border-t-4 border-lime-300 sm:hidden xl:block"></div>
              <p className="montserrat px-1 text-center text-[14px] font-medium leading-5">There are many different fabrics and fibers used today. It is very important to apply the proper method of cl eaning to the fabric to prevent its damage</p>
              <div className="mt-2 flex w-full items-center justify-center text-center xl:mt-auto">
                <Button className="montserrat mb-2 mt-auto flex w-[320px] items-center justify-center rounded-xl  bg-lime-400 px-[4px] py-2 text-center text-[8px] text-lg  font-semibold text-white outline-none transition-all duration-200 hover:bg-lime-500 focus:border-none md:mb-0 md:px-2 md:py-3 xl:w-[225px] xl:px-3 xl:py-2">Price</Button>
              </div>
            </div>
          </div>
        </Link>
        <Link href={"/prices/air-duct"}>
          <div className="rem flex min-h-[320px] w-full flex-col rounded-2xl sm:flex-row xl:min-h-[500px] xl:w-[345px] xl:flex-col">
            <div className="">
              <Image src={card3} alt="card-img" className="h-full  w-full lg:object-cover xl:w-[345px]" />
            </div>
            <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-center">
              <h4 className="montserrat mt-2 w-[147px] text-center text-[22px] font-semibold leading-7 xl:text-[26px]">Air Duct & Dryer Vent</h4>
              <div className="my-4 block h-[2px] w-full border-t-4 border-lime-300 sm:hidden xl:block"></div>
              <p className="montserrat px-1 text-center text-[14px] font-medium leading-5">In order to get rid of smell (dust, mold, bacteria) and expend system life, air duct cleaning is recommended every 4-5 years for average homes.</p>
              <div className="mt-2 flex w-full items-center justify-center text-center xl:mt-auto">
                <Button className="montserrat mb-2 mt-auto  flex w-[320px] items-center justify-center rounded-xl  bg-lime-400 px-[4px] py-2 text-center text-[8px] text-lg  font-semibold text-white outline-none transition-all duration-200 hover:bg-lime-500 focus:border-none md:mb-0 md:px-2 md:py-3 xl:w-[225px] xl:px-3 xl:py-2">Price</Button>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Services;
