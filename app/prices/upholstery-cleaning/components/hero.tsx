import Modal from '@/components/Modal'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'
import upholstery_bg from '@/images/jpg/upholstery-hero.jpg'
import Image from 'next/image'

const HeroUpholstery = () => {
  return (
    <div>
        <div className=' carpet-bg  relative'>
      <div className="container z-10">
        <div className=" absolute top-32 sm:top-36 xl:top-60 pl-[15px] md:pl-[30px] xl:pl-[40px]">
          <h2 className='w-full max-w-[680px] text-black montserrat font-bold text-[18px]  sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px]'>Set a
            <span className='bg-gradient-to-tr from-red-500 to-purple-500  text-transparent bg-clip-text md:text-blue-500'> higher</span> Standard for your Living.</h2>
          <h4 className='text-[14px] sm:text-[18px] md:text-[24px] xl:text-[28px] font-semibold montserrat w-full max-w-[180px] sm:max-w-[380px] mt-5 md:mt-16 text-blue-500'>Hygiene is a priority</h4>

          <div className="">
          <Dialog>
              <DialogTrigger className='  text-[10px] sm:text-[12px] md:text-[16px] rounded-full  px-4 py-1 md:py-2 md:px-12 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none mt-auto'>BOOK NOW</DialogTrigger>
              <Modal />
            </Dialog>
        </div>
        </div>
      </div>
      <div className="">
        <Image src={upholstery_bg} alt='carpet-bg' className='z-0 w-screen object-cover bg-no-repeat h-[55vh] md:h-screen ' />
      </div>
    </div>
    </div>
  )
}

export default HeroUpholstery