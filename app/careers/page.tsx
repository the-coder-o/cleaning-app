'use client'
import React from 'react';
import Hero from './components/hero';
import JoinTeam from './components/join-team';
import Opportunities from './components/opportunities';
import SubmitForm from './components/SubmitForm';

const Page = () => {
  return <div className=''>
    <Hero/>
    <div className="container">
      <JoinTeam />
      <Opportunities />
      <SubmitForm/>
    </div>
  </div>;
};
export default Page;