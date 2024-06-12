import { Button } from '@/components/ui/button'
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable'
import Image from 'next/image'
import React from 'react'
import beforeAfter from '@/images/jpg/cleaning-before-after.jpg';
import beforeAfter2 from '@/images/jpg/cleaning-before-after2.jpg';

const BeforeAfter = () => {
  return (
    <div className='flex items-center justify-around flex-wrap px-3 mt-6 space-y-4 md:mt-12'>
      <Image src={beforeAfter} alt='before-after' className='w-[310px] sm:w-[350px] lg:w-[400px] xl:w-[436px] h-[330px] sm:h-[360px] lg:h-[400px] xl:h-[439px]'/>
      <Image src={beforeAfter2} alt='before-after' className='w-[323px] sm:w-[370px] lg:w-[420px] xl:w-[445px] h-[320px] sm:h-[350px] lg:h-[390px] xl:h-[420px]'/>
        {/* <div className="flex justify-center items-center  gap-12 my-5">
        <Button className='block rounded-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-black/65  via-gray-600 to-black/65 focus:bg-indigo-700 focus:outline-none'>Before</Button>
        <Button className='block rounded-full px-4 py-2 font-semibold text-center text-white bg-gradient-to-r from-black/65  via-gray-600 to-black/65 focus:bg-indigo-700 focus:outline-none'>After</Button>
        </div> */}
        {/* <div className="flex items-center px-2 justify-center">
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
        </div> */}
    </div>
  )
}

export default BeforeAfter