'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import logo from '../../images/png/logo.png'
import Link from 'next/link';
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
        <Image alt='logo' width={120} height={120} src={logo} />
      </Link>
      <SheetDemo />
      {/* 
          <a href='tel:(877) 340 - 1327' className='font-semibold montserrat leading-[9px]  text-[10px] sm:text-sm md:text-base lg:text-lg xl:text-xl'>(877) 340 - 1327</a> */}
    </div>
  )
};

export default Header;