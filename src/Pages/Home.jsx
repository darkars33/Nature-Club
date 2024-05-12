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
      <div className="w-full p-5 flex flex-col items-center">
          <h1 className="text-[30px]">Recent Events</h1>
          <div className="w-[90%] flex flex-wrap justify-around p-3  ms:justify-center ms:gap-5">
            <div className="relative w-[20rem] p-2 rounded-[10px] flex flex-col items-center hover:shadow-3xl hover:translate-z-2 transition-all hover:border-none">
              <img src={img1} alt="events photo" className="w-[350px] h-[200px] rounded-md xxs:h-[180px] xxs:w-[300px]"/>
              <div className="flex flex-col items-start"><h1 className="pt-2 text-[23px] xxs:text-[19px]">Trip to Bird Sanctuary</h1>
              <p className="text-[15px] xxs:text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis veniam cum, maiores amet neque debitis, iusto atque error.</p>
              <Link to='event' className="flex items-center text-[14px] text-gray-400 hover:text-green-400">Check to all Events <IoIosArrowRoundForward /> </Link></div>
            </div>
            <div className="relative w-[20rem] p-2 rounded-[10px] flex flex-col items-center hover:shadow-3xl hover:translate-z-2 transition-all hover:border-none">
              <img src={img1} alt="events photo" className="w-[350px] h-[200px] rounded-md xxs:h-[180px] xxs:w-[300px]"/>
              <div className="flex flex-col items-start"><h1 className="pt-2 text-[23px] xxs:text-[19px]">Trip to Bird Sanctuary</h1>
              <p className="text-[15px] xxs:text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis veniam cum, maiores amet neque debitis, iusto atque error.</p>
              <a href="" className="flex items-center text-[14px] text-gray-400 hover:text-green-400">Check to all Events <IoIosArrowRoundForward /> </a></div>
            </div>
            <div className="relative w-[20rem] p-2 rounded-[10px] flex flex-col items-center hover:shadow-3xl hover:translate-z-2 transition-all hover:border-none">
              <img src={img1} alt="events photo" className="w-[350px] h-[200px] rounded-md xxs:h-[180px] xxs:w-[300px]"/>
              <div className="flex flex-col items-start"><h1 className="pt-2 text-[23px] xxs:text-[19px]">Trip to Bird Sanctuary</h1>
              <p className="text-[15px] xxs:text-[13px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore perferendis veniam cum, maiores amet neque debitis, iusto atque error.</p>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, voluptates.
                </p>
              </div>
          </div>
          <div className="box w-[350px]  p-2 flex items-center gap-3 xxs:flex-col">
              <img src={Pravesh} alt=""  className="w-[100px] rounded-[50%]"/>
              <div className="w-[100%] flex flex-col xxs:items-center">
                <h1 className="text-[20px]">Pravesh</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, voluptates.
                </p>
              </div>
          </div>
          <div className="box w-[350px]  p-2 flex items-center gap-3 xxs:flex-col">
              <img src={Pravesh} alt=""  className="w-[100px] rounded-[50%]"/>
              <div className="w-[100%] flex flex-col xxs:items-center">
                <h1 className="text-[20px]">Pravesh</h1>
                <p className="text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quibusdam, voluptates.
                </p>
              </div>
          </div>
          <div className="box w-[350px]  p-2 flex items-center gap-3 xxs:flex-col">
              <img src={Pravesh} alt=""  className="w-[100px] rounded-[50%]"/>
              <div className="w-[100%] flex flex-col xxs:items-center">
                <h1 className="text-[20px]">Pravesh</h1>
                <p className="text-center">
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
