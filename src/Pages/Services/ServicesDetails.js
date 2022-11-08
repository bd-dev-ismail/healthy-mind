import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayReviews from './DisplayReviews';
import ServiceReview from './ServiceReview';

const ServicesDetails = () => {
    const service = useLoaderData();
    const [reviews, setReviews] = useState([]);
  const [refresh, setRefresh] = useState(false);
    const {bannerURL, name, price, desc, _id} = service;
    useEffect(()=>{
      fetch(`http://localhost:5000/reviews?id=${_id}`)
        .then((res) => res.json())
        .then((data) => {
          setReviews(data);
          setRefresh(!refresh);
        });
    },[refresh, _id])
    return (
      <div className="container mx-auto my-10">
        <div>
          <h3 className="text-3xl font-bold text-center my-10">
            Details & Reviews About <span className="text-color-b">{name}</span>
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
        <div className="lg:flex justify-center items-center">
          <div>
            <ServiceReview service={service} key={service._id} />
          </div>
          <div className="my-20 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:ml-10">
            {reviews.map((singleReview) => (
              <DisplayReviews
                key={singleReview._id}
                singleReview={singleReview}
                setRefresh={setRefresh}
                refresh={refresh}
              ></DisplayReviews>
            ))}
          </div>
        </div>
      </div>
    );
};

export default ServicesDetails;