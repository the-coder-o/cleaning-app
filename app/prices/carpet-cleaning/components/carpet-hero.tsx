import Modal from '@/components/Modal';
import React from 'react'
import carper_bg from '@/images/jpg/carpet-hero.jpg';
import Image from 'next/image';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';

const Hero = () => {
  return (
    <div className=' carpet-bg  relative'>
      <div className="container z-10">
        <div className=" absolute top-44  xl:top-72 pl-[15px] md:pl-[30px] xl:pl-[40px]">
          <h2 className='w-full text-black drop-shadow-2xl  montserrat font-bold text-[18px]  sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px]'>Why is professional carpet cleaning important?
          </h2>
          <p className='montserrat text-black text-sm sm:text-lg xl:text-xl drop-shadow-2xl w-full'>Professional carpet cleaning can help to create a healthy environment by removing allergens, bacteria, and other harmful particles from your carpets.</p>


          <div className="mt-6 md:mt-12">
          <Dialog>
              <DialogTrigger className='  text-[10px] sm:text-[12px] md:text-[16px] rounded-full  px-4 py-2 md:px-12 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none mt-auto'>BOOK NOW</DialogTrigger>
              <Modal />
            </Dialog>

          </div>
        </div>
      </div>
      <div className="">
        <Image src={carper_bg} alt='carpet-bg' className='z-0 w-screen object-cover bg-no-repeat h-[60vh] md:h-[120vh] ' />
      </div>
    </div>
  )
}

export default Hero