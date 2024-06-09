'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../../images/jpg/master-cleaning.jpg';
import certificate1 from '../../images/png/warantee.png';
import certificate2 from "../../images/png/family-owned.png";
import Link from 'next/link';
import Modal from '../Modal';
import { Dialog } from '../ui/dialog';
import { DialogTrigger } from '@radix-ui/react-dialog';







const Header = () => {

  const [navbar, setNavbar] = useState('py-4')
  useEffect(() => {
    const scrollHandler = () => {
      const changeNav = window.pageYOffset > 100 ? 'py-4' : 'py-2';
      setNavbar(changeNav)
    };
    window.addEventListener('scroll', scrollHandler);

    return window.removeEventListener('scroll', scrollHandler)
  }, [])

  return (
    <div className='fixed w-full py-3 backdrop-blur-xl bg-white/70 z-20 px-[8px]  md:px-[20px] flex items-center justify-between '>
      <Link href={'/'} className='flex items-center gap-1 md:gap-2'>
        <Image alt='logo' className='xl:w-[120px] xl:h-[105px] lg:w-[105px] lg:h-[90px] md:w-[90px] md:h-[75px] w-[35px] h-[30px]' width={120} height={105} src={logo} />
        <div className='w-[1px] h-[30px] lg:h-[95px] border-s-2 text-transparent mr-0 lg:mr-2'></div>
        <span className='montserrat text-[8px] sm:text-xs md:text-base lg:text-lg xl:text-xl'>CLEANING <br />ZONE</span>
      </Link>
      <div className='flex flex-col  md:flex md:flex-row items-center gap[3px] md:gap-4'>
        <Image className='hidden lg:block lg:w-[70px] lg:h-[67.5px]' width={70} height={67.5} src={certificate1} alt='cer1' />
        <Image className='hidden lg:block  lg:w-[50px] lg:h-[48.5px] ' width={50} height={48.5} src={certificate2} alt='cer2' />
      </div>

      <div className='flex items-start gap-[2px] lg:gap-[0px] lg:items-center'>
       
        <div className=' flex items-center flex-col'>
          <a href='tel:(877) 340 - 1327' className='font-semibold montserrat leading-[9px]  text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl'>(877) 340 - 1327</a>

          <Dialog>
              <DialogTrigger className='mt-1 md:mt-3 flex text-[6px] sm:text-[10px] items-start rounded-full  px-4 py-1 md:py-2 md:px-5 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>BOOK NOW</DialogTrigger>
              <Modal />
            </Dialog>

        </div>
      </div>
      <div className='flex items-start lg:items-center gap-[2px] lg:gap-4'>
        <div className='flex items-center flex-col'>
          <p className='font-semibold montserrat leading-[9px]  text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl'>Open 7 days a week</p>
          <p className='montserrat text-[10px] md:text-sm lg:text-base xl:text-lg font-medium'>8 AM - 8PM</p>
        </div>
      </div>
    </div>
  )
};

export default Header;