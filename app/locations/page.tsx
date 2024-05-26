'use client'

import React from 'react';

import Services from './components/services';
import ChooseUs from './components/chooseUs';
import CompletedJobs from './components/completedJobs';
import HeroLocation from './components/hero-location';




const Page = () => {
  return <div className=''>
    <HeroLocation />
    <div className="container">
      <Services />
      <ChooseUs />
      <CompletedJobs />
    </div>
  </div>;
};

export default Page;