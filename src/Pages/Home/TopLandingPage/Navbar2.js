import React from "react";
import logo from "../../../Asset/icon/logo.png"
import icon from "../../../Asset/icon/icons8-signin-48.png"
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className="w-full bg-white">
      {/* top nav */}
      <div className="flex justify-between items-center py-3 shadow-sm px-12">
        <div className="flex items-center gap-8">
          <div className="flex items-center">
           
            <img src={logo} alt="" className="w-28"></img>
          </div>
          {/* input  */}
          <div className="relative w-96">
            <span class="absolute inset-y-0 right-0 flex items-center pr-3">
              <svg
                className="w-5 h-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>

            <input
              type="text"
              className="w-full py-2 pl-3 pr-4 text-gray-700 bg-white border rounded-[25px] focus:border-blue-400  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="flex items-center gap-x-12">
          <div className="text-right">
            <p className="text- font-medium">Phone</p>
            <p className="text-xs">+8801836530309</p>
          </div>
          <div className="text-right">
            <p className="text- font-medium">Email</p>
            <p className="text-xs">joy51-012@diu.edu.bd</p>
          </div>
         
          
        </div>
      </div>
      {/* bottom nav  */}
      <div className="w-full flex justify-between items-center px-12 py-[10px]">
        <div>Shop by Categories</div>
        <div className="flex items-center gap-14">
            <div>Home</div>
            <div>Shop</div>
            <div>Blog</div>
            <div>Contact</div>
            <div>Donation</div>
        </div>
        <Link to={'/login'} className="w-6"><img src={icon} alt="" className="w-full"></img></Link>
      </div>
    </div>
  );
};

export default Navbar2;
