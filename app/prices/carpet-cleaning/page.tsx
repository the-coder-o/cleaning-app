'use client'
import React from 'react'
import Hero from './components/carpet-hero'
import BeforeAfter from './components/before-after'
import Specialization from './components/specialization'
import Pricing from './components/pricing'


const CarpetCleaning = () => {
  return (
    <div className=''>
      <Hero/>
      <div className="container">
        {/* <BeforeAfter /> */}
        <Pricing/>
        <Specialization />
      </div>
    </div>
  )
}

export default CarpetCleaning  