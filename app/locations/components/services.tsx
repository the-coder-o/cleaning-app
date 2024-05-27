import Image from 'next/image'
import React from 'react'
import card1 from '@/images/png/image_12.png'
import card2 from '@/images/png/photo507781168128286.png'
import card3 from '@/images/png/image_13.png'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


const Services = () => {
  return (
    <div>
      <div className="">
        <h2 className='text-[46px] montserrat font-bold pl-12'>Our Services</h2>
      </div>
      <div className="flex w-full mt-12 justify-around">
        <Link href={'/prices/carpet-cleaning'}>
          <div className="w-[345px] flex-wrap rem  min-h-[500px] rounded-xl  flex  items-center flex-col">
            <Image className='object-cover rounded-b-none' src={card1} alt='card-img' />
            <h4 className='text-[26px] montserrat font-semibold text-center mt-2 w-[120px] leading-7'>Carpet Cleaning</h4>
            <div className="w-full h-[2px] border-lime-300 my-4 border-t-4"></div>
            <p className='text-[14px] montserrat text-center font-medium leading-5'>The process of removing foreign matter from carpeting will extend the useful life of your carpet. Due to modern cleaning methods such service can be performed as many times as needed.</p>

            <Button className='mt-auto mb-4 w-[225px] inline-block justify-center text-center  transition-all duration-200 montserrat text-[8px] lg:text-[12px] xl:text-base  bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl py-[2px] px-[4px] md:py-1 md:px-2 xl:py-2 xl:px-3'>Price</Button>
          </div>
        </Link>

        <Link href={'/prices/upholstery-cleaning'}>

          <div className="w-[345px] flex-wrap rem min-h-[500px] rounded-xl  flex items-center flex-col">
            <Image className='object-cover' src={card2} alt='card-img' />
            <h4 className='text-[26px] montserrat font-semibold text-center mt-2 w-[147px] leading-7'>Upholstery Cleaning</h4>
            <div className="w-full h-[2px] border-lime-300 my-4 border-t-4"></div>

            <p className='text-[14px] montserrat text-center font-medium leading-5'>There are many different fabrics and fibers used today. It is very important to apply the proper method of cleaning to the fabric to prevent its damage</p>

            <Button className='mt-auto mb-4 w-[225px] inline-block justify-center text-center  transition-all duration-200 montserrat text-[8px] lg:text-[12px] xl:text-base  bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl py-[2px] px-[4px] md:py-1 md:px-2 xl:py-2 xl:px-3'>Price</Button>
          </div>

        </Link>

        <Link href={'/prices/air-duct'}>
          <div className="w-[345px] flex-wrap rem min-h-[500px] rounded-xl  flex  items-center flex-col">
            <Image src={card3} alt='card-img' className='object-cover' />
            <h4 className='text-[26px] montserrat font-semibold text-center mt-2 w-[147px] leading-7'>Air Duct & Dryer Vent</h4>

            <div className="w-full h-[2px] border-lime-300 my-4 border-t-4"></div>

            <p className='text-[14px] montserrat text-center font-medium leading-5'>In order to get rid of smell (dust, mold, bacteria) and expend system life, air duct cleaning is recommended every 4-5 years for average homes.</p>

            <Button className='mt-auto mb-4 w-[225px] inline-block justify-center text-center  transition-all duration-200 montserrat text-[8px] lg:text-[12px] xl:text-base  bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl py-[2px] px-[4px] md:py-1 md:px-2 xl:py-2 xl:px-3'>Price</Button>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Services