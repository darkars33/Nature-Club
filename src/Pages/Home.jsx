import React from "react";
import homeScreen from "../assets/homeScreen.svg";
import Line from "../Components/Line";
import plant from "../assets/plant.svg";
import Pravesh from "../assets/Pravesh.jpg";

import { recentPhotos } from "../Constants/data";

const Home = () => {
  const backgroundImage = {
    backgroundImage: `url(${homeScreen})`,
    backgroundRepeat: "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    innerHeight: "full",
    innerWidth: "full",
  };
  const { id } = recentPhotos;
  const style = {
    "--i": 1,
    transform: "rotateY(calc(var(--i)*45deg)) translateZ(350px)",
  };

  return (
    <>
      <div
        className="w-full h-[90vh] flex justify-center items-end"
        style={backgroundImage}
      >
        <h1
          data-text="Nature Club"
          className="relative text-white text-[140px] bottom-[123px] select-none ms:text-[100px] lg:text-[120px] xs:text-[40px] xs:bottom-[160px] rounded-md uppercase "
        >
          Nature Club
        </h1>
      </div>
      <br />
      <div className="w-full flex justify-center ">
        {/* <Line /> */}
        <div className="flex flex-col items-center ">
          <h1>
            <span className="text-green-600 text-[20px]">5,000+</span>
          </h1>
          <h2 className="font-medium">No. Of Visitors</h2>
        </div>
        {/* <Line /> */}
      </div>
      <br />
      <div className="w-full   flex justify-center items-center">
        <div className="w-[80%] h-[80%] flex justify-between items-center ms:flex-col ms:gap-4">
          <div className="w-[450px] h-[75%] p-3 box flex justify-center flex-col gap-1 ms:w-full lg:h-[100%]">
            <h1 className="text-[35px] text-center">Our Mission</h1>
            <p className="text-center leading-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              velit totam debitis voluptatum quia labore, dignissimos officiis
              possimus nulla reprehenderit quibusdam magni nisi accusantium
              eligendi dolorum neque nam illum illo!
            </p>
          </div>
          <img src={plant} alt="" />
          <div className="w-[450px] h-[75%] p-3 box flex justify-center items-center flex-col gap-1  ms:w-full lg:h-[100%] ms:hover:w-[full]">
            <h1 className="text-[35px]">Our Vision</h1>
            <p className=" relative text-center leading-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              velit totam debitis voluptatum quia labore, dignissimos officiis
              possimus nulla reprehenderit quibusdam magni nisi accusantium
              eligendi dolorum neque nam illum illo!
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="flex flex-col  items-center ">
        <h1 className="text-[30px] pb-10">Recent Events Photos</h1>
        <div className="w-full p-[40px] flex justify-center flex-col items-center">
          <div className="relative w-[80%]  flex justify-center">
            <div className="relative slider">
              {recentPhotos.map((item) => {
                return (
                  <span
                    style={{
                      "--i": item.id,
                      transform:
                        "rotateY(calc(var(--i)*47deg)) translateZ(300px)",
                    }}
                  >
                    <img
                      src={item.img}
                      alt="recent-photos"
                      className="w-[200px] h-[200px] object-cover"
                    />
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <br />
      <div className="w-full p-4 flex flex-col items-center">
        <h1 className="text-[30px]">Feedbacks</h1>
        <div className="w-[90%] h-[500px] box p-3">
          <div className="box w-[350px] h-[150px] p-2 flex items-center gap-3">
              <img src={Pravesh} alt=""  className="w-[100px] rounded-[50%]"/>
              <div>
                <h1>Pravesh</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, voluptates.
                </p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
