import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link,  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import registerimg from '../../assets/register.svg'
import { AuthContext } from '../../context/AuthProvider';
const Register = () => {
    const [loading, setLoading] = useState(false);
    const {
      registerUser,

      withGoogle,

      updateData,
    } = useContext(AuthContext);
   
   
    const navigate = useNavigate();
    
     
    const handalRegister = (e)=> {
      e.preventDefault();
      const form = e.target;
      const name = form.name.value;
      const photoURL = form.photo.value;
      const email = form.email.value;
      const password = form.password.value;
      // console.log(name, photoURL, email, password);
      setLoading(true);
      const profile = {
        displayName: name,
        photoURL: photoURL,
      };
      registerUser(email, password)
        .then((result) => {
          const user = result.user;
          const currentUser = {
            email: user?.email,
          };
          fetch("https://healthy-mind-server.vercel.app/jwt", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(currentUser),
          })
            .then((res) => res.json())
            .then((data) => {
              // console.log(data.token);
              setLoading(false);
              localStorage.setItem("healthy-mind", data?.token);
              form.reset();

              navigate("/");
              window.location.reload();
            });

          updateData(profile)
            .then(() => {})
            .catch((err) => {
              console.log(err);
              setLoading(false);
            });

          toast.success("Successfully Register");
        })
        .catch((err) => {
          toast.error(err.message);
          setLoading(false);
        });
    };

   
    //login with google
    const handalGoogle = ()=> {
      setLoading(true);
      withGoogle()
      .then(result=> {
        const user = result.user;
        const currentUser = {
          email: user?.email,
        };
        fetch("https://healthy-mind-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data.token);
            setLoading(false)
            localStorage.setItem("healthy-mind", data?.token);
           navigate("/");
          
            toast.success("Register With Google Sccessfully");
          });
        
      })
      .catch(err=> {
        toast.error(err.message);;
        setLoading(false);
      });
    }
    useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, []);
    return (
      <div>
        <Helmet>
          <title>Register -Healthy Mind</title>
        </Helmet>
        {loading && (
          <div className="w-16 container mx-auto flex justify-center items-center h-16 border-4 border-dashed rounded-full animate-spin border-secondary"></div>
        )}
        <div className="hero bg-base-200">
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
                    name="name"
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
                    name="photo"
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
                    name="email"
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
                    name="password"
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <Link
                      to="/login"
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
                <button
                  onClick={handalGoogle}
                  className="btn w-[320px] border-0 bg-color-a"
                >
                  Register With Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Register;