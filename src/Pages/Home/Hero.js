import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import hero from '../../assets/hero-1.jpg';
import './Hero.css'
const Hero = () => {
    return (
      <div className="mb-20">
        <section
          className="dark:bg-gray-800 h-full dark:text-gray-100"
          style={{
            background: `url(${hero})`,
            backgroundRepeat: "noRepeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            id="hero-text"
            className="container mx-auto flex flex-col items-start px-4 py-16 text-start md:py-32 md:px-10 lg:px-32 xl:max-w-3xl"
          >
            <p className="text-5xl text-color-a">Care for Lifetime</p>
            <h1 className="text-4xl font-bold leading-none sm:text-6xl text-color-b">
              Personalized and Comfortable
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg text-start">
              Hi! I am Doctor Md Ismail Hossen. I am gratuated in MBBS , FCPS,
              Medicine (part 2).In Chittagong Medical Hospital I am a Senior
              doctor of Psychology word.Last 8 years I am opening my
              chamber.Successfully 1200+ patitent have running in my chamber.
            </p>
            <div className="flex flex-wrap justify-center ">
              <Link to="/services">
                <button
                  className="px-8 py-3 m-2 text-lg font-semibold  text-white
               rounded bg-color-a flex items-center justify-center"
                >
                 See Services <FaArrowRight className='ml-3'/>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Hero;