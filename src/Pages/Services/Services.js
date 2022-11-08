import React, { useEffect, useState } from 'react';
import SingleService from './SingleService';

const Services = () => {
    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(()=> {
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
      <div className="container mx-auto">
        <div className="text-center my-10">
          <h3 className="text-5xl font-bold">My Services</h3>
          <p className='mt-3'>
            An individual has not started living until he can rise above the
            narrow confines of his individualistic concerns to the broader
            concerns of all humanity. The bond <br /> of our common humanity is stronger
            than the divisiveness of our fears and prejudices.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-20'>
            {
                services.map(service => <SingleService key={services._id} service={service}></SingleService>)
            }
        </div>
        
      </div>
    );
};

export default Services;