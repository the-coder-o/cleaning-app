import Image from 'next/image'
import React from 'react'
import card1 from '@/images/png/image_12.png'
import card2 from '@/images/png/photo507781168128286.png'
import card3 from '@/images/png/image_13.png'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


const Services = () => {
  return (
    <div className='px-3'>
      <div className="">
        <h2 className=' text-[36px] sm:text-[46px] montserrat font-bold text-center sm:text-start pl-0 md:pl-12'>Our Services</h2>
      </div>
      <div className="flex flex-col text-center items-center gap-4 xl:flex-row mt-12 justify-around">
        <Link href={'/prices/carpet-cleaning'}>
          <div className="flex flex-col sm:flex-row xl:flex-col rem w-full xl:w-[345px] min-h-[320px] xl:min-h-[500px] rounded-2xl">

            <div className="">
              <Image className='w-full  xl:w-[345px] h-full xl:object-cover' src={card1} alt='card-img' />
            </div>

            <div className="flex flex-1 flex-col items-center text-center justify-center space-y-4">
              <h4 className='text-[22px] xl:text-[26px] montserrat font-semibold text-center mt-2 w-full xl:w-[120px] leading-7'>Carpet Cleaning</h4>

              

              <p className=' text-[14px] montserrat text-center font-medium leading-5 px-1'>The prcess of removing foreign matter from carpeting will extend the useful life of your carpet. Due to modern cleaning methods such service can be performed as many times as needed.</p>

              <div className="flex items-center text-center justify-center mt-2 xl:mt-auto w-full">
                <Button className='mt-auto mb-4 w-[320px] xl:w-[225px] flex items-center justify-center  text-center transition-all duration-200 montserrat text-[8px] text-lg  bg-cyan-400 hover:bg-cyan-500 outline-none focus:border-none text-white font-semibold rounded-xl py-2 px-[4px] md:py-3 md:px-2 xl:py-2 xl:px-3'>Price</Button>
              </div>
            </div>


          </div>
        </Link>

        <Link href={'/prices/upholstery-cleaning'}>

          <div className="flex flex-col sm:flex-row xl:flex-col rem xl:w-[345px] min-h-[320px] xl:min-h-[500px] rounded-2xl">
            <div className="">
              <Image className='w-full   xl:w-[345px] h-full xl:object-cover' src={card2} alt='card-img' />
            </div>
            <div className="flex flex-1 flex-col items-center text-center justify-center space-y-4">
              <h4 className='text-[22px] xl: montserrat font-semibold text-center mt-2 w-[147px] leading-7'>Upholstery Cleaning</h4>
              

              <p className='text-[14px] montserrat text-center font-medium leading-5 px-1'>There are many different fabrics and fibers used today. It is very important to apply the proper method of cl

                eaning to the fabric to prevent its damage</p>

              <div className="flex items-center text-center justify-center mt-2 xl:mt-auto w-full">
                <Button className='mt-auto mb-2 md:mb-0 w-[320px] xl:w-[225px] flex items-center justify-center  text-center transition-all duration-200 montserrat text-[8px] text-lg  bg-cyan-400 hover:bg-cyan-500 outline-none focus:border-none text-white font-semibold rounded-xl py-2 px-[4px] md:py-3 md:px-2 xl:py-2 xl:px-3'>Price</Button>
              </div>
            </div>
          </div>

        </Link>

        <Link href={'/prices/air-duct'}>
          <div className="flex flex-col sm:flex-row xl:flex-col rem w-full xl:w-[345px] min-h-[320px] xl:min-h-[500px] rounded-2xl">
            <div className="">
              <Image src={card3} alt='card-img' className='w-full  xl:w-[345px] h-full lg:object-cover' />
            </div>
            <div className="flex flex-1 flex-col items-center text-center justify-center space-y-4">
              <h4 className='text-[22px] xl:text-[26px] montserrat font-semibold text-center mt-2 w-[147px] leading-7'>Air Duct & Dryer Vent</h4>

              

              <p className='text-[14px] montserrat text-center font-medium leading-5 px-1'>In order to get rid of smell (dust, mold, bacteria) and expend system life, air duct cleaning is recommended every 4-5 years for average homes.</p>

              <div className="flex items-center text-center justify-center mt-2 xl:mt-auto w-full">
                <Button className='mt-auto mb-2 md:mb-0  w-[320px] xl:w-[225px] flex items-center justify-center  text-center transition-all duration-200 montserrat text-[8px] text-lg  bg-cyan-400 hover:bg-cyan-500 outline-none focus:border-none text-white font-semibold rounded-xl py-2 px-[4px] md:py-3 md:px-2 xl:py-2 xl:px-3'>Price</Button>
              </div>
            </div>
          </div>
        </Link>

      </div>
    </div>
  )
}

export default Services