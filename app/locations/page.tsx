'use client'

import React from 'react';

import Services from './components/services';
import ChooseUs from './components/chooseUs';
import CompletedJobs from './components/completedJobs';
import HeroLocation from './components/hero-location';
import Faq from './components/faq';
import Opinions from './components/opinions';




const Page = () => {
  return <div className=''>
    <HeroLocation />
    <div className="container">
      <Services />
      <ChooseUs />
      <CompletedJobs />
      <Faq />
    </div>
      <Opinions />
  </div>;
};

export default Page;