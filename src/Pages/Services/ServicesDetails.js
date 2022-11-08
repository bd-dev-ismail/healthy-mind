import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const service = useLoaderData();
    const {bannerURL, name, price, desc} = service;
    return (
      <div className="container mx-auto my-10">
        <h3 className="text-3xl font-bold text-center my-10">
          Details & Reviews About <span className='text-color-b'>{name}</span>
        </h3>
        <div className="card lg:card-side bg-base-100 shadow-xl rounded-lg lg:border-t-2 lg:border-r-2">
          <div className="lg:grid grid-cols-2">
            <div>
              <figure>
                <img src={bannerURL} alt="Album" className="rounded-lg" />
              </figure>
            </div>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p className="font-semibold">Fees: ${price}</p>
              <p>
                <span className="font-bold">Description:</span> {desc}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ServicesDetails;