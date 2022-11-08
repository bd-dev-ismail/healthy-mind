import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
const AddServices = () => {
    const [startDate, setStartDate] = useState(new Date());
    const {user} = useContext(AuthContext);
    const handalService = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const bannerURL = form.bannerURL.value;
        const email = user?.email;
        const price = form.price.value;
        const rating = form.rating.value;
        const date = startDate;
        const desc = form.desc.value;
        if(rating.length > 1 || rating > 5){
           return toast.warning('Rating Will be Number Of Under Five (5)', {autoClose: 1000});
        }
        // console.log(name, bannerURL, email, price,rating,date, desc);
        const services = {
            name,
            bannerURL,
            email,
            price,
            rating,
            date,
            desc
        }
        console.log(services);
        fetch('http://localhost:5000/services', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(services)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          toast.success('Successfully Add a Service');
          form.reset();
        })
        .catch(err => console.log(err))
        
    }
    return (
      <div className="container mx-auto flex justify-center my-20 lg:my-0 md:my-0 items-center min-h-screen ">
        <section className="p-6 bg-gray-800  text-gray-900 rounded-md">
          <form
            onSubmit={handalService}
            className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
              <div className="space-y-2 col-span-full lg:col-span-1 text-white">
                <p className="font-medium">Services Inormation</p>
                <p className="text-xs">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Adipisci fuga autem eum!
                </p>
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-sm text-white">
                    Service Name
                  </label>
                  <input
                    required
                    name="name"
                    id="firstname"
                    type="text"
                    placeholder="Service Name"
                    className="w-full  rounded-md input input-bordered text-black"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="bannerURL" className="text-sm text-white">
                    Banner URL
                  </label>
                  <input
                    required
                    name="bannerURL"
                    id="bannerURL"
                    type="text"
                    placeholder="Banner URL"
                    className="w-full rounded-md input input-bordered text-black"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm text-white">
                    Email
                  </label>
                  <input
                    defaultValue={user?.email}
                    name="email"
                    readOnly
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="w-full rounded-md input input-bordered text-black"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="price" className="text-sm text-white">
                    Price
                  </label>
                  <input
                  name='price'
                    id="price"
                    type="number"
                    placeholder="Enter Price"
                    className="w-full rounded-md input input-bordered text-black"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="rating" className="text-sm text-white">
                    Rating
                  </label>
                  <input
                  name='rating'
                    id="rating"
                    type="number"
                    placeholder="Enter Rating Of One Number Under 5"
                    className="w-full rounded-md input input-bordered text-black"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="date" className="text-sm text-white">
                    Date
                  </label>
                  <div className="">
                    <DatePicker
                      className="input input-bordered w-full flex items-center"
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                    />
                  </div>
                </div>
               
                <div className="col-span-full">
                  <label htmlFor="desc" className="text-sm text-white">
                    Description
                  </label>
                  
                    
                    <textarea
                    name='desc'
                      className="textarea textarea-bordered w-full h-36"
                      placeholder="Service Description"
                      
                    ></textarea>
                    
                  
                </div>
                <div className='mt-5'>
                    <button type="submit" className='bg-color-a py-3 rounded-md text-white font-semibold px-4'>Add Service</button>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </div>
    );
};

export default AddServices;