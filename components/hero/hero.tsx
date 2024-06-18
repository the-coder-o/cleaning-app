import React from "react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import Modal from "../Modal";
import { Badge } from "../ui/badge";

const Hero = () => {
  return (
    <div className=' py-[80px] bg flex flex-col   md:pt-0 justify-center'>
      <div className='z-10 flex justify-center text-center flex-col sm:text-start sm:items-start items-center  absolute pl-[10px] top-40 sm:top-36 xl:top-40 md:pl-[30px] xl:pl-[40px]'>
        <h1 className="text-[18px] text-center drop-shadow-2xl bg-gradient-to-tr from-blue-500 to-pink-500 text-transparent bg-clip-text sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px]flex-wrap montserrat font-bold">CLEANING-ZONE</h1>
        <h1 className='text-[18px] drop-shadow-2xl sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px]text-black flex flex-wrap w-full max-w-[680px] montserrat font-bold'>Professional commercial and residential cleaning Services</h1>
        <div className="flex mt-3 lg:mt-12 flex-col justify-center sm:items-start items-center text-center sm:text-start">
          <Dialog>
            <DialogTrigger className=' text-[10px] sm:text-[12px] md:text-[16px] rounded-full  px-4 py-2 md:px-12 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none mt-auto'>BOOK NOW</DialogTrigger>
            <Modal />
          </Dialog>
        </div>
        <div className="flex flex-wrap gap-2 mt-6 md:mt-12">
          <Badge className="drop-shadow-2xl shadow-blue-500 text-blue-900 text-[14px]" variant={'outline'}>Locally Owned and Operated</Badge>
          <Badge className="drop-shadow-2xl shadow-blue-500 text-blue-900 text-[14px]" variant={'outline'}>Truck-mounted state-of-the-art cleaning equipment</Badge>
          <Badge className="drop-shadow-2xl shadow-blue-500 text-blue-900 text-[14px]" variant={'outline'}>Fully licensed and insured</Badge>
          <Badge className="drop-shadow-2xl shadow-blue-500 text-blue-900 text-[14px]" variant={'outline'}>Non-toxic  products , safe for children & pets</Badge>
          <Badge className="drop-shadow-2xl shadow-blue-500 text-blue-900 text-[14px]" variant={'outline'}>Over 23 years of experience</Badge>
          <Badge className="drop-shadow-2xl shadow-blue-500 text-blue-900 text-[14px]" variant={'outline'}>Professional technicians</Badge>
          <Badge className="drop-shadow-2xl shadow-blue-500 text-blue-900 text-[14px]" variant={'outline'}>Open 7 days a week</Badge>
          <Badge className="drop-shadow-2xl shadow-blue-500 text-blue-900 text-[14px]" variant={'outline'}>Satisfaction guaranteed</Badge>
        </div>
      </div>
    </div>
  );
};
export default Hero;
