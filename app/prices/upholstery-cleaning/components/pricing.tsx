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
            <h2 className='montserrat font-bold text-[18px]  sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px]'>WE USE POWERFUL TRUCKMOUNTED SYSTEM</h2>
            <h4 className='text-[14px] sm:text-[18px] md:text-[22px] xl:text-[27px] montserrat my-4 font-medium'>3 STEPS CARPET CLEANING <br /> <span className='text-red-600'>100 % SATISFACTION GUARANTEED </span></h4>

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
                <Card>
                    <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600">
                        <CardHeader>Chair</CardHeader>
                    </div>
                    <div className="px-8 py-4">
                        <div className="text-4xl font-bold text-gray-800">$54.99<span className="text-lg text-gray-600 line-through ml-2">/$ 89.99</span></div>
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
                        <CardHeader>Loveseat</CardHeader>
                    </div>
                    <div className="px-8 py-4">
                        <div className="text-4xl font-bold text-gray-800">$64.99<span className="text-lg text-gray-600 line-through ml-2">/$ 94.99</span></div>
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
                        <CardHeader>Sofa</CardHeader>
                    </div>
                    <div className="px-[26px] py-4">
                        <div className="text-4xl font-bold text-gray-800">$79.99<span className="text-lg text-gray-600 line-through ml-2">/$ 109.99</span></div>
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
                        <CardHeader>Sectional sofa</CardHeader>
                    </div>
                    <div className="px-[26px] py-4">
                        <div className="text-4xl font-bold text-gray-800">$99.99<span className="text-lg text-gray-600 line-through ml-2">/$ 144.99</span></div>
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
                        <CardHeader>Mattress</CardHeader>
                    </div>
                    <div className="px-[18px] py-4">
                        <ul className="text-gray-600">
                            <li className="flex justify-between gap-8 items-center">
                                <p className='text-[22px] font-bold text-black'>Twin</p>
                                <p className='text-[22px] font-bold text-black'>$59.99 <span
                                    className='text-[16px] line-through text-gray-400'>($89.99)</span></p>
                            </li>
                            <li className="flex justify-between items-center">
                                <p className='text-[22px] font-bold text-black'>Queen</p>
                                <p className='text-[22px] font-bold text-black'>74.99 <span className='text-[16px] line-through text-gray-400'>(109.99)</span></p>
                            </li>
                            <li className="flex justify-between  items-center">
                                <p className='text-[22px] font-bold text-black'>King</p>
                                <p className='text-[22px] font-bold text-black'>89.99 <span className='text-[16px] line-through text-gray-400'>(139.99)</span></p>
                            </li>
                        </ul>
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