import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
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
            <h4 className='text-[14px] sm:text-[18px] md:text-[22px] xl:text-[27px] montserrat my-4 font-medium'>3 STEPS CARPET CLEANING <span className='text-red-600'>100 %</span> SATISFACTION GUARANTEED</h4>

            <div className="mb-6">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbPage>PRESPOTTING</BreadcrumbPage>
                        </BreadcrumbItem>
                        <BreadcrumbItem>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>STEAM CLEANING</BreadcrumbPage>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>DEODORISING</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="px-2 lg:px-4 place-items-center grid grid-cols-1 items-center text-center justify-center sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 ">
                <Card className='w-[248px] rem rounded-xl flex flex-col items-center'>
                    <CardHeader className='montserrat flex flex-col items-center text-[22px] md:text-[31px] font-medium'>2 rooms <span className='font-normal'>And Hallway</span></CardHeader>

                    <CardContent>
                        <CardDescription className='asap font-bold text-red-600 text-[18px] md:text-[44px] flex text-center flex-col'>$ 79.99 <span className='text-black font-normal text-end montserrat text-[18px]'>Reg. $ 99.99</span></CardDescription>
                        <Dialog>
                            <DialogTrigger className='mt-7 transition-all duration-200 montserrat text-[10px] md:text-[12px] xl:text-base bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl  py-3 px-8 md:py-2 md:px-6'>BOOK NOW</DialogTrigger>
                            <Modal />
                        </Dialog>
                    </CardContent>
                </Card>

                <Card className='w-[248px] rem rounded-xl flex flex-col items-center'>
                    <CardHeader className='montserrat flex flex-col items-center text-[22px] md:text-[31px] font-medium'>3 rooms<span className='font-normal'>And Hallway</span></CardHeader>

                    <CardContent>
                        <CardDescription className='asap font-bold text-red-600 text-[18px] md:text-[44px] flex text-center flex-col'>$ 109.99<span className='text-black font-normal text-end montserrat text-[18px]'>Reg. $ 134.99</span></CardDescription>
                        <Dialog>
                            <DialogTrigger className='mt-7 transition-all duration-200 montserrat text-[10px] md:text-[12px] xl:text-base bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl  py-3 px-8 md:py-2 md:px-6'>BOOK NOW</DialogTrigger>
                            <Modal />
                        </Dialog>
                    </CardContent>
                </Card>
                <Card className='w-[248px] rem rounded-xl flex flex-col items-center'>
                    <CardHeader className='montserrat flex flex-col items-center text-[22px] md:text-[31px] font-medium'>4 rooms <span className='font-normal'>And Hallway</span></CardHeader>

                    <CardContent>
                        <CardDescription className='asap font-bold text-red-600 text-[18px] md:text-[44px] flex text-center flex-col'>$ 139.99<span className='text-black font-normal text-end montserrat text-[18px]'>Reg. $ 174.99</span></CardDescription>
                        <Dialog>
                            <DialogTrigger className='mt-7 transition-all duration-200 montserrat text-[10px] md:text-[12px] xl:text-base bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl  py-3 px-8 md:py-2 md:px-6'>BOOK NOW</DialogTrigger>
                            <Modal />
                        </Dialog>
                    </CardContent>
                </Card>
                <Card className='w-[248px] rem rounded-xl flex flex-col items-center'>
                    <CardHeader className='montserrat flex flex-col items-center text-[22px] md:text-[31px] font-medium'>5 rooms <span className='font-normal'>And Hallway</span></CardHeader>

                    <CardContent>
                        <CardDescription className='asap font-bold text-red-600 text-[18px] md:text-[44px] flex text-center flex-col'>$ 169.99<span className='text-black font-normal text-end montserrat text-[18px]'>Reg. $ 209.99</span></CardDescription>
                        <Dialog>
                            <DialogTrigger className='mt-7 transition-all duration-200 montserrat text-[10px] md:text-[12px] xl:text-base bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl  py-3 px-8 md:py-2 md:px-6'>BOOK NOW</DialogTrigger>
                            <Modal />
                        </Dialog>
                    </CardContent>
                </Card>
                <Card className='w-[248px] rem rounded-xl flex flex-col items-center'>
                    <CardHeader className='montserrat flex flex-col items-center text-[22px] md:text-[31px] font-medium'>6 rooms <span className='font-normal'>And Hallway</span></CardHeader>

                    <CardContent>
                        <CardDescription className='asap font-bold text-red-600 text-[18px] md:text-[44px] flex text-center flex-col'>$ 199.99 <span className='text-black font-normal text-end montserrat text-[18px]'>Reg. $ 249.99</span></CardDescription>
                        <Dialog>
                            <DialogTrigger className='mt-7 transition-all duration-200 montserrat text-[10px] md:text-[12px] xl:text-base bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl  py-3 px-8 md:py-2 md:px-6'>BOOK NOW</DialogTrigger>
                            <Modal />
                        </Dialog>
                    </CardContent>
                </Card>
                <Card className='w-[248px] rem rounded-xl flex flex-col items-center'>
                    <CardHeader className='montserrat flex flex-col items-center text-[22px] md:text-[31px] font-medium'>7 rooms <span className='font-normal'>And Hallway</span></CardHeader>

                    <CardContent>
                        <CardDescription className='asap font-bold text-red-600 text-[18px] md:text-[44px] flex text-center flex-col'>$ 229.99 <span className='text-black font-normal text-end montserrat text-[18px]'>Reg. $ 289.99</span></CardDescription>
                        <Dialog>
                            <DialogTrigger className='mt-7 transition-all duration-200 montserrat text-[10px] md:text-[12px] xl:text-base bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl  py-3 px-8 md:py-2 md:px-6'>BOOK NOW</DialogTrigger>
                            <Modal />
                        </Dialog>
                    </CardContent>
                </Card>
                <Card className='w-[248px] rem rounded-xl flex flex-col items-center'>
                    <CardHeader className='montserrat flex flex-col items-center text-[22px] md:text-[31px] font-medium leading-[30px]'>Staircase cleaning <span className='font-normal text-[12px] md:text-[14px]'>Up to 15 steps</span></CardHeader>

                    <CardContent>
                        <CardDescription className='asap font-bold text-red-600 text-[18px] md:text-[44px] flex text-center flex-col'>$ 49.99 <span className='text-black font-normal text-end montserrat text-[18px]'>Reg. $ 64.99</span></CardDescription>
                        <Dialog>
                            <DialogTrigger className='mt-7 transition-all duration-200 montserrat text-[10px] md:text-[12px] xl:text-base bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl  py-3 px-8 md:py-2 md:px-6'>BOOK NOW</DialogTrigger>
                            <Modal />
                        </Dialog>
                    </CardContent>
                </Card>
                <Card className='w-[248px] rem rounded-xl flex flex-col items-center'>
                    <CardHeader className='montserrat flex flex-col items-center text-[18px] md:text-[24px] font-medium leading-[30px]'>Carpet
                        Repair & Restreching<span className='font-normal text-[12px] md:text-[14px]'>Free cleaning</span></CardHeader>

                    <CardContent>
                        <CardDescription className='asap font-bold text-red-600 text-[18px] md:text-[44px] flex text-center flex-col'>$ 149.99 <span className='text-black font-normal text-end montserrat text-[18px]'>Reg. $209.99</span>
                            <span className='text-black font-normal text-[14px] md:text-[18px] '>PER AREA</span>
                        </CardDescription>
                        <Dialog>
                            <DialogTrigger className='mt-7 transition-all duration-200 montserrat text-[10px] md:text-[12px] xl:text-base bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl  py-3 px-8 md:py-2 md:px-6'>BOOK NOW</DialogTrigger>
                            <Modal />
                        </Dialog>
                    </CardContent>
                </Card>
            </div>
            <div className="mt-4">
                <h4 className='text-[14px] w-full max-w-[870px] montserrat md:text-[23px] font-medium'><span className='text-red-600'>We also offer pet odor and stain removal, carpet protection, sanitizing.</span>
                    {' '}  (One room counts up to 200sq/ft, living/dining combos and L-shape rooms counts as 2 rooms)</h4>
            </div>
        </div>
    )
}

export default Pricing