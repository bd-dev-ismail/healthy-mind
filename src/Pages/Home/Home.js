import React from 'react';

import CallToAction from './CallToAction';
import Care from './Care';
import Gallery from './Gallery';
import Hero from './Hero';
import ServicesHome from './ServicesHome';

const Home = () => {
   
    return (
      <div>
        <Hero />
        <ServicesHome />
        <Care />
        <CallToAction />
        <Gallery />
      
      </div>
    );
};

export default Home;