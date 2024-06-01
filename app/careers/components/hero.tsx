import Modal from '@/components/Modal'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'
import React from 'react'
import careers_bg from '@/images/jpg/careers-bg.jpg';

const Hero = () => {
    return (
        <div className='  relative'>
            <div className="container z-10">
                <div className=" absolute top-32 sm:top-36 xl:top-60 pl-[15px] md:pl-[30px] xl:pl-[40px]">
                    <h2 className='w-full max-w-[680px]  montserrat font-bold text-[18px]  sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px]'>Looking to join our team?
                        <span className='text-red-600'> Now we are hiring</span></h2>
                    <h4 className='text-[14px] sm:text-[18px] md:text-[22px] xl:text-[24px] font-semibold montserrat w-full max-w-[1000px] mt-5 md:mt-16'>We need skilled team members to help deliver the quality service to our clients and customers. Simply type in all your information and hit submit. Below is a link to our online job application.</h4>

                    <div className="">
                        <Dialog>
                            <DialogTrigger className=' mt-4 mx-1 sm:mx-3 md:mt-12 mb-4 w-full max-w-[300px] flex items-center justify-center  text-center transition-all duration-200 montserrat  text-base md:text-[24px]  bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl py-2 px-[4px] md:py-3 md:px-2 xl:py-4 xl:px-3'>Get free consultation</DialogTrigger>
                            <Modal />
                        </Dialog>
                        
                    </div>
                </div>
            </div>
            <div className="">
                <Image src={careers_bg} alt='carpet-bg' className='z-0 w-screen object-cover bg-no-repeat h-[60vh] md:h-screen ' />
            </div>
        </div>
    )
}

export default Hero