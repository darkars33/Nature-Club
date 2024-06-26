import React from "react";
import { recentPhotos } from "../../Constants/data";
import './slider.css';
const Slider = () => {
  return (
    <>
      <div className="w-[100%]">
        <div className="logos">
          <div className="logos-slide">
          {recentPhotos.map((item) => {
          return <img src={item.img} alt="" />;
        })}
        {recentPhotos.map((item) => {
          return <img src={item.img} alt="" />;
        })}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Slider;
