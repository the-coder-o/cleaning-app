'use client' 
import React from 'react'
import HeroUpholstery from './components/hero'
import Specialization from './components/specialization'
import Pricing from './components/pricing'

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