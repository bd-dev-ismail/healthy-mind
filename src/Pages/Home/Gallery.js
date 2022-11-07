import React from 'react';

const Gallery = () => {
    return (
      <div>
        <section className="py-6 dark:bg-gray-800 container mx-auto">
          <div>
            <h3 className="text-5xl text-center font-bold">
              Counciling Patient <span className="text-color-b">Gallery</span>
            </h3>
            <p className="text-center my-3">
              Counseling psychologists help people recognize their strengths and
              find resources to cope with everyday <br /> problems and
              adversity. Counseling psychologists focus on interactions between
              people and their environment, <br /> and on educational and career
              development.
            </p>
          </div>
          <div className="container flex flex-col justify-center lg:p-10 mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              <img
                alt=".."
                className="object-cover w-96 dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/GkzGh88/img6.jpg"
              />
              <img
                alt=".."
                className="object-cover w-96 dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/K63PgNF/img5.jpg"
              />
              <img
                alt=".."
                className="object-cover w-96 dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/gZkGW1k/img4.webp"
              />
              <img
                alt=".."
                className="object-cover w-96 dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/3fnhczL/img3.webp"
              />
              <img
                alt=".."
                className="object-cover w-96 dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/9HkvSHj/img2.webp"
              />
              <img
                alt=".."
                className="object-cover w-96 dark:bg-gray-500 aspect-square"
                src="https://i.ibb.co/F02kT1T/img1.webp"
              />
            </div>
          </div>
        </section>
      </div>
    );
};

export default Gallery;