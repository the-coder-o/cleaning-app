import Image from 'next/image'
import React from 'react'
import girl_cleaning from '@/images/jpg/girl-cleaning.jpg'
import washing from '@/images/jpg/CleaningWork.jpg';
import explaining from '@/images/jpg/explaining.jpg'
import { Badge } from '@/components/ui/badge';

const Opportunities = () => {
    return (
        <div className='mt-12 md:mt-24'>
            <h2 className='asap text-center font-bold text-[18px] sm:text-[24px] md:text-[28px] lg:text-[36px] xl:text-[42px]'>Job Opportunities</h2>
            <div className="flex items-center flex-col px-6 md:px-12 gap-12 lg:flex-row justify-between lg:justify-around mt-6 md:mt-16">
                <div className="">
                    <Image src={girl_cleaning} className='xl:w-[560px] xl:h-[350px] lg:w-[450px] lg:h-[300px] md:w-[400px] md:h-[340px] sm:w-[350px] sm:h-[300px] w-[300px] h-[250px]' alt='girl-cleaning' />
                </div>
                <div className="asap">
                    <h5 className='font-semibold text-[14px] sm:text-[18px] md:text-[22px] xl:text-[26px]'>Carpet and Air Duct Cleaning Technician</h5>
                    <ul className='w-full flex flex-col gap-2 max-w-[500px] text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px]'>
                        <Badge variant={'outline'} className=''>Full time, day shift.30 + hours per week</Badge>
                        <Badge variant={'outline'} className=''>Reliable Transportation Required</Badge>
                        <Badge variant={'outline'} className=''>Background Check Required</Badge>
                        <Badge variant={'outline'} className=''>Job includes providing residential and commercial Air Duct and Carpet Cleaning.</Badge>
                        <Badge variant={'outline'} className=''>Training provided</Badge>
                    </ul>
                </div>
            </div>
            <div className="">
                <div className="flex items-center flex-col-reverse px-6 md:px-12 gap-12 lg:flex-row justify-between lg:justify-around mt-6 md:mt-16">
                    <div className="asap">
                        <h5 className='font-semibold text-[14px] sm:text-[18px] md:text-[22px] xl:text-[26px]'>
                            Janitorial Technician</h5>
                        <ul className='w-full flex flex-col gap-2 max-w-[500px] text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px]'>
                            <Badge variant={'outline'} className=''>Part time, morning or evening shift</Badge>
                            <Badge variant={'outline'} className=''>20+ hours per week</Badge>
                            <Badge variant={'outline'} className=''>Reliable Transportation Required</Badge>
                            <Badge variant={'outline'} className=''>Background Check Required</Badge>
                            <Badge variant={'outline'} className=''>Job entails general cleaning (Dusting,
                                Mopping, Vacuuming, Dumping Trash, etc.)</Badge>
                            <Badge variant={'outline'} className=''>Training provided</Badge>
                        </ul>
                    </div>
                    <div className="">
                        <Image src={washing} className='xl:w-[560px] xl:h-[350px] lg:w-[450px] lg:h-[300px] md:w-[400px] md:h-[340px] sm:w-[350px] sm:h-[300px] w-[300px] h-[250px]' alt='girl-cleaning' />
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex items-center flex-col px-6 md:px-12 gap-12 lg:flex-row justify-between lg:justify-around mt-6 md:mt-16">
                    <div className="">
                        <Image src={explaining} className='xl:w-[560px] xl:h-[350px] lg:w-[450px] lg:h-[300px] md:w-[400px] md:h-[340px] sm:w-[350px] sm:h-[300px] w-[300px] h-[250px]' alt='girl-cleaning' />
                    </div>
                    <div className="asap">
                        <h5 className='font-semibold text-[14px] sm:text-[18px] md:text-[22px] xl:text-[26px]'>
                            Marketing & Sales Representative</h5>
                        <ul className='w-full flex flex-col gap-2 max-w-[560px] text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px]'>
                            <Badge variant={'outline'} className=''>Part time, full time, day shift</Badge>
                            <Badge variant={'outline'} className=''>30 + hours per week</Badge>
                            <Badge variant={'outline'} className=''>Reliable Transportation Required</Badge>
                            <Badge variant={'outline'} className=''>Background Check Required</Badge>
                            <Badge variant={'outline'} className=''>Experience in sales, preferably in advertising.</Badge>
                            <Badge variant={'outline'} className=''>Outstanding networking capabilities and the ability to close sales. Required</Badge>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Opportunities