'use client'
import React from 'react'
import HeroAirDuct from './components/hero-air-duct'
import BeforeAfterAir from './components/before-after'
import Pricing from './components/pricing'
import Reasons from './components/4reasons'

const AirDuct = () => {
  return (
    <div>
      <HeroAirDuct />
      <div className="container">
        <BeforeAfterAir />
        <Pricing />
        <Reasons />
      </div>
    </div>
  )
}

export default AirDuct