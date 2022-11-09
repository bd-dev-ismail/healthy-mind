import React from 'react';
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
const CallToAction = () => {
    return (
      <div className='my-10'>
        <div
          className="w-full bg-gray-500"
          style={{
            backgroundImage: "url('https://i.ibb.co/WkYJ5YW/bg6.jpg')",
            backgroundPosition: "center center",
            backgroundBlendMode: "multiply",
            backgroundSize: "cover",
          }}
        >
          <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
            <div>
              <div>
                <h1 className="text-3xl mt-5 flex antialiased font-semibold leading-none text-center text-gray-100">
                  <FaPhoneAlt className="mr-3" /> (+880) – 183 320 1582
                </h1>
              </div>
              <div>
                <p className="pt-2 pb-8  text-3xl antialiased text-center text-gray-100">
                  Please free to contact me for emergency case.
                </p>
              </div>
            </div>

            <div className="w-[38rem] hidden lg:block text-white">
              <p>
                Study hard until you can say “I am a doctor” everything is gonna
                be alright.” “Behind every fine doctor, there is always a
                nurse.” “Study to save lives.” “Only the healing art enables one
                to make a name for himself and at the same time give benefit to
                others
              </p>
              <div className='text-center mt-10 mb-5'>
                <Link>
                  <button className="btn bg-color-b">Contact Me <FaArrowRight className='ml-3'/></button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default CallToAction;