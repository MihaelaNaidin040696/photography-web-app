import Hero from '@/components/Hero';
import Portofolio from '@/components/Portofolio';
import React from 'react';

const work = () => {
  return (
  <div>
    <Hero heading='My work' message='This is one of my recent work traveling the world.'/>
    <Portofolio />
  </div>
  )
};

export default work;
