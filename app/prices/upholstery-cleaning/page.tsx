'use client' 
import React from 'react'
import HeroUpholstery from './components/hero'
import Pricing from './components/pricing'
import Specialization from './components/specialization'
import BeforeAfter from './components/before-after'

const UpholsteryCleaning = () => {
  return (
    <div>
      <HeroUpholstery />
      <div className="container">
      <Pricing/> 
      <BeforeAfter />
      <Specialization/>
      </div>
          </div>
  )
}

export default UpholsteryCleaning