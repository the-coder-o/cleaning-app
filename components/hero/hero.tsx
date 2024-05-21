import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <div className=' py-[80px] bg flex flex-col text-center items-center  md:pt-0 justify-start md:justify-center'>
      <h2 className='pt-0 md:pt-[80px] text-[20px] sm:text-3xl md:text-4xl xl:text-5xl font-bold asap drop-shadow-2xl'>
      WELCOME TO <span className='text-red-500 drop-shadow-2xl'>MASTER CLEANING</span> PAGE
      </h2>
      <h3 className=' mt-8 md:mt-12 flex flex-col leading-6 md:leading-10 montserrat font-semibold text-[16px] sm:text-[24px] md:text-[30px] xl:text-[34px] pb-4 md:pb-24 drop-shadow-2xl'>We make every effort to provide you with the <span className='text-[16px] sm:text-2xl  xl:text-3xl montserrat drop-shadow-2xl'>BEST CLEANING SERVICE</span></h3>

{/* location */}
      <div>
        <h4 className=' text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[34px] asap font-semibold'>Choose your location</h4>
        {/* buttons */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-12 pt-2 md:pt-6'>
        <button className=' shadow-2xl duration-150 transition-all delay-75 outline-none focus:border-none hover:text-white hover:bg-lime-400 hover:outline-none text-[18px] sm:text-base md:text-lg lg:text-xl xl:text-3xl font-semibold bg-white rounded-xl w-full py-2 px-16 montserrat  '>Washington</button>
        <button className='shadow-2xl duration-150 transition-all delay-75 outline-none focus:border-none hover:text-white hover:bg-lime-400 hover:outline-none text-[18px] sm:text-base md:text-lg lg:text-xl xl:text-3xl font-semibold bg-white rounded-xl w-full py-2 px-16 montserrat  '>Washington</button>
        <button className='shadow-2xl duration-150 transition-all delay-75 outline-none focus:border-none hover:text-white hover:bg-lime-400 hover:outline-none text-[18px] sm:text-base md:text-lg lg:text-xl xl:text-3xl font-semibold bg-white rounded-xl w-full py-2 px-16 montserrat  '>Washington</button>
        </div>

        <h5 className='mt-8 text-[18px] sm:text-[20px] md:text-[24px] lg:text-[30px] xl:text-[34px] asap font-semibold'>
          or
        </h5>

        <div className='flex flex-col md:flex-row  items-center justify-evenly gap-3 pt-6'>
        <Link href={'/commercial-services'} className='shadow-2xl duration-150 transition-all delay-75 hover:text-white hover:bg-red-500 hover:outline-none text-md font-semibold outline-none focus:border-none bg-white rounded-xl  w-full md:w-[300px]  py-[12px] px-2 montserrat  '>Commercial Janitorial Services</Link>
        <Link href={'/careers'} className='shadow-2xl duration-150 transition-all delay-75 hover:text-white hover:bg-red-500 hover:outline-none outline-none focus:border-none text-[18px] sm:text-base md:text-lg lg:text-xl xl:text-2xl font-semibold bg-white rounded-xl w-full sm:w-[300px] py-2 px-[20px] montserrat  '>Careers</Link>
        
        </div>


      </div>

      
    </div>
  )
}

export default Hero