import React from 'react'
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import Modal from '@/components/Modal';
import { Card, CardHeader } from '@/components/ui/card';
import { Badge } from "@/components/ui/badge"


const BeforeAfterAir = () => {
    return (
        <div className='px-4'>
            <div className="text-start ml-0 md:ml-12">
                <h2 className='leading-8 md:leading-[55px]  mt-12 md:mt-24 drop-shadow-2xl text-[22px] sm:text-[28px] md:text-[46px] text-black/70 w-full  max-w-[900px] montserrat font-bold'>7 Surprising Benefits Of Air Duct Cleaning</h2>
                <div className="mt-2 flex flex-wrap gap-3 items-center">
                <Badge variant={'outline'}>Reduce Allergens.</Badge>
                <Badge variant={'outline'}>Improved Indoor Air Quality.</Badge>
                <Badge variant={'outline'}>Increased Energy Efficiency.</Badge>
                <Badge variant={'outline'}>Removal of Mold.</Badge>
                <Badge variant={'outline'}>Clear Out Bad Odors.</Badge>
                <Badge variant={'outline'}>Reduce Infestations.</Badge>
                <Badge variant={'outline'}>Enhanced Overall Health and Well-being.</Badge>
                </div>
            </div>
        </div>
    )
}

export default BeforeAfterAir