import React from 'react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import Modal from '@/components/Modal';
import { Card, CardHeader } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge"


const BeforeAfterAir = () => {
    return (
        <div className='px-4'>
            <div className="text-start ml-0 md:ml-12">
                <h2 className='leading-8 md:leading-[55px]  mt-12 md:mt-24 drop-shadow-2xl text-[22px] sm:text-[28px] md:text-[46px] text-black/70 w-full  max-w-[900px] montserrat font-bold'>7 Surprising Benefits Of Air Duct Cleaning</h2>
                <div className="mt-2 flex flex-wrap gap-3 items-center">
                <Badge variant={'outline'}>Reduce Allergens.</Badge>
                <Badge variant={'outline'}>Improved Indoor Air Quality.</Badge>
                <Badge variant={'outline'}>Increased Energy Efficiency.</Badge>
                <Badge variant={'outline'}>Removal of Mold.</Badge>
                <Badge variant={'outline'}>Clear Out Bad Odors.</Badge>
                <Badge variant={'outline'}>Reduce Infestations.</Badge>
                <Badge variant={'outline'}>Enhanced Overall Health and Well-being.</Badge>
                </div>
            </div>
            <div className="mt-12 md:mt-24">
                <h2 className='pl-3 text-black/70 font-bold montserrat text-[18px] sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[42px]'>4 REASONS TO HAVE YOUR DRYER VENT</h2>
                <div className="flex gap-3 px-2 flex-wrap justify-between mt-5">
                    <Card className='px-6 py-3 w-full'>
                        <CardHeader className='text-black shadow-none'>
                            Recuced fire risk
                        </CardHeader>
                        <Dialog>
                            <DialogTrigger className='mt-8 flex text-[10px] sm:text-[12px] md:text-[16px] items-start rounded-full  px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none '>BOOK NOW</DialogTrigger>
                            <Modal />
                        </Dialog>
                    </Card>
                    <Card className='px-6 py-3 w-full'>
                        <CardHeader className='text-black shadow-none '>
                            Fewer repaires
                        </CardHeader>
                        <Dialog>
                            <DialogTrigger className='mt-8 flex text-[10px] sm:text-[12px] md:text-[16px] items-start rounded-full  px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none '>BOOK NOW</DialogTrigger>
                            <Modal />
                        </Dialog>
                    </Card>
                    <Card className='px-6 py-3 w-full'>
                        <CardHeader className='text-black shadow-none'>
                            Shorter drying times
                        </CardHeader>
                        <Dialog>
                            <DialogTrigger className='mt-8 flex text-[10px] sm:text-[12px] md:text-[16px] items-start rounded-full  px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none '>BOOK NOW</DialogTrigger>
                            <Modal />
                        </Dialog>
                    </Card>
                    <Card className='px-6 py-3 w-full'>
                        <CardHeader className='text-black shadow-none'>
                            Lower energy bills
                        </CardHeader>
                        <Dialog>
                            <DialogTrigger className='mt-8 flex text-[10px] sm:text-[12px] md:text-[16px] items-start rounded-full  px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none '>BOOK NOW</DialogTrigger>
                            <Modal />
                        </Dialog>
                    </Card>
                </div>
            </div>

        </div>
    )
}

export default BeforeAfterAir