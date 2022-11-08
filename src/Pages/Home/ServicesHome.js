import React, { useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SingleServicesHome from './SingleServicesHome';

const ServicesHome = () => {
  const [services, setServices] = useState([]);
  console.log(services);
  const size = 3;
  useEffect(() => {
    fetch(`http://localhost:5000/services?size=${size}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
    return (
      <div className="container mx-auto mb-20">
        <div>
          <h3 className="text-color-a font-semibold text-2xl">
            Committed To <br />{" "}
            <span className="text-color-b font-bold text-5xl">Excellence</span>
          </h3>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-14">
            {services.map((service) => (
              <SingleServicesHome
                key={service._id}
                service={service}
              ></SingleServicesHome>
            ))}
          </div>
          <div className="text-center">
            <Link to="/services">
              <button className="btn bg-color-a border-0">
                See All Services <FaArrowRight className='ml-3'/>
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default ServicesHome;