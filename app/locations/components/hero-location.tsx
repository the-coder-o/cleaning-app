import Modal from "@/components/Modal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";
import car_bg from "@/images/jpg/Group_105_1.jpg";
import bg_sm from "@/images/jpg/bg-sm.jpg";

const HeroLocation = () => {
  return (
    <div className="relative bottom-2">
      <div className="absolute top-40 z-10 flex flex-col items-center justify-center pl-[10px] text-center  sm:top-36 sm:items-start sm:justify-between sm:text-start md:pl-[30px] xl:top-40 xl:pl-[40px]">
        <h1 className="montserrat flex w-full max-w-[680px] flex-wrap text-[18px] font-bold text-white drop-shadow-2xl sm:text-[24px] sm:text-black md:text-[36px] lg:text-[40px] xl:text-[46px]">Professional comercial and residential cleaning Services</h1>

        <div className="flex flex-col items-center justify-center text-center sm:items-start sm:text-start">
          <Dialog>
            <DialogTrigger className=" montserrat mt-[5px] rounded-xl bg-lime-400 px-8 py-3 text-[10px] font-semibold text-white outline-none transition-all duration-200 hover:bg-lime-500 focus:border-none  md:px-7 md:py-3 md:text-[12px] xl:px-12 xl:py-4 xl:text-base">BOOK NOW</DialogTrigger>
            <Modal />
          </Dialog>
          <p className="montserrat mt-[10px] w-[230px] text-[12px] text-white sm:text-black md:text-[16px] xl:mt-[20px]">Leave a request on the site and get a 20 % discount on the first cleaning</p>
        </div>
      </div>

      <div className="">
        <Image src={car_bg} alt="bg-car" className="z-0 hidden sm:block" />
        <Image src={bg_sm} alt="bg-sm" className="z-0 block h-[70vh] sm:hidden" />
      </div>
    </div>
  );
};

export default HeroLocation;
