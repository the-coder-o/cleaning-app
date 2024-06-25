import Image from 'next/image'
import React from 'react'
import img1 from '@/images/jpg/upholstery-before-after.jpg'
import img2 from '@/images/jpg/upholstery-before-after2.jpg'
import img3 from '@/images/jpg/upholstery-before-after3.jpg'
import img4 from '@/images/jpg/upholstery-before-after4.jpg'

const BeforeAfter = () => {
  return (
    <div className='grid grid-cols-1 place-items-center gap-3 lg:grid-cols-2 px-2  mt-6 sm:mt-12'>
      <Image src={img1} alt='before-after' className='w-[350px] h-[190px] md:w-[450px] md:h-[290px] shadow-2xl'/>
      <Image src={img2} alt='before-after' className='w-[350px] h-[190px] md:w-[450px] md:h-[290px] shadow-2xl'/>
      <Image src={img3} alt='before-after' className='w-[350px] h-[190px] md:w-[450px] md:h-[290px] shadow-2xl'/>
      <Image src={img4} alt='before-after' className='w-[350px] h-[190px] md:w-[450px] md:h-[290px] shadow-2xl'/>
    </div>
  )
}

export default BeforeAfter