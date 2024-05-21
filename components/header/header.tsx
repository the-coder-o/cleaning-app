'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '../../images/jpg/master-cleaning.jpg';
import certificate1 from '../../images/png/warantee.png';
import certificate2 from "../../images/png/family-owned.png";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import PhoneInput from 'react-phone-number-input/input'


const Header = () => {
  let btn = false

  const [value, setValue] = useState()
  return (
    <div className='relative max-w-[1450px] w-full m-auto py-[20px]  px-[8px] md:px-[20px] flex items-center justify-between'>
      {/* logo */}
      <div className='flex items-center gap-1 md:gap-2'>
        <Image alt='logo' className='xl:w-[120px] xl:h-[105px] lg:w-[105px] lg:h-[90px] md:w-[90px] md:h-[75px] w-[35px] h-[30px]' width={120} height={105} src={logo} />
        <div className='w-[1px] h-[30px] lg:h-[95px] border-s-2 text-black mr-0 lg:mr-2'></div>
        <span className='montserrat text-[8px] sm:text-xs md:text-base lg:text-lg xl:text-xl'>CLEANING <br /> SERVICES</span>
      </div>



      {/* little-certificates */}

      <div className='flex flex-col  md:flex md:flex-row items-center gap[3px] md:gap-4'>
        <Image className='hidden lg:block lg:w-[70px] lg:h-[67.5px]' width={70} height={67.5} src={certificate1} alt='cer1' />
        <Image className='hidden lg:block  lg:w-[50px] lg:h-[48.5px] ' width={50} height={48.5} src={certificate2} alt='cer2' />
      </div>

      {/* contact */}
      <div className='flex items-start gap-[2px] lg:gap-[0px] lg:items-center'>
        <Image src={'https://static.tildacdn.one/tild3934-6630-4266-a261-366566323863/TelephoneFill.svg'} width={50} height={49} className='xl:w-[50px] xl:h-[49px] lg:w-[37px] lg:h-[37px] md:w-[29px] md:h-[29px] sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]' alt='tel' />

        <div className=' flex items-center flex-col'>
          <a href='tel:(877) 340 - 1327' className='font-semibold montserrat leading-[9px]  text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl'>(877) 340 - 1327</a>

          {/* <button className='montserrat text-[8px] lg:text-[12px] xl:text-base mt-[5px] bg-red-500 hover:bg-red-600 outline-none focus:border-none text-white font-semibold rounded-xl py-[2px] px-[4px] md:py-1 md:px-2 xl:py-1 xl:px-3'>Contact me</button> */}
          <Dialog>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle className='text-white'>Are you absolutely sure?</DialogTitle>
      <DialogDescription className='text-white'>
      <Input type='text'/>
      {/* <PhoneInput
      country="US"
      value={value}
      onChange={setValue} /> */}
      <Input type='email' />
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>


        </div>
      </div>

      {/* working hours */}
      <div className='flex items-start lg:items-center gap-[2px] lg:gap-4'>
        <Image width={48} className='xl:w-[50px] xl:h-[49px] lg:w-[37px] lg:h-[37px] md:w-[29px] md:h-[29px] sm:w-[20px] sm:h-[20px] w-[15px] h-[15px]' height={48} src='https://static.tildacdn.one/tild6637-6437-4532-b734-653830353039/clock_1.svg' alt='time' />

        <div className='flex items-center flex-col'>
          <p className='font-semibold montserrat leading-[9px]  text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl'>Open 7 days a week</p>
          <p className='montserrat text-[10px] md:text-sm lg:text-base xl:text-lg font-medium'>8 AM - 8PM</p>
        </div>
      </div>

    </div>
  )
};

export default Header;