import Image from 'next/image'
import React from 'react'
import types1 from '@/images/png/Screenshot 2024-05-31 044152.png';
import stains1 from '@/images/png/Screenshot 2024-05-31 011219.png'
import types2 from '@/images/png/Screenshot 2024-05-31 044209.png'
import stains2 from '@/images/png/Screenshot 2024-05-31 011247.png'
import types3 from '@/images/png/Screenshot 2024-05-31 044231.png';
import stains3 from '@/images/png/Screenshot 2024-05-31 011316.png'



const Specialization = () => {
    return (
        <div className="mt-12 md:mt-24">
            <h2 className='pl-3 font-bold montserrat text-[18px] sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[46px]'>WE SPECIALIZE IN <span className='text-lime-400'>REMOVING</span> DIFFERENT TYPE OF STAINS</h2>
            <div className='flex items-center gap-4 lg:gap-8 xl:items-start flex-col xl:flex-row justify-evenly'>
                <Image src={types1} alt='type1' className='hidden lg:block'/>
                <Image src={stains1} alt='stains1' className='hidden lg:block' />
                <Image src={types2} alt='type2' className='hidden sm:block lg:hidden'/>
                <Image src={stains2} alt='stains2' className='hidden sm:block lg:hidden'/>
                <Image src={types3} alt='types3' className='block sm:hidden'/>
                <Image src={stains3} alt="stains3" className='block sm:hidden'/>
            </div>
        </div>
    )
}

export default Specialization