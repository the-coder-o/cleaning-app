import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import Modal from '@/components/Modal'

const Pricing = () => {
    return (
        <div className='px-6 md:px-12 mt-12 md:mt-24'>
            <h2 className='montserrat font-bold text-[18px]  sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px]'>WE ONLY USE POWERFUL TRUCKMOUNTED SYSTEM</h2>
            <h4 className='text-[14px] sm:text-[18px] md:text-[22px] xl:text-[27px] montserrat my-4 font-medium'><span className='text-red-600'>100 %</span> SATISFACTION GUARANTEED</h4>

            <div className="mb-6">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbPage>ROTARYBRUSH SYSTEM</BreadcrumbPage>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Truckmounted Vacuum With Negative Pressure System</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="px-2 lg:px-4 place-items-center grid grid-cols-1 items-center text-center justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 ">
                <Card className='w-[248px] rem rounded-xl flex flex-col items-center'>
                    <CardHeader className='montserrat flex flex-col items-center text-[22px] md:text-[31px] font-medium '>Air Duct
                        Cleaning</CardHeader>

                    <CardContent>
                        <CardDescription className='asap font-bold text-red-600 text-[18px] md:text-[44px] flex text-center flex-col'>$ 374.99<span className='text-black font-normal text-end montserrat text-[18px]'>Reg. $ 499.99</span></CardDescription>
                        <Dialog>
                            <DialogTrigger className='mt-7 transition-all duration-200 montserrat text-[10px] md:text-[12px] xl:text-base bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl  py-3 px-8 md:py-2 md:px-6'>BOOK NOW</DialogTrigger>
                            <Modal />
                        </Dialog>
                    </CardContent>
                </Card>
                <Card className='w-[248px] rem rounded-xl flex flex-col items-center'>
                    <CardHeader className='montserrat flex flex-col items-center text-[22px] md:text-[31px] font-medium'>Dryer Vent
                        Cleaning</CardHeader>

                    <CardContent>
                        <CardDescription className='asap font-bold text-red-600 text-[18px] md:text-[44px] flex text-center flex-col'>$ 89.99 <span className='text-black font-normal text-end montserrat text-[18px]'>Reg. $ 109.99</span></CardDescription>
                        <Dialog>
                            <DialogTrigger className='mt-7 transition-all duration-200 montserrat text-[10px] md:text-[12px] xl:text-base bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl  py-3 px-8 md:py-2 md:px-6'>BOOK NOW</DialogTrigger>
                            <Modal />
                        </Dialog>
                    </CardContent>
                </Card>
            </div>
            <div className="mt-4">
                <h4 className='text-[14px] w-full max-w-[870px] montserrat md:text-[23px] font-medium text-red-600'>We also offer Dryer machine Cleaning and Exhaust Fan Cleaning
                </h4>
            </div>
        </div>
    )
}

export default Pricing