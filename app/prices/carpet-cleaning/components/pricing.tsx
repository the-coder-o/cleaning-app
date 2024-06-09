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
            <h2 className='montserrat font-bold text-[18px]  sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px]'>WE USE POWERFUL TRUCKMOUNTED SYSTEMS</h2>
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
                <Card>
                    <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600">
                        <CardHeader>2 rooms</CardHeader>
                        <CardDescription >And Hallway</CardDescription>
                    </div>
                    <div className="px-10 py-4">
                        <div className="text-4xl font-bold text-gray-800">$69.99<span className="text-lg text-gray-600 line-through ml-2">/$ 99.99</span></div>
                    </div>

                    <div className="px-6 pt-4 pb-6">


                        <Dialog>
                            <DialogTrigger className='block rounded-full w-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>Explore more</DialogTrigger>
                            <Modal />
                        </Dialog>


                    </div>
                </Card>

                <Card>
                    <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600">
                        <CardHeader>3 rooms</CardHeader>
                        <CardDescription >And Hallway</CardDescription>
                    </div>
                    <div className="px-8 py-4">
                        <div className="text-4xl font-bold text-gray-800">$89.99<span className="text-lg text-gray-600 line-through ml-2">/$ 129.99</span></div>
                    </div>

                    <div className="px-6 pt-4 pb-6">


                        <Dialog>
                            <DialogTrigger className='block rounded-full w-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>Explore more</DialogTrigger>
                            <Modal />
                        </Dialog>


                    </div>
                </Card>

                <Card>
                    <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600">
                        <CardHeader>4 rooms</CardHeader>
                        <CardDescription >And Hallway</CardDescription>
                    </div>
                    <div className="px-6 py-4">
                        <div className="text-4xl font-bold text-gray-800">$109.99<span className="text-lg text-gray-600 line-through ml-2">/$ 159.99</span></div>
                    </div>

                    <div className="px-6 pt-4 pb-6">


                        <Dialog>
                            <DialogTrigger className='block rounded-full w-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>Explore more</DialogTrigger>
                            <Modal />
                        </Dialog>


                    </div>
                </Card>

                <Card>
                    <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600">
                        <CardHeader>5 rooms</CardHeader>
                        <CardDescription >And Hallway</CardDescription>
                    </div>
                    <div className="px-6 py-4">
                        <div className="text-4xl font-bold text-gray-800">$129.99<span className="text-lg text-gray-600 line-through ml-2">/$ 189.99</span></div>
                    </div>

                    <div className="px-6 pt-4 pb-6">


                        <Dialog>
                            <DialogTrigger className='block rounded-full w-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>Explore more</DialogTrigger>
                            <Modal />
                        </Dialog>


                    </div>
                </Card>

                <Card>
                    <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600">
                        <CardHeader>6 rooms</CardHeader>
                        <CardDescription >And Hallway</CardDescription>
                    </div>
                    <div className="px-6 py-4">
                        <div className="text-4xl font-bold text-gray-800">$149.99<span className="text-lg text-gray-600 line-through ml-2">/$ 219.99</span></div>
                    </div>

                    <div className="px-6 pt-4 pb-6">


                        <Dialog>
                            <DialogTrigger className='block rounded-full w-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>Explore more</DialogTrigger>
                            <Modal />
                        </Dialog>


                    </div>
                </Card>

                <Card>
                    <div className="px-6 py-4 bg-gradient-to-r from-indigo-500 to-purple-600">
                        <CardHeader>7 rooms</CardHeader>
                        <CardDescription >And Hallway</CardDescription>
                    </div>
                    <div className="px-6 py-4">
                        <div className="text-4xl font-bold text-gray-800">$169.99<span className="text-lg text-gray-600 line-through ml-2">/$ 249.99</span></div>
                    </div>

                    <div className="px-6 pt-4 pb-6">


                        <Dialog>
                            <DialogTrigger className='block rounded-full w-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-indigo-500 to-purple-600 focus:bg-indigo-700 focus:outline-none'>Explore more</DialogTrigger>
                            <Modal />
                        </Dialog>


                    </div>
                </Card>




            </div>
            <div className="mt-4">
                <h4 className='text-[14px] w-full max-w-[870px] montserrat md:text-[23px] font-medium'>One room counts up to 180 sq/ft, living/dining combos and L-shape rooms counts as 2 rooms</h4>
            </div>
        </div>
    )
}

export default Pricing