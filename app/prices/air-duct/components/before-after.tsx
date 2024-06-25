import Image from 'next/image'
import React from 'react'
import img1 from '@/images/jpg/air-duct.jpg'
import img2 from '@/images/jpg/dryer-vent.jpg'

const BeforeAfter = () => {
  return (
    <div className='flex flex-wrap items-center justify-center gap-2 mt-6 px-2 sm:mt-12'>
        <Image src={img1} alt='before-after' className='w-[320px] md:w-[540px] h-[250px] md:h-[350px]' />
        <Image src={img2} alt='before-after' className='w-[335px] md:w-[555px] h-[250px] md:h-[350px]' />
    </div>
  )
}

export default BeforeAfter