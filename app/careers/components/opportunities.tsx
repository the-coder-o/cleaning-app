import Image from 'next/image'
import React from 'react'
import girl_cleaning from '@/images/jpg/girl-cleaning.jpg'
import washing from '@/images/jpg/CleaningWork.jpg';
import explaining from '@/images/jpg/explaining.jpg'

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
                    <ul className='w-full max-w-[500px] text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px]'>
                        <li className=''>Full time, day shift.30 + hours per week</li>
                        <li className=''>Reliable Transportation Required</li>
                        <li className=''>Background Check Required</li>
                        <li className=''>Job includes providing residential and commercial Air Duct and Carpet Cleaning.</li>
                        <li className=''>Training provided</li>
                    </ul>
                </div>
            </div>
            <div className="">
                <div className="flex items-center flex-col-reverse px-6 md:px-12 gap-12 lg:flex-row justify-between lg:justify-around mt-6 md:mt-16">
                    <div className="asap">
                        <h5 className='font-semibold text-[14px] sm:text-[18px] md:text-[22px] xl:text-[26px]'>
                            Janitorial Technician</h5>
                        <ul className='w-full max-w-[500px] text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px]'>
                            <li className=''>Part time, morning or evening shift</li>
                            <li className=''>20+ hours per week</li>
                            <li className=''>Reliable Transportation Required</li>
                            <li className=''>Background Check Required</li>
                            <li className=''>Job entails general cleaning (Dusting,
                                Mopping, Vacuuming, Dumping Trash, etc.)</li>
                            <li className=''>Training provided</li>

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
                        <ul className='w-full max-w-[560px] text-[12px] sm:text-[14px] md:text-[16px] xl:text-[18px]'>
                            <li className=''>Part time, full time, day shift</li>
                            <li className=''>30 + hours per week</li>
                            <li className=''>Reliable Transportation Required</li>
                            <li className=''>Background Check Required</li>
                            <li className=''>Job includes active involvement with the communities, establishing relationships with local businesses, government leaders, restaurant owners, as well as travel industry and hospitality representatives.</li>
                            <li className=''>College degree in Marketing or equivalent related experience in the publishing industry and media.</li>
                            <li className=''>Experience in sales, preferably in advertising.</li>
                            <li className=''>Outstanding networking capabilities and the ability to close sales. Required</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Opportunities