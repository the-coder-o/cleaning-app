"use client";

import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Modal from "@/components/Modal";
import Image from "next/image";
import car_bg from "@/images/jpg/Group_105_1.jpg";
import bg_sm from "@/images/jpg/bg-sm.jpg";
import Link from "next/link";
import card1 from "@/images/png/image_12.png";
import { Button } from "@/components/ui/button";
import card2 from "@/images/png/photo507781168128286.png";
import card3 from "@/images/png/image_13.png";

const Page = () => {
  return (
    <div className="relative bottom-2">
      <div className="absolute top-40 z-10 flex flex-col items-center justify-center pl-[10px] text-center  sm:top-36 sm:items-start sm:justify-between sm:text-start md:pl-[30px] xl:top-40 xl:pl-[40px]">
        <h1 className="montserrat flex w-full max-w-[780px] flex-wrap text-[18px] font-bold text-white drop-shadow-2xl sm:text-[24px] sm:text-black md:text-[36px] lg:text-[40px] xl:text-[46px]">Commercial Cleaning/Janitorial And Disinfecting Services</h1>
        <div className="flex flex-col items-center justify-center text-center sm:items-start sm:text-start">
          <p className="montserrat mb-[100px] mt-[10px] w-[650px] text-[12px] font-semibold text-white sm:text-black md:text-[28px] xl:mt-[20px]">We Customize a Cleaning Program to Meet all of your Individualized Expectations</p>
          <Dialog>
            <DialogTrigger className=" montserrat mt-[5px] rounded-xl bg-lime-400 px-8 py-3 text-[10px] font-semibold text-white outline-none transition-all duration-200 hover:bg-lime-500 focus:border-none  md:px-7 md:py-3 md:text-[12px] xl:px-12 xl:py-4 xl:text-base">Get your free estimate</DialogTrigger>
            <Modal />
          </Dialog>
        </div>
      </div>
      <div className="">
        <img src={"https://static.tildacdn.com/tild6633-3966-4135-a465-323961653130/Group_99.jpg"} alt="bg-car" className="z-0 hidden sm:block" />
        <Image src={bg_sm} alt="bg-sm" className="z-0 block h-[70vh] sm:hidden" />
      </div>
      <div className="mt-12 px-3">
        <div className="">
          <h2 className="montserrat pl-0 text-center text-[36px] font-bold sm:text-start sm:text-[46px]">Our Services</h2>
        </div>
        <div className="grid grid-cols-4 gap-5">
          <Link href={"/prices/air-duct"}>
            <div className="rem flex min-h-[320px] w-full flex-col rounded-2xl sm:flex-row xl:min-h-[500px] xl:w-[345px] xl:flex-col">
              <div className="">
                <img src={"https://optim.tildacdn.one/tild6565-3261-4839-b264-336231343662/-/cover/690x402/center/top/-/format/webp/photo507781168128286.png"} alt="card-img" className="h-full  w-full lg:object-cover xl:w-[345px]" />
              </div>
              <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-center">
                <h4 className="montserrat mt-2 text-center text-[22px] font-semibold leading-7 text-red-500 xl:text-[22px]">Healthcare Environmental Services</h4>
                <div className="my-4 block h-[2px] w-full border-t-4 border-lime-300 sm:hidden xl:block"></div>
                <p className="montserrat px-1 text-center text-[14px] font-medium leading-5">Earn higher Joint Commission scores with better infection control procedures</p>
                <div className="mt-2 flex w-full items-center justify-center text-center xl:mt-auto">
                  <Button className="montserrat mb-2 mt-auto  flex w-[320px] items-center justify-center rounded-xl  bg-lime-400 px-[4px] py-2 text-center text-[8px] text-lg  font-semibold text-white outline-none transition-all duration-200 hover:bg-lime-500 focus:border-none md:mb-0 md:px-2 md:py-3 xl:w-[280px] xl:px-3 xl:py-2">Get your free estimate</Button>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/prices/air-duct"}>
            <div className="rem flex min-h-[320px] w-full flex-col rounded-2xl sm:flex-row xl:min-h-[500px] xl:w-[345px] xl:flex-col">
              <div className="">
                <img src={"https://optim.tildacdn.one/tild6565-6661-4639-a666-333337653530/-/cover/690x402/center/top/-/format/webp/photo507781168128286.png"} alt="card-img" className="h-full  w-full lg:object-cover xl:w-[345px]" />
              </div>
              <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-center">
                <h4 className="montserrat mt-2 text-center text-[22px] font-semibold leading-7 text-red-500 xl:text-[22px]">Disinfecting Services</h4>
                <div className="my-4 block h-[2px] w-full border-t-4 border-lime-300 sm:hidden xl:block"></div>
                <p className="montserrat px-1 text-center text-[14px] font-medium leading-5">Disinfecting works by using EPA registered chemicals to wet surfaces and allowing contact/dwell time to kill the virus in compliance with CDC guidelines</p>
                <div className="mt-2 flex w-full items-center justify-center text-center xl:mt-auto">
                  <Button className="montserrat mb-2 mt-auto  flex w-[320px] items-center justify-center rounded-xl  bg-lime-400 px-[4px] py-2 text-center text-[8px] text-lg  font-semibold text-white outline-none transition-all duration-200 hover:bg-lime-500 focus:border-none md:mb-0 md:px-2 md:py-3 xl:w-[280px] xl:px-3 xl:py-2">Get your free estimate</Button>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/prices/air-duct"}>
            <div className="rem flex min-h-[320px] w-full flex-col rounded-2xl sm:flex-row xl:min-h-[500px] xl:w-[345px] xl:flex-col">
              <div className="">
                <img src={"https://optim.tildacdn.one/tild6337-6331-4863-b331-646431653232/-/cover/690x402/left/top/-/format/webp/photo507781168128286.png"} alt="card-img" className="h-full  w-full lg:object-cover xl:w-[345px]" />
              </div>
              <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-center">
                <h4 className="montserrat mt-2 text-center text-[22px] font-semibold leading-7 text-red-500 xl:text-[22px]">Manufacturing and Facility Cleaning</h4>
                <div className="my-4 block h-[2px] w-full border-t-4 border-lime-300 sm:hidden xl:block"></div>
                <p className="montserrat px-1 text-center text-[14px] font-medium leading-5">Stay safe on job with clean work areas, offices and restrooms</p>
                <div className="mt-2 flex w-full items-center justify-center text-center xl:mt-auto">
                  <Button className="montserrat mb-2 mt-auto  flex w-[320px] items-center justify-center rounded-xl  bg-lime-400 px-[4px] py-2 text-center text-[8px] text-lg  font-semibold text-white outline-none transition-all duration-200 hover:bg-lime-500 focus:border-none md:mb-0 md:px-2 md:py-3 xl:w-[280px] xl:px-3 xl:py-2">Get your free estimate</Button>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/prices/air-duct"}>
            <div className="rem flex min-h-[320px] w-full flex-col rounded-2xl sm:flex-row xl:min-h-[500px] xl:w-[345px] xl:flex-col">
              <div className="">
                <img src={"https://optim.tildacdn.one/tild6234-3730-4036-b762-353930653538/-/cover/690x402/center/top/-/format/webp/photo507781168128286.png"} alt="card-img" className="h-full  w-full lg:object-cover xl:w-[345px]" />
              </div>
              <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-center">
                <h4 className="montserrat mt-2 text-center text-[22px] font-semibold leading-7 text-red-500 xl:text-[22px]">Office and Building Cleaning</h4>
                <div className="my-4 block h-[2px] w-full border-t-4 border-lime-300 sm:hidden xl:block"></div>
                <p className="montserrat px-1 text-center text-[14px] font-medium leading-5">Improve morale and decrease sick days with a clean, healthy office environment</p>
                <div className="mt-2 flex w-full items-center justify-center text-center xl:mt-auto">
                  <Button className="montserrat mb-2 mt-auto  flex w-[320px] items-center justify-center rounded-xl  bg-lime-400 px-[4px] py-2 text-center text-[8px] text-lg  font-semibold text-white outline-none transition-all duration-200 hover:bg-lime-500 focus:border-none md:mb-0 md:px-2 md:py-3 xl:w-[280px] xl:px-3 xl:py-2">Get your free estimate</Button>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/prices/air-duct"}>
            <div className="rem flex min-h-[320px] w-full flex-col rounded-2xl sm:flex-row xl:min-h-[500px] xl:w-[345px] xl:flex-col">
              <div className="">
                <img src={"https://optim.tildacdn.one/tild6239-6330-4639-b734-313362336164/-/cover/690x402/center/top/-/format/webp/photo507781168128286.png"} alt="card-img" className="h-full  w-full lg:object-cover xl:w-[345px]" />
                Get your free estimate
              </div>
              <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-center">
                <h4 className="montserrat mt-2 text-center text-[22px] font-semibold leading-7 text-red-500 xl:text-[22px]">Retail Store Cleaning</h4>
                <div className="my-4 block h-[2px] w-full border-t-4 border-lime-300 sm:hidden xl:block"></div>
                <p className="montserrat px-1 text-center text-[14px] font-medium leading-5">Close the sale and bring customers back with a clean shopping experience</p>
                <div className="mt-2 flex w-full items-center justify-center text-center xl:mt-auto">
                  <Button className="montserrat mb-2 mt-auto  flex w-[320px] items-center justify-center rounded-xl  bg-lime-400 px-[4px] py-2 text-center text-[8px] text-lg  font-semibold text-white outline-none transition-all duration-200 hover:bg-lime-500 focus:border-none md:mb-0 md:px-2 md:py-3 xl:w-[280px] xl:px-3 xl:py-2">Get your free estimate</Button>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/prices/air-duct"}>
            <div className="rem flex min-h-[320px] w-full flex-col rounded-2xl sm:flex-row xl:min-h-[500px] xl:w-[345px] xl:flex-col">
              <div className="">
                <img src={"https://optim.tildacdn.one/tild3764-3136-4666-a635-306463353039/-/cover/690x402/center/top/-/format/webp/photo507781168128286.png"} alt="card-img" className="h-full  w-full lg:object-cover xl:w-[345px]" />
              </div>
              <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-center">
                <h4 className="montserrat mt-2 text-center text-[22px] font-semibold leading-7 text-red-500 xl:text-[22px]">Restaurant Cleaning</h4>
                <div className="my-4 block h-[2px] w-full border-t-4 border-lime-300 sm:hidden xl:block"></div>
                <p className="montserrat px-1 text-center text-[14px] font-medium leading-5">Give your chef a sanitary kitchen and your customers a spotless dinning area</p>
                <div className="mt-2 flex w-full items-center justify-center text-center xl:mt-auto">
                  <Button className="montserrat mb-2 mt-auto  flex w-[320px] items-center justify-center rounded-xl  bg-lime-400 px-[4px] py-2 text-center text-[8px] text-lg  font-semibold text-white outline-none transition-all duration-200 hover:bg-lime-500 focus:border-none md:mb-0 md:px-2 md:py-3 xl:w-[280px] xl:px-3 xl:py-2">Get your free estimate</Button>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/prices/air-duct"}>
            <div className="rem flex min-h-[320px] w-full flex-col rounded-2xl sm:flex-row xl:min-h-[500px] xl:w-[345px] xl:flex-col">
              <div className="">
                <img src={"https://static.tildacdn.com/tild6135-3736-4633-a335-663566326266/photo507781168128286.png"} alt="card-img" className="h-full  w-full lg:object-cover xl:w-[345px]" />
              </div>
              <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-center">
                <h4 className="montserrat mt-2 text-center text-[22px] font-semibold leading-7 text-red-500 xl:text-[22px]">School and University Cleaning</h4>
                <div className="my-4 block h-[2px] w-full border-t-4 border-lime-300 sm:hidden xl:block"></div>
                <p className="montserrat px-1 text-center text-[14px] font-medium leading-5">Keep students and faculty staff in the classroom with A+ janitorial services</p>
                <div className="mt-2 flex w-full items-center justify-center text-center xl:mt-auto">
                  <Button className="montserrat mb-2 mt-auto  flex w-[320px] items-center justify-center rounded-xl  bg-lime-400 px-[4px] py-2 text-center text-[8px] text-lg  font-semibold text-white outline-none transition-all duration-200 hover:bg-lime-500 focus:border-none md:mb-0 md:px-2 md:py-3 xl:w-[280px] xl:px-3 xl:py-2">Get your free estimate</Button>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/prices/air-duct"}>
            <div className="rem flex min-h-[320px] w-full flex-col rounded-2xl sm:flex-row xl:min-h-[500px] xl:w-[345px] xl:flex-col">
              <div className="">
                <img src={"https://optim.tildacdn.one/tild6562-6639-4333-b236-316465626131/-/cover/690x402/center/top/-/format/webp/photo507781168128286.png"} alt="card-img" className="h-full  w-full lg:object-cover xl:w-[345px]" />
              </div>
              <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-center">
                <h4 className="montserrat mt-2 text-center text-[22px] font-semibold leading-7 text-red-500 xl:text-[22px]">Hotel and Resort Housekeeping</h4>
                <div className="my-4 block h-[2px] w-full border-t-4 border-lime-300 sm:hidden xl:block"></div>
                <p className="montserrat px-1 text-center text-[14px] font-medium leading-5">Receive 5-star comments and keep guests coming back with our service experts</p>
                <div className="mt-2 flex w-full items-center justify-center text-center xl:mt-auto">
                  <Button className="montserrat mb-2 mt-auto  flex w-[320px] items-center justify-center rounded-xl  bg-lime-400 px-[4px] py-2 text-center text-[8px] text-lg  font-semibold text-white outline-none transition-all duration-200 hover:bg-lime-500 focus:border-none md:mb-0 md:px-2 md:py-3 xl:w-[280px] xl:px-3 xl:py-2">Get your free estimate</Button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
