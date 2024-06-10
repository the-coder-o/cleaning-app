import React from "react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import Modal from "../Modal";

const Hero = () => {
  return (
    <div className=' py-[80px] bg flex flex-col   md:pt-0 justify-center'>
        <div className='z-10 flex justify-center text-center flex-col sm:text-start sm:items-start items-center  absolute pl-[10px] top-40 sm:top-36 xl:top-40 md:pl-[30px] xl:pl-[40px]'>
        <h1 className='text-[18px] drop-shadow-2xl sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px]text-black flex flex-wrap w-full max-w-[680px] montserrat font-bold'>Professional comercial and residential cleaning Services</h1>
        <div className="flex mt-3 lg:mt-12 flex-col justify-center sm:items-start items-center text-center sm:text-start">
        <Dialog>
            <DialogTrigger className=' text-[10px] sm:text-[12px] md:text-[16px] rounded-full  px-4 py-2 md:px-12 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none mt-auto'>BOOK NOW</DialogTrigger>
            <Modal/>
          </Dialog>
          <p className='text-black/70 w-[230px] montserrat text-[12px] md:text-[16px] mt-[10px] xl:mt-[20px]'>Leave a request on the site and get a 20 % discount on the first cleaning</p>
        </div>
      </div>
    </div>
  );
};
export default Hero;
