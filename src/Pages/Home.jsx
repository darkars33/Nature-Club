import React from "react";
import homeScreen from "../assets/homeScreen.svg";
import Line from "../Components/Line";

const Home = () => {
  const backgroundImage = {
    backgroundImage: `url(${homeScreen})`,
    backgroundRepeat: "none",
    backgroundSize: "cover",
    backgroundPosition: "center",
    innerHeight: "full",
    innerWidth: "full",
  };

  return (
    <>
      <div
        className="w-full h-[90vh] flex justify-center items-end"
        style={backgroundImage}
      >
        <h1
          data-text="Nature Club"
          className="relative text-white text-[140px] bottom-[123px] select-none ms:text-[100px] xs:text-[40px] xs:bottom-[160px] rounded-md uppercase"
        >
          Nature Club
        </h1>
      </div>
      <div className="w-full flex justify-center">
        <Line />
        <div className="flex flex-col items-center ">
        <h1><span className="text-green-600 text-[20px]">5,000+</span></h1>
        <h2 className="font-medium">No. Of Visitors</h2>
        </div>
        <Line />
      </div>
    </>
  );
};

export default Home;
