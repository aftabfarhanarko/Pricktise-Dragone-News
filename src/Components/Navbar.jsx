import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import usesar from "../assets/user.png";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const handelSignOut = () => {
    signOutUser();
  };
  console.log(user);
  return (
    <div className="flex items-center justify-between mt-7">
      <div></div>
      <div className="flex text-lg font-medium gap-5">
        <NavLink to="/catagory/1">Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Career</NavLink>
      </div>
      <div className="flex  gap-4 items-center">
        {user ? (
          <img className="w-10 h-10 border-red-600 rounded-full p-1" src={user.photoURL}></img>
        ) : (
          <img className="w-7 h-7" src={usesar}></img>
        )}

        {user ? (
          <Link
            onClick={handelSignOut}
            to="/formet/login"
            className="btn btn-neutral"
          >
            Logout
          </Link>
        ) : (
          <Link to="/formet/login" className="btn btn-neutral">
            Loging
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
