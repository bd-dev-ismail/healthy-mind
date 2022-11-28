import React, {  useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

import SingleService from './SingleService';

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    // console.log(loading);//small changes
    useEffect(()=> {
      setLoading(true)
        fetch("https://healthy-mind-server.vercel.app/services")
        .then(res => res.json())
        .then(data => {
          setLoading(false)
          setServices(data)
          // setLoading(!loading)
        })
    },[])
    return (
      <div className="container mx-auto">
        <Helmet>
          <title>Services -Healthy Mind</title>
        </Helmet>
        <div className="text-center my-10">
          <h3 className="text-5xl font-bold">My Services</h3>
          <p className="mt-3">
            An individual has not started living until he can rise above the
            narrow confines of his individualistic concerns to the broader
            concerns of all humanity. The bond <br /> of our common humanity is
            stronger than the divisiveness of our fears and prejudices.
          </p>
        </div>
        {loading && (
          <div className="w-16 container mx-auto flex justify-center items-center h-16 border-4 border-dashed rounded-full animate-spin border-secondary"></div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20">
          {services.map((service) => (
            <SingleService key={service._id} service={service}></SingleService>
          ))}
        </div>
      </div>
    );
};

export default Services;