import React from "react";
import { NavLink } from "react-router";
import user from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mt-7">
      <div></div>
      <div className="flex text-lg font-medium gap-5">
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Career</NavLink>
      </div>
      <div className="flex  gap-4 items-center">
        <img src={user}></img>
        <button className="btn btn-neutral">Loging</button>
      </div>
    </div>
  );
};

export default Navbar;
