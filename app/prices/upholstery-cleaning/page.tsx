'use client' 
import React from 'react'
import HeroUpholstery from './components/hero'
import Pricing from './components/pricing'
import Specialization from './components/specialization'

const UpholsteryCleaning = () => {
  return (
    <div>
      <HeroUpholstery />
      <div className="container">
      <Specialization/>
      <Pricing/> 
      </div>
          </div>
  )
}

export default UpholsteryCleaning