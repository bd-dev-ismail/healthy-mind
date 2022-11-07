import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import registerimg from '../../assets/register.svg'
import { AuthContext } from '../../context/AuthProvider';
const Register = () => {
    const {registerUser} = useContext(AuthContext);
    const navigate = useNavigate('/');
    const handalRegister = (e)=> {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const photoURL = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
      // console.log(name, photoURL, email, password);
      registerUser(email, password)
      .then(result=> {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate('/');
        toast.success('Successfully Register');
        
      })
      .catch(err => console.log(err))
    }
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col-reverse lg:flex-row-reverse ">
            <div className="text-center lg:text-left lg:mr-20">
              <img src={registerimg} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handalRegister} className="card-body">
                <div>
                  <p className="text-center text-3xl font-bold">Register</p>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                  required
                  name='name'
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                  required
                  name='photo'
                    type="text"
                    placeholder="PhotoURL"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                  required
                  name='email'
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
                  required
                  name='password'
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    
                    <Link
                      to="/register"
                      className="label-text-alt font-semibold link link-hover"
                    >
                      Already have an accont? Please Login
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn border-0 bg-color-b">Register</button>
                </div>
              </form>
              <div className="hero-content">
                <button className="btn w-[320px] border-0 bg-color-a">
                  Login With Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;