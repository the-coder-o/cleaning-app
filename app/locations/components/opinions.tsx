import Image from 'next/image'
import React from 'react'
import opinions from '@/images/jpg/opinions-bg.jpg'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import ReactStars from 'react-stars'

const Opinions = () => {
    return (
        <div className='relative mt-32 flex items-center justify-center bg-black '>
            <div className="absolute p-[10px] xl:p-[20px] z-10  ">
                <h2 className='asap text-[22px] sm:text-[28px] md:text-[36px] xl:text-[46px] font-bold text-white '>What people say about us</h2>
                <div className="flex items-center justify-center text-center">
                    <Carousel className="w-full  max-w-[225px] sm:max-w-sm md:max-w-lg lg:max-w-2xl xl:max-w-5xl" opts={{ loop: true }}>
                        <CarouselContent className='mt-12'>
                            <CarouselItem className='text-white flex flex-wrap items-center w-full justify-center flex-col'>
                                <h3 className='montserrat text-[14px] sm:text-[18px] xl:text-[22px]'>Technician called ahead to say he could come earlier than scheduled, which was great because we had a busy afternoon planned. He was polite, and he worked quickly and efficiently. Would definitely use them again!</h3>
                                <ReactStars count={5} edit={false} color1='#ffd700' size={32} />
                                <h4>Matt</h4>
                            </CarouselItem>
                            <CarouselItem  className='text-white flex flex-wrap items-center w-full jjustify-center flex-col'>
                                <h3 className='montserrat text-[14px] sm:text-[18px] xl:text-[22px]'>My mom was happy with how clean the carpet was and the carpet tech was professional. I would suggest if the owner doesn't have an email to have paper receipt handy. Otherwise they did a great job and was on time. We appreciate the service .</h3>

                            <ReactStars count={4} edit={false} color1='#ffd700' size={32} />
                            <h4>Renne</h4>

                            </CarouselItem>
                            <CarouselItem className='text-white flex flex-wrap items-center w-full justify-center flex-col'>
                                <h3 className='montserrat text-[14px] sm:text-[18px] xl:text-[22px]'>Very polite and efficient technician. Made sure there was no mess and did a thorough job. Would absolutely use again.</h3>

                            <ReactStars count={5} edit={false} color1='#ffd700' size={32} />
                            <h4>Rebecca</h4>

                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious className='text-white ' />
                        <CarouselNext className='text-white' />
                    </Carousel>
                </div>
            </div>
            <Image src={opinions} alt='opinions' className='z-0 object-cover bg-fixed opinions-bg h-screen md:h-[90vh] w-full  opacity-50' />
        </div>
    )
}

export default Opinions