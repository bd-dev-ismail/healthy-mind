import React, { useContext, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider';


const ServiceReview = ({ service , refresh, setRefresh}) => {
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState(null);
  const { user } = useContext(AuthContext);
  
  // console.log(review);
  const sendReviews = {
    name: user?.displayName,
    img: user?.photoURL,
    review,
    rating,
    serviceId: service?._id,
    email: user?.email,
  };
  
  const handalReview = (e)=>{
    e.preventDefault();
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sendReviews),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Review Added");
          e.target.reset();
          setRefresh(refresh);
        }
      });
  }
 
  return (
    <div className="my-20">
      {user?.email ? (
        <>
          <div className="flex flex-col w-96 p-8 shadow-sm rounded-xl lg:p-12 bg-color-a text-gray-100">
            <div className="flex flex-col items-center w-full">
              <h2 className="text-3xl font-semibold text-center">
                Write Your Review
              </h2>
              <div className="flex flex-col items-center py-6 space-y-3">
                <span className="text-center">
                  Is your patient/ You better than before?
                </span>
              </div>
              <div className="flex">
                <h3 className="font-bold">Select Rating</h3>
                <select
                  onClick={(e) => setRating(e.target.value)}
                  className="px-3 py-2 ml-5 rounded-lg mb-2 bg-black border-0"
                >
                  <option className="border-0" value="1">
                    1 Star
                  </option>
                  <option className="border-0" value="2">
                    2 Star
                  </option>
                  <option className="border-0 " value="3">
                    3 Star
                  </option>
                  <option className="border-0" value="4">
                    4 Star
                  </option>
                  <option className="border-0" value="4.5">
                    4.5 Star
                  </option>
                  <option className="border-0" value="5">
                    5 Star
                  </option>
                </select>
              </div>
              <div>
                <p className="font-semibold mb-2">
                  Your Current Given Rating is {rating}
                </p>
              </div>
              <form onSubmit={handalReview} className="flex flex-col w-full">
                <textarea
                  className="rounded-md p-4 text-black border-0"
                  onChange={(e) => setReview(e.target.value)}
                  name="review"
                  placeholder="Write Review"
                  required
                  cols="30"
                  rows="3"
                ></textarea>
                <button
                  type="submit"
                  className="py-4 my-8 font-semibold rounded-md text-gray-100 bg-color-b"
                >
                  Post Review
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <>
          <div>
            <p className="text-3xl font-bold text-color-b">
              If You Want to Write Review? <br /> Frist need to{" "}
              <Link to="/login">
                <button className="btn bg-color-b border-0">
                  Login <FaArrowRight className="ml-3" />
                </button>
              </Link>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceReview;