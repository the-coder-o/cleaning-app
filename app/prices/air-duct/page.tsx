'use client'
import React from 'react'
import HeroAirDuct from './components/hero-air-duct'
import Pricing from './components/pricing'
import Reasons from './components/4reasons'
import BenefitAir from './components/benefitAir'
import BeforeAfter from './components/before-after'

const AirDuct = () => {
  return (
    <div>
      <HeroAirDuct />
      <div className="container">
        <BenefitAir />
        <Pricing />
        <BeforeAfter />
        <Reasons />
      </div>
    </div>
  )
}

export default AirDuct