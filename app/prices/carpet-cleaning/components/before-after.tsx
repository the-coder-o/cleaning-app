import { Button } from '@/components/ui/button'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import Image from 'next/image'
import React from 'react'
import before from '@/images/jpg/before-carpet.jpg';
import after from '@/images/jpg/after-carpet.jpg';

const BeforeAfter = () => {
  return (
    <div className='pl-[10px] sm:pl-[20px] lg:pl-[40px]'>
        <div className="">
        <h2 className='font-bold montserrat text-[18px]  sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px] '>A dirty carpet affects your <span className='text-lime-400'>health</span></h2>
        <h4 className='flex flex-wrap w-full max-w-[1050px] montserrat font-semibold text-[14px] sm:text-[18px] md:text-[22px] xl:text-[24px] '>You must give your carpet a thorough clean to remove allergens and clear the air. Aim to vacuum once a week and hire a professional carpet cleaner every two-six months</h4>
        </div>
        <div className="flex justify-center items-center  gap-12 my-5">
        <Button variant={'secondary'} size={'lg'}>Before</Button>
        <Button variant={'secondary'}>After</Button>
        </div>
        <div className="flex items-center  justify-center">
          <ResizablePanelGroup
            direction="horizontal"
            className="min-h-[400px] max-w-2xl rounded-lg border"
          >
            <ResizablePanel defaultSize={50}>
              <div className="flex  items-center justify-center ">
                <Image src={before} alt='before' className='w-full h-[350px] md:h-[500px] object-cover' />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50}>
              <div className="flex  items-center justify-center ">
                <Image src={after} alt='after' className='w-full h-[350px] md:h-[500px] object-cover' />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
    </div>
  )
}

export default BeforeAfter