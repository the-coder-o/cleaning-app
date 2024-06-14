import Modal from '@/components/Modal'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'
import React from 'react'
import bg_air_duct from '@/images/jpg/air-duct-hero.jpg'

const HeroAirDuct = () => {
  return (
    <div>
    <div className=' carpet-bg  relative'>
  <div className="container z-10">
    <div className=" absolute top-32 sm:top-36 xl:top-60 pl-[15px] md:pl-[30px] xl:pl-[40px]">
      <h2 className='w-full text-black md:text-black/70 max-w-[680px]  montserrat font-bold text-[18px]  sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px]'>Save on electricity consumption up to <span className='text-blue-500'>21%</span> on cooling system</h2>
     

      <div className="">
      <Dialog>
              <DialogTrigger className='  text-[10px] sm:text-[12px] md:text-[16px] rounded-full  px-4 py-2 md:px-12 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none mt-auto'>BOOK NOW</DialogTrigger>
              <Modal />
            </Dialog>
    </div>
    </div>
  </div>
  <div className="">
    <Image src={bg_air_duct} alt='carpet-bg' className='z-0 w-screen object-cover bg-no-repeat h-[60vh] md:h-[120vh] ' />
  </div>
</div>
</div>
  )
}

export default HeroAirDuct