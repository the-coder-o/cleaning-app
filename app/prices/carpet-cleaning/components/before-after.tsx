import { Button } from '@/components/ui/button'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import Image from 'next/image'
import React from 'react'
import beforeAfter from '@/images/jpg/cleaning-before-after.jpg';
import beforeAfter2 from '@/images/jpg/cleaning-before-after2.jpg';

const BeforeAfter = () => {
  return (
    <div className='flex items-center justify-around flex-wrap px-3 mt-6 space-y-4 md:mt-12'>
      <Image src={beforeAfter} alt='before-after' className='w-[310px] sm:w-[350px] lg:w-[400px] xl:w-[436px] h-[330px] sm:h-[360px] lg:h-[400px] xl:h-[439px]'/>
      <Image src={beforeAfter2} alt='before-after' className='w-[323px] sm:w-[370px] lg:w-[420px] xl:w-[445px] h-[320px] sm:h-[350px] lg:h-[390px] xl:h-[420px]'/>
    </div>
  )
}

export default BeforeAfter