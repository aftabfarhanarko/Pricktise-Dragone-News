import React from 'react';
import { FaGithub } from "react-icons/fa";
import facbok from "../assets/fb.png";
import insta from "../assets/instagram.png";
import twiter from "../assets/twitter.png";
import swming from "../assets/swimming.png";
import clas from "../assets/class.png";
import play from "../assets/playground.png";
import bg from "../assets/bg.png";

const RightSideBar = () => {
    return (
          <div>
      <div>
        <h1 className="font-semibold">Login With</h1>

        <div className="mt-4 flex-col">
          <button className="btn bg-white  text-blue-500 border-[#2083ca]">
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
        

          <button className="btn mt-4  text-black border-gray-400">
            <FaGithub /> Login with GitHub
          </button>
        </div>
      </div>
      <div className="mt-5">
        <h1 className="font-semibold"> Find Us On</h1>
        <div className=" mt-3 border rounded-md border-base-300">
          <div className="flex items-center gap-3  p-3">
            <div className="bg-base-300 p-2 px-3 rounded-full">
              <img src={facbok}></img>
            </div>
            <p className="text-[14px] text-accent">Facbook</p>
          </div>
          <div className="flex items-center gap-3 border-t border-base-300  p-3">
            <div className="bg-base-300 p-2  rounded-full">
              <img src={insta}></img>
            </div>
            <p className="text-[14px] text-accent">Instagram</p>
          </div>
          <div className="flex items-center gap-3 border-t  border-base-300 p-3">
            <div className="bg-base-300 p-2 rounded-full">
              <img src={twiter}></img>
            </div>
            <p className="text-[14px] text-accent">Twiter</p>
          </div>
        </div>
      </div>

      <div className="bg-base-300 p-3 py-5 mt-6 rounded-lg">
        
        <img src={swming}></img>
        <img src={clas}></img>
        <img src={play}></img>
        <img src={bg}></img>
      </div>
    </div>
    );
};

export default RightSideBar;