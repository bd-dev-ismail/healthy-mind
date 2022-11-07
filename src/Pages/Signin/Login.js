import React from 'react';
import { Link } from 'react-router-dom';
import imglogin from '../../assets/login.svg'
const Login = () => {
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col-reverse lg:flex-row ">
            <div className="text-center lg:text-left lg:mr-20">
              <img src={imglogin} alt="" className='lg:w-[500px] lg:h-[500px]'/>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div>
                  <p className="text-center text-3xl font-bold">Login</p>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link to="#" className="label-text-alt text-error link link-hover">
                      Forgot password?
                    </Link>
                    <Link to="/register" className="label-text-alt font-semibold link link-hover">
                       new In Healthy Mind? Please Register
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn border-0 bg-color-b">Login</button>
                </div>
              </form>
              <div className="hero-content">
                <button className="btn w-[320px] border-0 bg-color-a">
                  Login With Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;