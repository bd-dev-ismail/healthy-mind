import React from 'react';
import { Helmet } from 'react-helmet';

import CallToAction from './CallToAction';
import Care from './Care';
import Gallery from './Gallery';
import Hero from './Hero';
import ServicesHome from './ServicesHome';

const Home = () => {
   
    return (
      <div>
        <Helmet>
          <title>Home -Healthy Mind</title>
        </Helmet>
        <Hero />
        <ServicesHome />
        <Care />
        <CallToAction />
        <Gallery />
      
      </div>
    );
};

export default Home;