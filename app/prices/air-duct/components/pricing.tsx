import React from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Card, CardHeader } from '@/components/ui/card'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import Modal from '@/components/Modal'

const Pricing = () => {
    return (
        <div className='px-6 md:px-12 mt-12 md:mt-24'>
            <h2 className='text-black/70 montserrat font-bold text-[18px]  sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px]'>WE USE POWERFUL Truck-mountedMOUNTED SYSTEM</h2>
            <h4 className='text-red-500 text-[14px] sm:text-[18px] md:text-[22px] xl:text-[27px] montserrat my-4 font-medium'>100 % SATISFACTION GUARANTEED</h4>
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
                            <BreadcrumbPage>Truck-mountedmounted Vacuum With Negative Pressure System</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <h4 className='text-black/70 text-[18px]  mt-6 md:mt-12 md:text-[24px] xl:text-[28px] montserrat my-4 font-semibold'>DUCT CLEANING COST</h4>
            <p className='text-black/70 text-[14px] sm:text-[16px] md:text-[18px] mb-5'>Air Duct cleaning price is based on the square footage of your home.</p>
            <div className="px-2 flex flex-wrap text-start items-start gap-3 ">
                <Card>
                    <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600">
                        <CardHeader>1,500 sq. ft. and under</CardHeader>
                    </div>
                    <div className="px-6 py-4">
                        <div className="text-4xl font-bold text-gray-800">$229.99<span className="text-lg text-gray-600 line-through ml-2">/$ 449.99</span></div>
                    </div>
                    <div className="px-6 pt-4 pb-6">
                        <Dialog>
                            <DialogTrigger className='block rounded-full w-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>BOOK NOW</DialogTrigger>
                            <Modal />
                        </Dialog>
                    </div>
                </Card>
                <Card>
                    <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600">
                        <CardHeader>1,501 – 2,500 sq. ft.</CardHeader>
                    </div>
                    <div className="px-8 py-4">
                        <div className="text-4xl font-bold text-gray-800">$399.99<span className="text-lg text-gray-600 line-through ml-2">/$ 599.99</span></div>
                    </div>
                    <div className="px-6 pt-4 pb-6">
                        <Dialog>
                            <DialogTrigger className='block rounded-full w-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>BOOK NOW</DialogTrigger>
                            <Modal />
                        </Dialog>
                    </div>
                </Card>
                <Card>
                    <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600">
                        <CardHeader>2,501 – 3,500 sq. ft.</CardHeader>
                    </div>
                    <div className="px-8 py-4">
                        <div className="text-4xl font-bold text-gray-800">$499.99<span className="text-lg text-gray-600 line-through ml-2">/$ 749.99</span></div>
                    </div>
                    <div className="px-6 pt-4 pb-6">
                        <Dialog>
                            <DialogTrigger className='block rounded-full w-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>BOOK NOW</DialogTrigger>
                            <Modal />
                        </Dialog>
                    </div>
                </Card>
                <Card>
                    <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600">
                        <CardHeader>3,501 – 4,500 sq. ft.</CardHeader>
                    </div>
                    <div className="px-8 py-4">
                        <div className="text-4xl font-bold text-gray-800">$589.99<span className="text-lg text-gray-600 line-through ml-2">/$ 899.99</span></div>
                    </div>
                    <div className="px-6 pt-4 pb-6">
                        <Dialog>
                            <DialogTrigger className='block rounded-full w-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>BOOK NOW</DialogTrigger>
                            <Modal />
                        </Dialog>
                    </div>
                </Card>
                <Card>
                    <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600">
                        <CardHeader>Dryer vent cleaning</CardHeader>
                    </div>
                    <div className="px-[42px] py-4">
                        <div className="text-4xl font-bold text-gray-800">$99.99<span className="text-lg text-gray-600 line-through ml-2">/$ 149.99</span></div>
                    </div>
                    <div className="px-6 pt-4 pb-6">
                        <Dialog>
                            <DialogTrigger className='block rounded-full w-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>BOOK NOW</DialogTrigger>
                            <Modal />
                        </Dialog>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Pricing