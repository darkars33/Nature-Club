import React from "react";
import img from "../assets/Trips_img/Bhigwan bird santuary/image_01.jpg";
import { Link } from "react-router-dom";
import { Trips } from "../Constants/event";

const Event = () => {
  console.log(Trips);
  return (
    <>
      <div className="w-full h-[10vh] ms:h-[9vh]"></div>
      <div className="w-full  p-5 flex flex-col items-center ">
        <h1 className="text-[49px]">Our Events</h1>
        <div className="w-[100%] pt-10 p-3 flex gap-4 flex-wrap justify-between md:justify-center md:gap-5">
          {Trips.map((item) => {
            return(
              <div className="w-[20rem] flex flex-col gap-3 shadow-xl p-3 rounded-md md:w-[100%]">
            <img src={item.img} alt="" className="w-[100%] h-[14rem] rounded-lg" />
            <div className="w-[100%] flex flex-col">
              <h1 className="text-[20px]">{item.title}</h1>
              <p className="text-[13px] text-gray-400">01/01/2024</p>
              <div className="flex gap-3 py-2">
                <Link
                  to="/gallery"
                  className="p-1 bg-green-300 rounded-lg hover:bg-green-600 hover:text-white"
                >
                  Gallery
                </Link>
                <Link
                  to="/documentary"
                  className="p-1 bg-green-300 rounded-lg hover:bg-green-600 hover:text-white"
                >
                  Documentary
                </Link>
              </div>
              <p className="text-[16px]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
                saepe{" "}
              </p>
            </div>
          </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Event;
