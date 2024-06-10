import React from 'react'
import { Card, CardHeader } from '@/components/ui/card'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import Modal from '@/components/Modal'



const Specialization = () => {
    return (
        <div className="mt-12 md:mt-24">
            <h2 className='pl-3 font-bold montserrat text-[18px] sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px]'>We offer :</h2>
            <div className="flex gap-3 px-2 flex-wrap justify-between mt-5">
                <Card className='px-6 py-3 w-full'>
                    <CardHeader className='text-black shadow-none'>
                        Pet odor & stains removal
                    </CardHeader>
                    
                </Card>
                <Card className='px-6 py-3 w-full'>
                    <CardHeader className='text-black shadow-none '>
                        Carpet protection
                    </CardHeader>
                    
                </Card>
                <Card className='px-6 py-3 w-full'>
                    <CardHeader className='text-black shadow-none'>
                        Sanitizer
                    </CardHeader>
                    
                </Card>
            </div>
            <div className="mt-12">
                <h4 className='text-[14px] w-full max-w-[870px] montserrat md:text-[23px] font-medium'>One room counts up to 180 sq/ft, living/dining combos and L-shape rooms counts as 2 rooms</h4>
            </div>
        </div>
    )
}

export default Specialization