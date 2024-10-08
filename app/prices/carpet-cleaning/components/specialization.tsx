import React from 'react'
import { Card, CardHeader } from '@/components/ui/card'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import Modal from '@/components/Modal'



const Specialization = () => {
    return (
        <div className="mt-12 md:mt-24">
            <h2 className='px-8 sm:px-4 font-bold montserrat text-[18px] sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px]'>We offer :</h2>
            <div className="flex gap-3 px-2 flex-wrap justify-between mt-5">
                <Card className='px-6 py-3 w-full'>
                    <CardHeader className='text-black shadow-none'>
                        Pet odor & stain removal
                    </CardHeader>
                    
                </Card>
                <Card className='px-6 py-3 w-full'>
                    <CardHeader className='text-black shadow-none '>
                        Carpet protection
                    </CardHeader>
                    
                </Card>
                <Card className='px-6 py-3 w-full'>
                    <CardHeader className='text-black shadow-none'>
                        Sanitizing
                    </CardHeader>
                    
                </Card>
            </div>
            <div className="mt-12">
                <h4 className='text-[14px] text-center sm:text-start px-4 w-full max-w-[870px] montserrat md:text-[23px] font-medium'>One room is up to 180 square feet. Living/dining combinations and L-shaped rooms count as two rooms.</h4>
            </div>
        </div>
    )
}

export default Specialization