import { Button } from '@/components/ui/button'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import Image from 'next/image'
import React from 'react'
import before from '@/images/jpg/before-carpet.jpg';
import after from '@/images/jpg/after-carpet.jpg';

const BeforeAfter = () => {
  return (
    <div className='pl-[0px] sm:pl-[20px] lg:pl-[40px]'>

        <div className="flex justify-center items-center  gap-12 my-5">
        <Button className='block rounded-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-black/65  via-gray-600 to-black/65 focus:bg-indigo-700 focus:outline-none'>Before</Button>
        <Button className='block rounded-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-black/65  via-gray-600 to-black/65 focus:bg-indigo-700 focus:outline-none'>After</Button>
        </div>
        <div className="flex items-center px-2 justify-center">
          <ResizablePanelGroup
            direction="horizontal"
            className="h-[400px] max-w-2xl rounded-lg border"
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