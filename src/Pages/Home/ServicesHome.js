import React from 'react';

const ServicesHome = () => {
    return (
      <div className="container mx-auto mb-20">
        <div>
          <h3 className="text-color-a font-semibold text-2xl">
            Committed To <br />{" "}
            <span className="text-color-b font-bold text-5xl">Excellence</span>
          </h3>
        </div>
        <div>
          <div class="max-w-2xl mx-auto">
            <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
              <a href="/">
                <img
                  class="rounded-t-lg"
                  src="https://flowbite.com/docs/images/blog/image-1.jpg"
                  alt="..."
                />
              </a>
              <div class="p-5">
                <a href="/">
                  <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                </a>
                <p class="font-normal text-gray-700 mb-3 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
                <a
                  href="/"
                  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <svg
                    class="-mr-1 ml-2 h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServicesHome;