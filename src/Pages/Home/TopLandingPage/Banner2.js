import React from "react";
import img from "../../../Asset/image/banner.png";
import icon from "../../../Asset/icon/icons8-right-arrow-50.png";
const Banner2 = () => {
  return (
    // <div className='border w-full grid grid-cols-2  '>
    //     <div className=''>photo</div>
    //     <div>
    //         <p>save 20% off</p>
    //         <h1>Best Destination For Your Pets</h1>
    //         <button>Shop Now</button>
    //     </div>
    // </div>
    <div className="bg-[#CC2727]">
      <section className=" text-gray-800 max-w-[1370px] mx-auto ">
      <div className=" container flex flex-col justify-center p-2 mx-auto sm:py-10 lg:py-20 lg:flex-row lg:gap-x-16 ">
        <div className=" flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src={img}
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="  flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-lg  xl:max-w-lg lg:text-left">
            <p className="text-[#F3F3F3] text-2xl mb-5">SAVE 20% OFF</p>
          <h1 className="text-4xl font-bold leading-none sm:text-6xl text-gray-900">
            Best Destination
            <br />
            <span>For</span>
            <span className="text-white"> Your Pets</span>
          </h1>
          <div ><button className="bg-gray-200  mt-8 px-5 py-3 rounded-md flex items-center gap-3">SHOP NOW <img src={icon} className="w-5" alt=""/></button></div>
          
        </div>
      </div>
    </section>
    </div>
  );
};

export default Banner2;
