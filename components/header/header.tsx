'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../../images/jpg/master-cleaning.jpg';
import Link from 'next/link';
import Modal from '../Modal';
import { Dialog } from '../ui/dialog';
import { DialogTrigger } from '@radix-ui/react-dialog';
import { SheetDemo } from '../Menu';








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
    <div className='fixed px-3 w-full py-3 backdrop-blur-xl bg-white/70 z-20  md:px-[20px] flex items-center justify-between '>
      <Link href={'/'} className='flex items-center gap-1 md:gap-2'>
        <Image alt='logo' className='xl:w-[60px] xl:h-[50px] lg:w-[105px] lg:h-[90px] md:w-[90px] md:h-[75px] w-[35px] h-[30px]' width={60} height={50} src={logo} />
        <div className='w-[1px] h-[30px] lg:h-[95px] border-s-2 text-transparent mr-0 lg:mr-2'></div>
        <span className='montserrat text-[8px] sm:text-xs md:text-base lg:text-lg xl:text-xl'>CLEANING-ZONE</span>
      </Link>

      
      <SheetDemo />
      {/* 
          <a href='tel:(877) 340 - 1327' className='font-semibold montserrat leading-[9px]  text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl'>(877) 340 - 1327</a> */}


    </div>
  )
};

export default Header;