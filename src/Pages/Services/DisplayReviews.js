import React from 'react';
import Star from './Star';

const DisplayReviews = ({ singleReview }) => {
  const { img, review , name, rating} = singleReview;
  return (
    <div>
      <div className="container flex flex-col w-full max-w-lg h-48 p-6 mx-auto divide-y rounded-md divide-gray-800 bg-color-a text-gray-100">
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <div>
              <img
                src={img}
                alt=""
                className="object-cover w-12 h-12 rounded-full dark:bg-gray-500"
              />
            </div>
            <div>
              <h4 className="font-bold">{name}</h4>
            </div>
          </div>
          <div className="flex items-center space-x-2 dark:text-yellow-500">
            <Star stars={rating}></Star>
            <span className="text-xl font-bold">{rating}</span>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
          <p>{review}</p>
          {/* w-5 h-5 fill-current */}
        </div>
      </div>
    </div>
  );
};

export default DisplayReviews;