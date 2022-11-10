import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import imglogin from '../../assets/login.svg'
import { AuthContext } from '../../context/AuthProvider';
const Login = () => {
  const { loginUser, withGoogle } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handalLogin = (e)=> {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password);
    setLoading(true);
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
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
            //  console.log(data.token);
            localStorage.setItem("healthy-mind", data?.token);
            form.reset();
            navigate(from, { replace: true });
            toast.success("Login Sccessfull");
            setLoading(false);
          });
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };
  //google
  const handalGoogle = ()=> {
    setLoading(true);
    withGoogle()
    .then(result=> {
      const user = result.user;
      const currentUser = {
        email: user?.email
      }
      fetch("https://healthy-mind-server.vercel.app/jwt", {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
      })
      .then(res => res.json())
      .then(data => {
        // console.log(data.token);
        localStorage.setItem('healthy-mind', data?.token);
        console.log(user);
        navigate(from, { replace: true });
        toast.success("Sccessfully Login With Google");
        setLoading(false);
      })
      
    })
    .catch(err => {
      toast.error(err.message)
      setLoading(false);
    });
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
    return (
      
        <>
        {loading && (
          <div className="w-16 container mx-auto flex justify-center items-center h-16 border-4 border-dashed rounded-full animate-spin border-secondary"></div>
        )}
        <div>
        <div className="hero my-20 bg-base-200">
          <Helmet>
            <title>Login -Healthy Mind</title>
          </Helmet>
          <div className="hero-content flex-col-reverse lg:flex-row ">
            <div className="text-center lg:text-left lg:mr-20">
              <img
                src={imglogin}
                alt=""
                className="lg:w-[500px] lg:h-[500px]"
              />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handalLogin} className="card-body">
                <div>
                  <p className="text-center text-3xl font-bold">Login</p>
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
                      to="#"
                      className="label-text-alt text-error link link-hover"
                    >
                      Forgot password?
                    </Link>
                    <Link
                      to="/register"
                      className="label-text-alt font-semibold link link-hover"
                    >
                      new In Healthy Mind? Please Register
                    </Link>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn border-0 bg-color-b">Login</button>
                </div>
              </form>
              <div className="hero-content">
                <button
                  onClick={handalGoogle}
                  className="btn w-[320px] border-0 bg-color-a"
                >
                  Login With Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default Login;