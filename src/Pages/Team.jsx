import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  teamdata,
  Secretary,
  TE_Member,
  Joint_Secretary,
} from "../Constants/teamdata";

const Team = () => {
  return (
    <>
      <div className="w-full h-[10vh] ms:h-[9vh]"></div>
      <div className="w-full p-7 pt-5 flex justify-center">
        <div className="w-full flex flex-col items-center gap-10">
          <div className="w-[90%] flex flex-col gap-5">
            <h1 className="text-[30px] font-medium">Secretary</h1>
            <div className="w-[100%] flex flex-wrap  gap-10">
              {Secretary.map((item) => {
                return (
                  <div className="relative border-[1px] w-[230px] p-3 flex flex-col items-center rounded-[10px] hover:translate-z-2 hover:shadow-2xl hover:border-[0px] transition-all">
                    <img
                      src={item.img}
                      alt=""
                      className="w-[100px] h-[100px] rounded-[50%] xxs:w-[150px] xxs:h-[150px]"
                    />
                    <h1 className="text-[20px] pt-2 font-medium">
                      {item.name}
                    </h1>
                    <p className="text-[16px] text-gray-500">{item.position}</p>
                    <br />
                    <div className="w-[100%] h-[1px] bg-gray-200"></div>
                    <div className="pt-4 flex gap-3">
                      <a
                        href={item.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:bg-green-300 p-2 rounded-[50%] border-[1px]"
                      >
                        <FaInstagram className="text-[25px] text-gray-600 hover:text-white" />
                      </a>
                      <a
                        href={item.lin}
                        target="_blank"
                        rel="noreferrer"
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

          <div className="w-[90%] flex flex-col gap-5">
            <h1 className="text-[30px] font-medium">TE Members</h1>
            <div className="w-[100%] flex flex-wrap  gap-10">
              {TE_Member.map((item) => {
                return (
                  <div className="relative border-[1px] w-[230px] p-3 flex flex-col items-center rounded-[10px] hover:translate-z-2 hover:shadow-2xl hover:border-[0px] transition-all">
                    <img
                      src={item.img}
                      alt=""
                      className="w-[100px] h-[100px] rounded-[50%] xxs:w-[150px] xxs:h-[150px]"
                    />
                    <h1 className="text-[20px] pt-2 font-medium">
                      {item.name}
                    </h1>
                    <p className="text-[16px] text-gray-500">{item.position}</p>
                    <br />
                    <div className="w-[100%] h-[1px] bg-gray-200"></div>
                    <div className="pt-4 flex gap-3">
                      <a
                        href={item.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:bg-green-300 p-2 rounded-[50%] border-[1px]"
                      >
                        <FaInstagram className="text-[25px] text-gray-600 hover:text-white" />
                      </a>
                      <a
                        href={item.lin}
                        target="_blank"
                        rel="noreferrer"
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


          <div className="w-[90%] flex flex-col gap-5">
            <h1 className="text-[30px] font-medium">Joint Secretary</h1>
            <div className="w-[100%] flex flex-wrap  gap-10">
              {Joint_Secretary.map((item) => {
                return (
                  <div className="relative border-[1px] w-[230px] p-3 flex flex-col items-center rounded-[10px] hover:translate-z-2 hover:shadow-2xl hover:border-[0px] transition-all">
                    <img
                      src={item.img}
                      alt=""
                      className="w-[100px] h-[100px] rounded-[50%] xxs:w-[150px] xxs:h-[150px]"
                    />
                    <h1 className="text-[20px] pt-2 font-medium">
                      {item.name}
                    </h1>
                    <p className="text-[16px] text-gray-500">{item.position}</p>
                    <br />
                    <div className="w-[100%] h-[1px] bg-gray-200"></div>
                    <div className="pt-4 flex gap-3">
                      <a
                        href={item.instagram}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:bg-green-300 p-2 rounded-[50%] border-[1px]"
                      >
                        <FaInstagram className="text-[25px] text-gray-600 hover:text-white" />
                      </a>
                      <a
                        href={item.lin}
                        target="_blank"
                        rel="noreferrer"
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
        </div>
      </div>
    </>
  );
};

export default Team;
