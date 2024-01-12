import React from "react";
import rightArrow from "../../../Asset/icon/icons8-right-arrow-50.png";
import food1 from "../../../Asset/image/food1.png";
import food2 from "../../../Asset/image/food2.png";
import food3 from "../../../Asset/image/food4.png";
import love from "../../../Asset/icon/icons8-love-48.png";

const PetFoodies = () => {
  return (
    <div className="w-full py-16">
      <div className="flex justify-between items-center">
        <p className="text-4xl">Pet Foodies</p>
        <button className="flex items-center gap-2  px-3 py-2 rounded-md border ">
          See All<img src={rightArrow} alt="" className="w-4"></img>
        </button>
      </div>
      {/* cards */}
      <div className="grid grid-cols-4 gap-x-5 mt-12">
        <div>
          <div className="border rounded-md shadow">
            <div className="w-3/4 mx-auto p-5 ">
              <img src={food1} alt="" className="h-40"></img>
            </div>
          </div>
          <div className="mt-4 pl-1">
            <p className="text-lg font-medium">Thick Jacket</p>
            <p>৳ 1200</p>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <button className="border px-5 py-2 shadow text-sm rounded-md">Add To Cart</button>
            <button className="border px-3 py-1 shadow rounded-md"><img src={love} alt="" className="w-7"></img></button>
          </div>
        </div>

        <div>
          <div className="border rounded-md shadow">
            <div className="w-3/4 mx-auto p-5 ">
              <img src={food2} alt="" className="h-40"></img>
            </div>
          </div>
          <div className="mt-4 pl-1">
            <p className="text-lg font-medium">Furs pike</p>
            <p>৳ 2500</p>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <button className="border px-5 py-2 shadow text-sm rounded-md">Add To Cart</button>
            <button className="border px-3 py-1 shadow rounded-md"><img src={love} alt="" className="w-7"></img></button>
          </div>
        </div>

        <div>
          <div className="border rounded-md shadow">
            <div className="w-3/4 mx-auto p-5 ">
              <img src={food3} alt="" className="h-40"></img>
            </div>
          </div>
          <div className="mt-4 pl-1">
            <p className="text-lg font-medium">Corn</p>
            <p>৳ 1700</p>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <button className="border px-5 py-2 shadow text-sm rounded-md">Add To Cart</button>
            <button className="border px-3 py-1 shadow rounded-md"><img src={love} alt="" className="w-7"></img></button>
          </div>
        </div>

        <div>
          <div className="border rounded-md shadow">
            <div className="w-3/4 mx-auto p-5 ">
              <img src={food1} alt="" className="h-40"></img>
            </div>
          </div>
          <div className="mt-4 pl-1">
            <p className="text-lg font-medium">Grain</p>
            <p>৳ 2200</p>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <button className="border px-5 py-2 shadow text-sm rounded-md">Add To Cart</button>
            <button className="border px-3 py-1 shadow rounded-md"><img src={love} alt="" className="w-7"></img></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetFoodies;
