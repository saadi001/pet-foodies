import React from "react";

const Discount = () => {
  return (
    <div className="bg-[#FFA800] py-16">
      <div className="2xl:max-w-7xl 2xl:mx-auto xl:mx-auto xl:max-w-5xl lg:mx-20 md:mx-12 mx-5">
        <p className="text-center text-6xl font-medium">
          Get <span className="text-white">20% off</span> on <br />
          <span className="mt-3 inline-block">First Purchase</span>
        </p>
        {/* form  */}
        <div className="max-w-2xl mx-auto mt-12">
          <form>
            <div className="px-8">
              <input
                type="text"
                placeholder="Enter your email address"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
              <input
                type="text"
                placeholder="Create password"
                className="block mt-8 w-full px-4 py-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
              <input type="submit" className="border w-full mt-8 py-2 rounded-md bg-[#1A1A1A] text-white border-none" value={"REGISTER IT NOW"}></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Discount;
