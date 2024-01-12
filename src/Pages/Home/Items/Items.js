import React from "react";
import food from '../../../Asset/icon/food.png'
import cat from '../../../Asset/icon/cat.png'
import bird from '../../../Asset/icon/bird.png'
import dog from '../../../Asset/icon/dog.png'
import fish from '../../../Asset/icon/fish.png'

const Items = () => {
  return (
    <div className="py-16 w-full">
      <div className="w-full flex justify-between items-center">
        <div >
          <div className="w-24 h-20">
            <img src={food} alt="" className="w-full"></img>
          </div>
          <p className="text-lg font-medium text-center capitalize">Food</p>
        </div>
        <div >
          <div className="w-24 h-20">
            <img src={cat} alt="" className="w-full"></img>
          </div>
          <p className="text-lg font-medium text-center capitalize">cat</p>
        </div>
        <div >
          <div className="w-24 h-20">
            <img src={bird} alt="" className="w-full"></img>
          </div>
          <p className="text-lg font-medium text-center capitalize">bird</p>
        </div>
        <div >
          <div className="w-24 h-20">
            <img src={dog} alt="" className="w-full"></img>
          </div>
          <p className="text-lg font-medium text-center capitalize">dog</p>
        </div>
        <div >
          <div className="w-24 h-20">
            <img src={fish} alt="" className="w-full"></img>
          </div>
          <p className="text-lg font-medium text-center capitalize">fish</p>
        </div>
        
        

      </div>
    </div>
  );
};

export default Items;
