import Modal from '@/components/Modal'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import upholstery_bg from '@/images/jpg/bg-upholstery.jpg'
import Image from 'next/image'

const HeroUpholstery = () => {
  return (
    <div>
        <div className=' carpet-bg  relative'>
      <div className="container z-10">
        <div className=" absolute top-32 sm:top-36 xl:top-60 pl-[15px] md:pl-[30px] xl:pl-[40px]">
          <h2 className='w-full max-w-[680px]  montserrat font-bold text-[18px]  sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px]'>Set a
            <span className='text-red-600'> higher</span> Standard for your Living.</h2>
          <h4 className='text-[14px] sm:text-[18px] md:text-[24px] xl:text-[28px] font-semibold montserrat w-full max-w-[180px] sm:max-w-[380px] mt-5 md:mt-16 text-red-600'>Hygiene is a priority</h4>

          <div className="">
        <Dialog>
            <DialogTrigger className=' transition-all duration-200 montserrat text-[10px] md:text-[12px] xl:text-base mt-[5px] bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl  py-3 px-8 md:py-3 md:px-7 xl:py-4 xl:px-12'>BOOK NOW</DialogTrigger>
            <Modal/>
          </Dialog>
          <p className='text-black font-medium md:font-normal w-[230px] montserrat text-[12px] md:text-[16px] mt-[10px] xl:mt-[20px] drop-shadow-2xl rem2'>Leave a request on the site and get a 5 % discount on the first cleaning</p>
        </div>
        </div>
      </div>
      <div className="">
        <Image src={upholstery_bg} alt='carpet-bg' className='z-0 w-screen object-cover bg-no-repeat h-[60vh] md:h-screen ' />
      </div>
    </div>
    </div>
  )
}

export default HeroUpholstery