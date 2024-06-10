import Modal from '@/components/Modal'
import { Card, CardHeader } from '@/components/ui/card'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import React from 'react'

const Reasons = () => {
  return (
    <div>
         <div className="mt-12 md:mt-24">
                <h2 className='pl-3 text-black/70 font-bold montserrat text-[18px] sm:text-[24px] md:text-[36px] lg:text-[40px] xl:text-[42px]'>4 REASONS TO HAVE YOUR DRYER VENT</h2>
                <div className="flex gap-3 px-2 flex-wrap justify-between mt-5">
                    <Card className='px-6 py-3 w-full'>
                        <CardHeader className='text-black shadow-none'>
                            Recuced fire risk
                        </CardHeader>
                        
                    </Card>
                    <Card className='px-6 py-3 w-full'>
                        <CardHeader className='text-black shadow-none '>
                            Fewer repaires
                        </CardHeader>
                        
                    </Card>
                    <Card className='px-6 py-3 w-full'>
                        <CardHeader className='text-black shadow-none'>
                            Shorter drying times
                        </CardHeader>
                        
                    </Card>
                    <Card className='px-6 py-3 w-full'>
                        <CardHeader className='text-black shadow-none'>
                            Lower energy bills
                        </CardHeader>
                        
                    </Card>
                </div>
            </div>
    </div>
  )
}

export default Reasons