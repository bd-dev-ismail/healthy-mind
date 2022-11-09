import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Star from '../Services/Star';
import { confirmAlert } from "react-confirm-alert";
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { Link } from 'react-router-dom';
const MySingleReview = ({ rev, setRefresh , refresh}) => {
  const { img, name, rating, review, serviceId, _id } = rev;
  const [service, setService] = useState({});
  
  
  //for service name
  useEffect(() => {
    fetch(`http://localhost:5000/services/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [serviceId]);
  //working on delete
  const handalDelete = (id) => {
   
    fetch(`http://localhost:5000/myreview/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("healthy-mind")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message) {
          toast.warning(data.message);
        }
        if (data.deletedCount > 0) {
          toast.warning("You Delete a Review");
          setRefresh(refresh);
        }
      });
  };
   const submit = (id) => {
     confirmAlert({
       title: `Service Name: ${service.name}`,
       message: `Are you sure Want To Delete this Review.`,
       buttons: [
         {
           label: "Yes",
           onClick: () => handalDelete(id),
         },
         {
           label: "No",
           //onClick: () => alert('Click No')
         },
       ],
     });
   };
  
  return (
    <div>
      <div className="container flex flex-col w-full max-w-lg h-60 p-6 mx-auto divide-y rounded-md divide-gray-800 bg-color-a text-gray-100">
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
              <p>
                <span className='font-semibold'>Service Name:</span> {service?.name}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 dark:text-yellow-500">
            <Star stars={rating}></Star>
            <span className="text-xl font-bold">{rating}</span>
          </div>
        </div>
        <div className="p-4 space-y-2 text-sm dark:text-gray-400">
          <p className="mb-5">{review}</p>
          <div className="flex justify-between">
            <Link to={`/edit/${_id}`}>
              {" "}
              <button className="btn btn-sm bg-color-b border-0">Edit</button>
            </Link>
            <button onClick={() => submit(_id)} className="btn btn-sm ml-3">
              Delete
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default MySingleReview;