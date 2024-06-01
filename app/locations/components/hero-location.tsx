import Modal from '@/components/Modal'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'
import React from 'react'
import car_bg from '@/images/jpg/Group_105_1.jpg'
import bg_sm from '@/images/jpg/bg-sm.jpg'


const HeroLocation = () => {
  return (
    
    <div className="relative bottom-2">
      <div className='z-10 flex justify-center sm:justify-between text-center flex-col sm:text-start sm:items-start items-center  absolute pl-[10px] top-40 sm:top-36 xl:top-40 md:pl-[30px] xl:pl-[40px]'>
        <h1 className='text-[18px] drop-shadow-2xl sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px] text-white sm:text-black flex flex-wrap w-full max-w-[680px] montserrat font-bold'>Professional comercial and residential cleaning Services</h1>
 
        <div className="flex flex-col justify-center sm:items-start items-center text-center sm:text-start">
        <Dialog>
            <DialogTrigger className=' transition-all duration-200 montserrat text-[10px] md:text-[12px] xl:text-base mt-[5px] bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl  py-3 px-8 md:py-3 md:px-7 xl:py-4 xl:px-12'>BOOK NOW</DialogTrigger>
            <Modal/>
          </Dialog>
          <p className='text-white sm:text-black w-[230px] montserrat text-[12px] md:text-[16px] mt-[10px] xl:mt-[20px]'>Leave a request on the site and get a 20 % discount on the first cleaning</p>
        </div>
      </div>

      <div className="">
        <Image src={car_bg} alt="bg-car"  className='hidden sm:block z-0' />
        <Image src={bg_sm} alt='bg-sm' className='block sm:hidden z-0 h-[70vh]'/>
      </div>

    </div>
  )
}

export default HeroLocation