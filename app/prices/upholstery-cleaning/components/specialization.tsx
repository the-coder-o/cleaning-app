import React from 'react'
import { Card, CardHeader } from '@/components/ui/card';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import Modal from '@/components/Modal';



const Specialization = () => {
    return (
        <div className="mt-12 md:mt-24">
            <h2 className='pl-3 font-bold montserrat text-[18px] sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px]'>We offer :</h2>
            <div className="flex gap-3 px-2 flex-wrap justify-between mt-5">
                <Card className='px-6 py-3 w-full'>
                    <CardHeader className='text-black shadow-none'>
                        Pet odor & stains removal
                    </CardHeader>
                    <Dialog>
                        <DialogTrigger className='flex text-[10px] sm:text-[12px] md:text-[16px] items-start rounded-full  px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none '>BOOK NOW</DialogTrigger>
                        <Modal />
                    </Dialog>
                </Card>
                <Card className='px-6 py-3 w-full'>
                    <CardHeader className='text-black shadow-none '>
                        Upholstery protection
                    </CardHeader>
                    <Dialog>
                        <DialogTrigger className='mt-8 flex text-[10px] sm:text-[12px] md:text-[16px] items-start rounded-full  px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none '>BOOK NOW</DialogTrigger>
                        <Modal />
                    </Dialog>
                </Card>
                <Card className='px-6 py-3 w-full'>
                    <CardHeader className='text-black shadow-none'>
                        Sanitizer
                    </CardHeader>
                    <Dialog>
                        <DialogTrigger className='mt-8 flex text-[10px] sm:text-[12px] md:text-[16px] items-start rounded-full  px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none '>BOOK NOW</DialogTrigger>
                        <Modal />
                    </Dialog>
                </Card>
            </div>
        </div>
    )
}

export default Specialization