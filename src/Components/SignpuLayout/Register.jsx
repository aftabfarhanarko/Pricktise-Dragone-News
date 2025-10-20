import React, { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthProvider";

const Register = () => {
  const [show, setShow] = useState(false);
  const { creatUserFun, upDeatProfiles, emailveriFy } = useContext(AuthContext);
  console.log(creatUserFun);

  const handelRegister = (e) => {
    e.preventDefault();
    const email = e.target.email?.value;
    const password = e.target.password?.value;
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;

    const profile = {
      displayName,
      photoURL,
    };

    console.log({ email, password, name });
    creatUserFun(email, password)
      .then((result) => {
        console.log(result.user);

        upDeatProfiles(profile)
          .then((resd) => {
            console.log(resd.user);
            
            emailveriFy()
              .then((my) => {
                console.log(my);
              })
              .catch((err) => {
                console.log(err.message);
              });
          })
          .catch((ro) => {
            console.log(ro.message);
          });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-lg font-semibold mb-5 text-center">
            Register your account
          </h1>
          <form onSubmit={handelRegister}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label font-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                className="input  focus:outline-none "
                placeholder="enter your name"
                required
              />
              {/* {erra && <p className="text-xs text-red-500">{erra}</p>} */}

              {/* Photo Url */}
              <label className="label font-semibold">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input focus:outline-none"
                placeholder="photo url"
              />

              {/* Email */}
              <label className="label font-semibold">Email address</label>
              <input
                type="email"
                name="email"
                className="input focus:outline-none"
                placeholder="email"
                required
              />
              {/* {era && <p className="text-xs text-red-500">{era}</p>} */}

              <div className="relative ">
                <label className="label font-semibold">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input focus:outline-none"
                  placeholder="password"
                  required
                />
                <div
                  className="absolute right-7 top-8 z-10  cursor-pointer text-md"
                  onClick={() => setShow(!show)}
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
              {/* Remember me */}
              <label className="label cursor-pointer mt-2">
                <input type="checkbox" name="rememberMe" className="checkbox" />
                <span className="label-text">Remember me</span>
              </label>

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <p className="font-semibold text-center mt-2">
                Dont’t Have An Account ?{" "}
                <Link
                  className="text-red-500 hover:underline"
                  to="/formet/login"
                >
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
