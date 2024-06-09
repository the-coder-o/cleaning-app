"use client";

import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import Modal from "@/components/Modal";
import Image from "next/image";
import bg_sm from "@/images/jpg/bg-sm.jpg";




const Page = () => {
  return (
    <div className="relative bottom-2">
      <div className="absolute top-40 z-10 flex flex-col items-center justify-center pl-[10px] text-center  sm:top-36 sm:items-start sm:justify-between sm:text-start md:pl-[30px] xl:top-40 xl:pl-[40px]">
        <h1 className="montserrat flex w-full max-w-[680px] flex-wrap text-[18px] font-bold text-white drop-shadow-2xl sm:text-[24px] sm:text-black md:text-[36px] lg:text-[40px] xl:text-[46px]">Commercial Cleaning/Janitorial And Disinfecting Services</h1>
        <div className="flex flex-col items-center justify-center text-center sm:items-start sm:text-start">
        <Dialog>
            <DialogTrigger className=' text-[10px] sm:text-[12px] md:text-[16px] rounded-full  px-4 py-2 md:px-12 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none mt-auto'>BOOK NOW</DialogTrigger>
            <Modal/>
          </Dialog>
          <p className="montserrat mt-[10px] w-[230px] text-[12px] text-white sm:text-black md:text-[16px] xl:mt-[20px]">Leave a request on the site and get a 20 % discount on the first cleaning</p>
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
        <div className="grid  place-items-center px-3 grid-cols-1  md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-10">
          <div className="relative flex flex-col mt-6 text-gray-700 bg-white rem  shadow-gray-600 bg-clip-border rounded-xl w-full max-w-96">
            <div
              className="relative  mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img src={"https://optim.tildacdn.one/tild6337-6331-4863-b331-646431653232/-/cover/690x402/left/top/-/format/webp/photo507781168128286.png"} alt="card-img" className="h-full  w-full lg:object-cover xl:w-[345px]" />
            </div>
            <div className="p-6">
              <h5 className="block mb-2  font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Healthcare Environmental Services
              </h5>
            </div>
            <div className="p-6 pt-0">
              <div className="flex justify-center text-center items-center">
                <Dialog>
                  <DialogTrigger className='block rounded-full w-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>BOOK NOW</DialogTrigger>
                  <Modal />
                </Dialog>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col mt-6 text-gray-700 bg-white rem  shadow-gray-600 bg-clip-border rounded-xl w-full max-w-96">
            <div
              className="relative  mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img src={"https://optim.tildacdn.one/tild6234-3730-4036-b762-353930653538/-/cover/690x402/center/top/-/format/webp/photo507781168128286.png"} alt="card-img" className="h-full  w-full lg:object-cover xl:w-[345px]" />
            </div>
            <div className="p-6">
              <h5 className="block mb-2  font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Disinfecting
                Services
              </h5>
            </div>
            <div className="p-6 pt-0">
              <div className="flex justify-center text-center items-center">
                <Dialog>
                  <DialogTrigger className='block rounded-full w-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>BOOK NOW</DialogTrigger>
                  <Modal />
                </Dialog>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col mt-6 text-gray-700 bg-white rem  shadow-gray-600 bg-clip-border rounded-xl w-full max-w-96">
            <div
              className="relative  mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img src={"https://optim.tildacdn.one/tild6239-6330-4639-b734-313362336164/-/cover/690x402/center/top/-/format/webp/photo507781168128286.png"} alt="card-img" className="h-full  w-full lg:object-cover xl:w-[345px]" />
            </div>
            <div className="p-6">
              <h5 className="block mb-2  font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Manufacturing and
                Facility Cleaning
              </h5>
            </div>
            <div className="p-6 pt-0">
              <div className="flex justify-center text-center items-center">
                <Dialog>
                  <DialogTrigger className='block rounded-full w-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>BOOK NOW</DialogTrigger>
                  <Modal />
                </Dialog>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col mt-6 text-gray-700 bg-white rem  shadow-gray-600 bg-clip-border rounded-xl w-full max-w-96">
            <div
              className="relative  mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img src={"https://optim.tildacdn.one/tild3764-3136-4666-a635-306463353039/-/cover/690x402/center/top/-/format/webp/photo507781168128286.png"} alt="card-img" className="h-full  w-full lg:object-cover xl:w-[345px]" />
            </div>
            <div className="p-6">
              <h5 className="block mb-2  font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Office and Building
                Cleaning
              </h5>
            </div>
            <div className="p-6 pt-0">
              <div className="flex justify-center text-center items-center">
                <Dialog>
                  <DialogTrigger className='block rounded-full w-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>BOOK NOW</DialogTrigger>
                  <Modal />
                </Dialog>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col mt-6 text-gray-700 bg-white rem  shadow-gray-600 bg-clip-border rounded-xl w-full max-w-96">
            <div
              className="relative  mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img src={"https://static.tildacdn.com/tild6135-3736-4633-a335-663566326266/photo507781168128286.png"} alt="card-img" className="h-full  w-full lg:object-cover xl:w-[345px]" />
            </div>
            <div className="p-6">
              <h5 className="block mb-2  font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Retail Store
                Cleaning
              </h5>
            </div>
            <div className="p-6 pt-0">
              <div className="flex justify-center text-center items-center">
                <Dialog>
                  <DialogTrigger className='block rounded-full w-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>BOOK NOW</DialogTrigger>
                  <Modal />
                </Dialog>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col mt-6 text-gray-700 bg-white rem  shadow-gray-600 bg-clip-border rounded-xl w-full max-w-96">
            <div
              className="relative  mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img src={"https://optim.tildacdn.one/tild6562-6639-4333-b236-316465626131/-/cover/690x402/center/top/-/format/webp/photo507781168128286.png"} alt="card-img" className="h-full  w-full lg:object-cover xl:w-[345px]" />
            </div>
            <div className="p-6">
              <h5 className="block mb-2  font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Restaurant
                Cleaning
              </h5>
            </div>
            <div className="p-6 pt-0">
              <div className="flex justify-center text-center items-center">
                <Dialog>
                  <DialogTrigger className='block rounded-full w-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>BOOK NOW</DialogTrigger>
                  <Modal />
                </Dialog>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col mt-6 text-gray-700 bg-white rem  shadow-gray-600 bg-clip-border rounded-xl w-full max-w-96">
            <div
              className="relative  mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src={"https://optim.tildacdn.one/tild6565-6661-4639-a666-333337653530/-/cover/690x402/center/top/-/format/webp/photo507781168128286.png"}
                alt="card-image" />
            </div>
            <div className="p-6">
              <h5 className="block mb-2  font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                Hotel and Resort
                Housekeeping
              </h5>
            </div>
            <div className="p-6 pt-0">
              <div className="flex justify-center text-center items-center">
                <Dialog>
                  <DialogTrigger className='block rounded-full w-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>BOOK NOW</DialogTrigger>
                  <Modal />
                </Dialog>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col mt-6 text-gray-700 bg-white rem  shadow-gray-600 bg-clip-border rounded-xl w-full max-w-96">
            <div
              className="relative  mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
              <img
                src={"https://optim.tildacdn.one/tild6565-6661-4639-a666-333337653530/-/cover/690x402/center/top/-/format/webp/photo507781168128286.png"}
                alt="card-image" />
            </div>
            <div className="p-6">
              <h5 className="block mb-2  font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                School and University
                Cleaning
              </h5>
            </div>
            <div className="p-6 pt-0">
              <div className="flex justify-center text-center items-center">
                <Dialog>
                  <DialogTrigger className='block rounded-full w-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>BOOK NOW</DialogTrigger>
                  <Modal />
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
