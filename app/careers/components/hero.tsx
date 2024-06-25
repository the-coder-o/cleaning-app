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
                    <h2 className='w-full text-black/70 max-w-[680px]  montserrat font-bold text-[18px]  sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px]'>Looking to join our team?
                        <span className='text-blue-500'> Now we are hiring</span></h2>
                    <h4 className='text-[14px] text-black/70 sm:text-[18px] md:text-[22px] xl:text-[24px]  montserrat w-full max-w-[1000px] mt-5 md:mt-16 font-medium'>We need skilled team members to help deliver the quality service to our clients and customers. Simply type in all your information and hit submit. Below is a link to our online job application.</h4>

                    <div className="">
                        <Dialog>
                            <DialogTrigger className=' text-[10px] sm:text-[12px] md:text-[16px] rounded-full  px-4 py-2 md:px-12 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none mt-4'>BOOK NOW</DialogTrigger>
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