import React from "react";
import Pravesh from "../assets/Pravesh.jpg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { teamdata } from "../Constants/teamdata";

const Team = () => {
  return (
    <>
      <div className="w-full h-[10vh] bg-black ms:h-[9vh]"></div>
      <div className="w-full p-7 pt-5 flex justify-center">
        <div className="w-[90%] flex flex-wrap justify-center gap-10">
          {teamdata.map((item) => {
            return (
              <div className="relative border-[1px] w-[230px] p-3 flex flex-col items-center rounded-[10px] hover:translate-z-2 hover:shadow-2xl hover:border-[0px] transition-all">
                <img
                  src={item.img}
                  alt=""
                  className="w-[100px] h-[100px] rounded-[50%]"
                />
                <h1 className="text-[20px] pt-2 font-medium">{item.name}</h1>
                <p className="text-[16px] text-gray-500">{item.position}</p>
                <br />
                <div className="w-[100%] h-[1px] bg-gray-200"></div>
                <div className="pt-4 flex gap-3">
                  <a
                    href={item.instagram} target="_blank" rel="noreferrer"
                    className="hover:bg-green-300 p-2 rounded-[50%] border-[1px]"
                  >
                    <FaInstagram className="text-[25px] text-gray-600 hover:text-white" />
                  </a>
                  <a
                    href=""
                    className="hover:bg-green-300 p-2 rounded-[50%] border-[1px]"
                  >
                    <FaLinkedin className="text-[25px] text-gray-600 hover:text-white" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Team;
