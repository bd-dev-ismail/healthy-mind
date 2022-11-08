import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const SingleService = ({ service }) => {
    const {bannerURL, price, name, desc} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <PhotoProvider>
        <PhotoView src={bannerURL}>
          <figure>
            <img src={bannerURL} alt="Shoes" className="h-64 cursor-pointer" />
          </figure>
        </PhotoView>
      </PhotoProvider>
      <div className="card-body bg-color-a text-white">
        <h2 className="card-title">{name}</h2>
        <p>Fees: ${price}</p>
        <p>{`${desc.slice(0, 100)}...`}</p>
        <div className="card-actions justify-end">
          <div className="btn btn-sm bg-color-b border-0">See Details</div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;