import React from 'react';
import Care from './Care';
import Hero from './Hero';
import ServicesHome from './ServicesHome';

const Home = () => {
    return (
        <div>
            <Hero/>
            <ServicesHome/>
            <Care/>
        </div>
    );
};

export default Home;