import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditMyReview = () => {
     const [newReview, setNewReview] = useState(null);
     const singleReview = useLoaderData();
     const { review,  serviceId , _id} = singleReview;
     const [service, setService] = useState({});
     const navigate = useNavigate();
     //sercie details
     useEffect(()=>{
        fetch(`https://healthy-mind-server.vercel.app/services/${serviceId}`)
        .then(res => res.json())
        .then(data =>{
            // console.log(data);
            setService(data);
        })
     },[serviceId])
     const update = {
       review: newReview,
     };
    
     const handalReviewEdit = (e)=>{
        e.preventDefault();
        if (newReview.length > 50) {
          return toast.warning(
            "Review Sholud be Contain 50 Characters  only!",
            { autoClose: 1000 }
          );
        }
        fetch(`https://healthy-mind-server.vercel.app/myreviewupdate/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("healthy-mind")}`,
          },
          body: JSON.stringify(update),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data?.message) {
              toast.warning(data?.message);
            }
            if (data?.modifiedCount > 0) {
              toast.success("Review Update Successfully");
              setNewReview("");
              navigate("/myreviews");
            }
          });
     }
    return (
      <div className="container mx-auto my-20 flex justify-center items-center">
        <Helmet>
          <title>Edit Review -Healthy Mind</title>
        </Helmet>
        <div className="flex flex-col w-96 p-8 shadow-sm rounded-xl lg:p-12 bg-color-a text-gray-100">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-3xl font-semibold text-center">
              You are updating service:{" "}
              <span className="text-color-b">{service?.name}</span>
            </h2>
            <div className="flex flex-col items-center py-6 space-y-3">
              <span className="text-center">
                Is your patient/ You better than before?
              </span>
            </div>

            <form onSubmit={handalReviewEdit} className="flex flex-col w-full">
              <label htmlFor="review">Review Message</label>
              <textarea
                className="rounded-md p-4 text-black border-0"
                onChange={(e) => setNewReview(e.target.value)}
                defaultValue={review}
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
                Update Review
              </button>
            </form>
          </div>
        </div>
      </div>
    );
};

export default EditMyReview;