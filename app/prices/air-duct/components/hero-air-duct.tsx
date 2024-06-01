import Modal from '@/components/Modal'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'
import React from 'react'
import bg_air_duct from '@/images/jpg/bg-air-duct.jpg'

const HeroAirDuct = () => {
  return (
    <div>
    <div className=' carpet-bg  relative'>
  <div className="container z-10">
    <div className=" absolute top-32 sm:top-36 xl:top-60 pl-[15px] md:pl-[30px] xl:pl-[40px]">
      <h2 className='w-full max-w-[680px]  montserrat font-bold text-[18px]  sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px]'>Save on electricity consumption up to <span className='text-red-600'>21%</span> on cooling system</h2>
     

      <div className="">
    <Dialog>
        <DialogTrigger className=' transition-all duration-200 montserrat text-[10px] md:text-[12px] xl:text-base mt-[5px] bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl  py-3 px-8 md:py-3 md:px-7 xl:py-4 xl:px-12'>BOOK NOW</DialogTrigger>
        <Modal />
      </Dialog>
      <p className='text-black font-medium md:font-normal w-[230px] montserrat text-[12px] md:text-[16px] mt-[10px] xl:mt-[20px] drop-shadow-2xl rem2'>Leave a request on the site and get a 5 % discount on the first cleaning</p>
    </div>
    </div>
  </div>
  <div className="">
    <Image src={bg_air_duct} alt='carpet-bg' className='z-0 w-screen object-cover bg-no-repeat h-[60vh] md:h-screen ' />
  </div>
</div>
</div>
  )
}

export default HeroAirDuct