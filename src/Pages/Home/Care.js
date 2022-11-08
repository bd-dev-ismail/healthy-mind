import React from 'react';
import mind from '../../assets/mind.jpg';
import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
const Care = () => {
    return (
      <div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between lg:flex-row-reverse">
            <div className="mb-10 lg:max-w-lg lg:pr-5 lg:mb-0">
              <div className="max-w-xl mb-6">
                <div>
                  <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider badge badge-info bg-color-a uppercase rounded-full text-white ">
                    Healthy Mind
                  </p>
                </div>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  Caring <span className="text-color-b">About Your </span>
                  Mind{" "}
                  <span className="inline-block text-deep-purple-accent-400">
                    Health
                  </span>
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  I promise you nothing is as chaotic as it seems. Nothing is
                  worth diminishing your health. Nothing is worth poisoning
                  yourself into stress, anxiety, and fear. behavioral health
                  practice with a focus on your mental health and well-being.
                </p>
                <div className="flex my-3">
                  <img src={img1} alt="" />
                  <img src={img2} alt="" />
                  <img src={img3} alt="" />
                </div>
              </div>
              <div className="flex flex-col items-center md:flex-row">
                <Link
                  to="/blog"
                  aria-label=""
                  className="inline-flex items-center font-semibold btn bg-color-a border-0"
                >
                  Read Blogs <FaArrowRight className="ml-3" />
                </Link>
              </div>
            </div>
            <div className="relative lg:w-1/2">
              <img
                className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                src={mind}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Care;