import React from "react";
import img from '../assets/Trips_img/Bhigwan bird santuary/image_01.jpg';
import { Link } from "react-router-dom";

const Event = () => {
  return (
    <>
          <div className="w-full h-[10vh] ms:h-[9vh]"></div>
          <div className="w-full h-[80vh] p-5 flex flex-col items-center">
                    <h1 className="text-[49px]">Our Events</h1>
                    <div className="w-[80%] pt-10 p-3 flex flex-col items-center">
                              <div className="w-[90%] flex justify-center gap-10 max-h-[18.75rem] overflow-hidden">
                              <img src={img} alt="" className="w-[20rem] rounded-lg"/>
                                        <div className="w-[50%] flex flex-col justify-center">
                                                  <h1 className="text-[30px]">Bhigwan Bird Santuary</h1>
                                                  <p className="text-[13px] text-gray-400">01/01/2024</p>
                                                  <div className="flex gap-3 py-2">
                                                            <Link to='/gallery' className="p-1 bg-green-300 rounded-lg">Gallery</Link>
                                                            <Link to='/documentary' className="p-1 bg-green-300 rounded-lg">Documentary</Link>
                                                  </div>
                                                  <p className="text-[16px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero saepe reiciendis non porro aliquid dolorum fugiat ipsam labore fugit debitis voluptate dolorem consequuntur quasi vitae maxime laudantium assumenda, excepturi enim ipsa sunt accusamus temporibus sint, ullam distinctio. Iure similique, delectus maxime illo ratione tenetur assumenda atque aliquid cumque velit dolores?</p>
                                        </div>
                              </div>
                    </div>
          </div>
    </>
  );
};

export default Event;