import Modal from '@/components/Modal'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'
import React from 'react'
import car_bg from '@/images/jpg/Group_105_1.jpg'


const HeroLocation = () => {
  return (
    
    <div className="flex justify-between items-center relative bottom-2">
      <div className='z-10 absolute xl:pl-[60px] '>
        <h1 className='text-[46px] w-[680px] montserrat font-bold'>Professional comercial and residential cleaning Services</h1>

        <div className="mt-[100px]">
        <Dialog>
            <DialogTrigger className='transition-all duration-200 montserrat text-[8px] lg:text-[12px] xl:text-base mt-[5px] bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl py-[2px] px-[4px] md:py-1 md:px-2 xl:py-1 xl:px-3'>BOOK NOW</DialogTrigger>
            <Modal/>
          </Dialog>
          <p className='w-[230px] montserrat mt-[20px]'>Leave a request on the site and get a 20 % discount on the first cleaning</p>
        </div>
      </div>

      <div className="">
        <Image src={car_bg} alt="bg-car"  className='w-screen h-[120vh] z-0 ' />
      </div>

    </div>
  )
}

export default HeroLocation