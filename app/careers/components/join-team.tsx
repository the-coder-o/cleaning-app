import Image from 'next/image'
import React from 'react'
import careers_img from '@/images/png/master-careers.png'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import Modal from '@/components/Modal'

const JoinTeam = () => {
    return (
        <div className='flex items-center text-center md:text-start flex-col-reverse md:flex-row px-6 md:px-12 justify-between'>
            <div className="montserrat space-y-4 xl:space-y-12">
                <h2 className='font-bold text-[18px]  sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px]'>Join our team</h2>
                <p className='font-semibold text-[14px] sm:text-[18px] md:text-[22px] xl:text-[26px]'>You can contact our department at this number.</p>
                <a className='font-bold text-[16px] sm:text-[20px] md:text-[24px] lg:text-[31px]' href="tel:(877) 340-1327">(877) 340-1327</a>
                <p className='font-semibold text-[14px] sm:text-[18px] lg:text-[22px]'>Or we can contact you</p>
                <div className="flex items-center md:items-start justify-center md:justify-start ">
                <Dialog>
                    <DialogTrigger className='  mb-4 w-full max-w-[238px] flex items-center justify-center  text-center transition-all duration-200 montserrat  text-base md:text-lg  bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl py-2 px-[4px] md:py-3 md:px-2 xl:py-2 xl:px-3'>Contact us</DialogTrigger>
                    <Modal />
                </Dialog>
                </div>
            </div>
            <div className="">
                <Image src={careers_img} alt='careers-img' className='w-[320px] h-[250px] sm:w-[360px] sm:h-[330px] md:w-[400px] md:h-[300px] lg:w-[450px] lg:h-[350px] xl:w-[500px] xl:h-[395px]' />
            </div>
        </div>
    )
}

export default JoinTeam