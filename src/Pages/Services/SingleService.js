import React from 'react';

const SingleService = ({ service }) => {
    const {bannerURL, price, name, desc} = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={bannerURL} alt="Shoes" className="h-64" />
      </figure>
      <div className="card-body bg-color-a text-white">
        <h2 className="card-title">
          {name}
          {/* <div className="badge badge-secondary">asdfg</div> */}
        </h2>
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