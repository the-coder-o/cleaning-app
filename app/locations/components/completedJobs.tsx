import React from 'react'
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import Image from 'next/image'
import before1 from '@/images/jpg/before-clng.jpg';
import after1 from '@/images/jpg/after-clng.jpg';
import before2 from '@/images/jpg/flour-before.jpg';
import after2 from '@/images/jpg/flour-after.jpg'
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import Modal from '@/components/Modal';


const CompletedJobs = () => {
  return (
    <div className='container'>
      <h1 className='ml-12 text-[46px] w-[900px] montserrat font-bold'>For over 20 years of service we have completed more than <span className='text-lime-400 '>100 000</span> jobs</h1>

      <div className=" flex items-center justify-evenly mt-16">
        <div className="">
          <ResizablePanelGroup
            direction="horizontal"
            className="h-full max-h-[450px] max-w-md rounded-lg border"
          >
            <ResizablePanel defaultSize={50}>
              <div className="flex  items-center justify-center ">
                <Image src={before1} alt='before' className='w-[500px] h-[240px] object-cover' />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex items-center justify-center ">
                <Image src={after1} alt='after' className='w-[500px] h-[240px] object-cover' />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>



        </div>
        <div className="">
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[200px] max-w-md rounded-lg border"
          >
            <ResizablePanel defaultSize={50}>
              <div className="flex  items-center justify-center ">
                <Image src={before2} alt='before' className='w-[500px] h-[240px] object-cover' />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex  items-center justify-center ">
                <Image src={after2} alt='after' className='w-[500px] h-[240px] object-cover' />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>

      <div className="flex justify-center text-center items-center">
      <Dialog>
        <DialogTrigger className='mt-12 transition-all duration-200 montserrat text-[8px] lg:text-[12px] xl:text-base  bg-lime-400 hover:bg-lime-500 outline-none focus:border-none text-white font-semibold rounded-xl py-[2px] px-[4px] md:py-1 md:px-2 xl:py-1 xl:px-3'>BOOK NOW</DialogTrigger>
        <Modal />
      </Dialog>
      </div>

    </div>
  )
}

export default CompletedJobs