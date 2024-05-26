import Image from 'next/image'
import React from 'react'
import bg from '@/images/jpg/bg.jpg'
import diamond from '@/images/svg/diamond_1.svg'
import safety from '@/images/svg/healthcare-and-medic.svg'
import checked from '@/images/svg/checked_1.svg'
import teach from '@/images/svg/teach_1.svg'

const ChooseUs = () => {
    return (
        <div className='mt-24 bg-img'>
            <div className="mt-32">
                <h2 className='montserrat font-bold text-[46px] ml-12'>Why you should choose us</h2>
                <h4 className='montserrat text-[30px] ml-12'>We work - you rest</h4>

                
                <div className="par-flex mt-24">
                    <div className="flexbox">
                        <Image src={diamond} alt={'card-img'} className='' />
                        <h5 className='montserrat text-[24px]  font-semibold'>Efficiency</h5>
                        <p className='montserrat text-[16px]  '>We use nontoxic chemicals and professional powerful equipment for the best job results.</p>
                    </div>
                    <div className="flexbox">
                        <Image src={safety} alt={'card-img'} className='' />
                        <h5 className='montserrat text-[24px]  font-semibold'>Safety</h5>
                        <p className='montserrat text-[16px] '>We provide especial precautions for your and our safety. Our technicians wear masks, shoe covers and gloves. Equipment is disinfected and sanitized after each job.</p>
                    </div>
                    <div className="flexbox">
                        <Image src={checked} alt={'card-img'} className='' />
                        <h5 className='montserrat text-[24px]  font-semibold'>Reliability</h5>
                        <p className='montserrat text-[16px] '>We have professional, certified, background checked technicians. We are licensed and insured.</p>
                    </div>
                    <div className="flexbox ">
                        <Image src={teach} alt={'card-img'} className='' />
                        <h5 className='montserrat text-[24px]  font-semibold'>Professionality</h5>
                        <p className='montserrat text-[16px] '>We use nontoxic chemicals and professional powerful equipment for the best job results.</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ChooseUs