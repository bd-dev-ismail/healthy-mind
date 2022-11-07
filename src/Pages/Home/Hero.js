import React from 'react';
import hero from '../../assets/hero-1.jpg';
import './Hero.css'
const Hero = () => {
    return (
      <div className="relative">
        <section
          className="dark:bg-gray-800 h-[70vh] dark:text-gray-100"
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
            <p className="text-5xl text-color-a">
              Care for Lifetime
            </p>
            <h1
              className="text-4xl font-bold leading-none sm:text-6xl text-color-b"
            >
              Personalized and Comfortable
            </h1>
            <p className="px-8 mt-8 mb-12 text-lg text-start">
              Imagine yourself having a fight with your romantic partner. The
              tension of the situation makes your limbic system run at full
              throttle and you become flooded with stress hormones like cortisol
              and adrenalin.
            </p>
            <div className="flex flex-wrap justify-center">
              <button className="px-8 py-3 m-2 text-lg font-semibold  text-white
               rounded bg-color-a">
                All Services
              </button>
          
            </div>
          </div>
        </section>
      </div>
    );
};

export default Hero;