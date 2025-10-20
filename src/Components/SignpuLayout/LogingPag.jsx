import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthProvider";

const LogingPag = () => {
  const [show, setShow] = useState(false);
  const {signUserFun} = useContext(AuthContext);

  const handelLogin = (e) => {
      e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
     
    signUserFun(email, password)
    .then(result => {
      console.log(result.user)
    }).catch(err => {
      console.log(err.message)
    })

  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
        <div className="card-body">
          <h1 className="text-lg font-semibold mb-5 text-center">
            Login your account
          </h1>

          <form onSubmit={handelLogin}>
            <fieldset className="fieldset">
              {/* Email */}
              <label className="label font-semibold">Email address</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />

              {/* Password */}
              <div className="relative">
                <label className="label font-semibold">Password</label>
                <input
                  type={show ? "text" : "password"}
                  className="input focus:outline-none"
                  placeholder="Password"
                  name="password"
                  required
                />
                <div
                  className="absolute right-7 top-8 z-10 cursor-pointer text-md"
                  onClick={() => setShow(!show)}
                >
                  {show ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>

              {/* Forgot password */}
              <div>
                <Link to="/reset" className="link link-hover">
                  Forgot password?
                </Link>
              </div>

              {/* Error */}
              {/* <p className="text-red-600">{error && error}</p> */}

              {/* Submit */}
              <button type="submit" className="btn btn-neutral mt-4 w-full">
                Login
              </button>

              {/* Register link */}
              <p className="font-semibold text-center mt-2">
                Don’t Have An Account?{" "}
                <Link
                  className="text-red-500 hover:underline"
                  to="/formet/register"
                >
                  Register
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogingPag;
