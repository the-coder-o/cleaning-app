import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import Image from 'next/image'
import React from 'react'
import before1 from '@/images/jpg/circle-before.jpg'
import after1 from '@/images/jpg/circle-after.jpg';
import before2 from '@/images/jpg/square-before.jpg'
import after2 from '@/images/jpg/sqaure-after.jpg'
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import Modal from '@/components/Modal';

const BeforeAfterAir = () => {
    return (
        <div>
            <div className="text-center md:text-start ml-0 md:ml-12">
                <h2 className='leading-8 md:leading-[55px]  mt-12 md:mt-24 drop-shadow-2xl text-[22px] sm:text-[28px] md:text-[46px] text-black w-full  max-w-[900px] montserrat font-bold'>Air duct cleaning is <span className='text-lime-400'>recommended</span> every 4-5 years for average homes.</h2>
                <p className='montserrat text-[16px] sm:text-[22px] md:text-[24px] lg:text-[28px] font-medium mt-4 md:mt-8'>Removing only <b>4 inches</b> of dust from the coils of the cooling system will reduce power consumption by <b>21 %</b> and extend the life of the system</p>
            </div>
            <div className=" grid grid-cols-1 lg:grid-cols-2  px-2 items-start place-items-center  gap-3 lg:flex-row mt-16">
                <div className="max-w-md">
                    <ResizablePanelGroup
                        direction="horizontal"
                        className="h-full max-h-[450px]  rounded-lg border"
                    >
                        <ResizablePanel defaultSize={50}>
                            <div className="flex  items-center justify-center ">
                                <Image src={before1} alt='before' className='w-[520px] h-[280px] object-cover' />
                            </div>
                        </ResizablePanel>
                        <ResizableHandle withHandle />
                        <ResizablePanel defaultSize={50}>
                            <div className="flex items-center justify-center ">
                                <Image src={after1} alt='after' className='w-[520px] h-[280px] object-cover' />
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>


                    <p className='montserrat text-[12px] sm:text-[14px] md:text-[16px] font-semibold text-center mt-3'>Indoor air quality is a very important for our health. In fact, according to National Air Duct Cleaners Association in a typical six-room home, up to 40 pounds of dust is created annually through everyday living. Dirty ducts may be contributing to larger health issues or harboring contaminants that could cause serious problems for people with respiratory health conditions, autoimmune disorders or some environmental allergies.</p>


                </div>
                <div className="max-w-md">
                    <ResizablePanelGroup
                        direction="horizontal"
                        className="min-h-[200px]  rounded-lg border"
                    >
                        <ResizablePanel defaultSize={50}>
                            <div className="flex  items-center justify-center ">
                                <Image src={before2} alt='before' className='w-[520px] h-[280px] object-cover' />
                            </div>
                        </ResizablePanel>
                        <ResizableHandle withHandle />
                        <ResizablePanel defaultSize={50}>
                            <div className="flex  items-center justify-center ">
                                <Image src={after2} alt='after' className='w-[520px] h-[280px] object-cover' />
                            </div>
                        </ResizablePanel>
                    </ResizablePanelGroup>
                    <p className='montserrat text-[12px] sm:text-[14px] md:text-[16px] font-semibold text-center mt-3'>
                        A dirty vent, however, is only one link in possible chain of events that may include: excessive lint build up inside the dryer , a missing or damaged lint screen , a crushed hose behind the dryer and a failure of thermostat and limit switch in the dryer.
                    </p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <Dialog>
                    <DialogTrigger className=' mt-4 mx-3 md:mt-12 mb-4 w-full max-w-[350px] flex items-center justify-center  text-center transition-all duration-200 montserrat  text-base md:text-lg  bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl py-2 px-[4px] md:py-3 md:px-2 xl:py-2 xl:px-3'>GET YOUR FREE ESTIMATE</DialogTrigger>
                    <Modal />
                </Dialog>
            </div>

        </div>
    )
}

export default BeforeAfterAir