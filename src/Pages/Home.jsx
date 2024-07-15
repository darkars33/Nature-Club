import React from "react";
import homeScreen from "../assets/homeScreen.svg";
import Line from "../Components/Line";
import plant from "../assets/plant.svg";
import Pravesh from "../assets/Pravesh.jpg";
import img1 from '../assets/recentphotos/img3.jpg';
import { IoIosArrowRoundForward } from "react-icons/io";
import { recentPhotos } from "../Constants/data";
import Slider from '../Components/SlideShow/Slider';
import { Link } from "react-router-dom";

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
              To foster a deeper connection with nature among students and the community, promote environmental stewardship through education, conservation efforts, and sustainable practices, and inspire a generation of engineers committed to preserving and protecting our natural environment for future generations.
            </p>
          </div>
          <img src={plant} alt="" />
          <div className="w-[450px] h-[75%] p-3 box flex justify-center items-center flex-col gap-1  ms:w-full lg:h-[100%] ms:hover:w-[full]">
            <h1 className="text-[35px]">Our Vision</h1>
            <p className=" relative text-center leading-5">
              To cultivate a campus culture where every student embraces their role as custodians of the environment, leveraging engineering innovation to create sustainable solutions, and empowering individuals to advocate for biodiversity conservation and environmental harmony in all aspects of life.
            </p>
          </div>
        </div>
      </div>
      <br />
      <div className="w-full p-5 flex flex-col items-center">
          <h1 className="text-[30px]">Recent Events</h1>
          <div className="w-[90%] flex flex-wrap justify-around p-3  ms:justify-center ms:gap-5">
            <div className="relative w-[20rem] p-2 rounded-[10px] flex flex-col items-center hover:shadow-3xl hover:translate-z-2 transition-all hover:border-none">
              <img src={img1} alt="events photo" className="w-[350px] h-[200px] rounded-md xxs:h-[180px] xxs:w-[300px]"/>
              <div className="flex flex-col items-start"><h1 className="pt-2 text-[23px] xxs:text-[19px]">Trip to Bird Sanctuary</h1>
              <p className="text-[15px] xxs:text-[13px]">We conducted this trip to develop a deep understanding of migratory birds and role of climate in ecosystem.</p>
              <Link to='event' className="flex items-center text-[14px] text-gray-400 hover:text-green-400">Check to all Events <IoIosArrowRoundForward /> </Link></div>
            </div>
            <div className="relative w-[20rem] p-2 rounded-[10px] flex flex-col items-center hover:shadow-3xl hover:translate-z-2 transition-all hover:border-none">
              <img src={img1} alt="events photo" className="w-[350px] h-[200px] rounded-md xxs:h-[180px] xxs:w-[300px]"/>
              <div className="flex flex-col items-start"><h1 className="pt-2 text-[23px] xxs:text-[19px]">Trip to Bhuleshwar temple</h1>
              <p className="text-[15px] xxs:text-[13px]">.</p>
              <a href="" className="flex items-center text-[14px] text-gray-400 hover:text-green-400">Check to all Events <IoIosArrowRoundForward /> </a></div>
            </div>
            <div className="relative w-[20rem] p-2 rounded-[10px] flex flex-col items-center hover:shadow-3xl hover:translate-z-2 transition-all hover:border-none">
              <img src={img1} alt="events photo" className="w-[350px] h-[200px] rounded-md xxs:h-[180px] xxs:w-[300px]"/>
              <div className="flex flex-col items-start"><h1 className="pt-2 text-[23px] xxs:text-[19px]">Tree plantation at Dighi, Pune</h1>
              <p className="text-[15px] xxs:text-[13px]">Conducted a tree plantation drive at Dighi, Pune with the first year students of Army Institute of Technology.</p>
              <a href="" className="flex items-center text-[14px] text-gray-400 hover:text-green-400">Check to all Events <IoIosArrowRoundForward /> </a></div>
            </div>   
          </div>
      </div>
      <br />
      <div className="w-full p-5 flex flex-col items-center">
        <h1 className="text-[30px]">Up-Coming Event</h1>
        <div className="w-[90%] pt-5 flex justify-center ms:justify-center" >
          <div className="relative w-[300px] p-2 border-[1px] border-green-300 rounded-[10px] flex flex-col items-center hover:shadow-3xl hover:translate-z-2 transition-all hover:border-none">
            <h1 className="text-[50px]">?</h1>
            <a href="" className="flex items-center text-[14px] text-gray-400 hover:text-green-400">Registration <IoIosArrowRoundForward /></a>
          </div>
        </div>
      </div>
      <div className="flex flex-col  items-center p-4">
        <h1 className="text-[30px] pb-10">Recent Events Photos</h1>
        <div className="w-full pt-[0px] flex justify-center flex-col items-center">
          <div className="relative w-[90%]  flex justify-center">
            <Slider />
          </div>
        </div>
      </div>
      <br />
      <div className="w-full p-4 flex flex-col items-center">
        <h1 className="text-[30px]">Feedbacks</h1>
        <div className="w-[90%] flex flex-wrap justify-between p-3 gap-2 ms:justify-center">
          <div className="box w-[350px]  p-2 flex items-center gap-3 xxs:flex-col">
              <img src={Pravesh} alt=""  className="w-[100px] rounded-[50%]"/>
              <div className="w-[100%] flex flex-col xxs:items-center">
                <h1 className="text-[20px] text-center">Pravesh</h1>
                <p className="text-center">
                  As a secretary of Nature's Club, it gives me immese pleasure to do all activities towards mother earth. This platform has made my efforts recognised and took to the next level. 
                </p>
              </div>
          </div>
          <div className="box w-[350px]  p-2 flex items-center gap-3 xxs:flex-col">
              <img src={Pravesh} alt=""  className="w-[100px] rounded-[50%]"/>
              <div className="w-[100%] flex flex-col xxs:items-center">
                <h1 className="text-[20px]">Rohit</h1>
                <p className="text-center">
                 I am very happy to join Nature club as provides me with and oppurtunity to work for the betterment of th environment and climate.
                </p>
              </div>
          </div>
          <div className="box w-[350px]  p-2 flex items-center gap-3 xxs:flex-col">
              <img src={Pravesh} alt=""  className="w-[100px] rounded-[50%]"/>
              <div className="w-[100%] flex flex-col xxs:items-center">
                <h1 className="text-[20px]">Khushia</h1>
                <p className="text-center">
                  The refreshing trips organised by the Nature's club makes me feel rejuvinated
                </p>
              </div>
          </div>
          {/* <div className="box w-[350px]  p-2 flex items-center gap-3 xxs:flex-col">
              <img src={Pravesh} alt=""  className="w-[100px] rounded-[50%]"/>
              <div className="w-[100%] flex flex-col xxs:items-center">
                <h1 className="text-[20px]">Pravesh</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, voluptates.
                </p>
              </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Home;
