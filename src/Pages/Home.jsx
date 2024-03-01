import React from "react";
import homeScreen from "../assets/homeScreen.svg";

const Home = () => {
          const backgroundImage= {
                    backgroundImage: `url(${homeScreen})`,
                    backgroundRepeat: "none",
                    backgroundSize: "cover",backgroundPosition: "center",
                    innerHeight: "full",
                    innerWidth: "full",
          }
          
  return (
    <>
      <div
        className="w-full h-[100vh] flex justify-center align-middle items-center"
        style={backgroundImage}
      >
          <h1 data-text="Nature Club" className="text-white text-[150px] absolute bottom-[160px] ms:text-[100px] ms:bottom-[150px] xs:text-[50px] xs:bottom-[180px]">Nature Club</h1>
      </div>
    </>
  );
};

export default Home;
