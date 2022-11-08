import React from 'react';

const Gallery = () => {
    return (
      <div>
        <section className="py-6 dark:bg-gray-800 container mx-auto">
          <div>
            <h3 className="text-5xl text-center font-bold">
              Patient <span className="text-color-b">Gallery</span>
            </h3>
            <p className="text-center my-3">
              Patient care is the core responsibility of a medical practitioner.
              They have to assure that <br /> the patient is given the best
              possible care. In hospitals or any other medical institution, the
              doctors and nurses take care of their <br /> patients very
              carefully.
            </p>
          </div>
          <div className="container flex flex-col justify-center lg:p-10 mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2">
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