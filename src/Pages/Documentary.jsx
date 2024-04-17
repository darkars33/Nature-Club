import React from "react";
import { documentrydata } from "../Constants/documentrydata";
import { split } from "postcss/lib/list";

const Documentary = () => {
  return (
    <>
      <div className="w-full h-[10vh] ms:h-[9vh]"></div>
      <div className="w-full">
        <div className="w-[100%] p-5 flex flex-col items-center">
          <div className="w-[80%] pb-3 flex justify-center gap-7 flex-wrap">
            <button className="p-2 bg-green-500 rounded-3xl">Adventure</button>
            <button className="p-2 bg-green-500 rounded-3xl">Trek</button>
            <button className="p-2 bg-green-500 rounded-3xl">something</button>
          </div>
          <div className="w-[90%] p-0 pt-5 flex justify-center gap-5 ms:flex-col ms:items-center xs:w-[100%] ">
            {documentrydata.map((data) => {
              return (
                <div className="relative p-3 w-[400px] flex flex-col items-center shadow-lg rounded-md xs:w-[100%]">
                  <iframe
                    className="rounded-lg xs:w-[100%] xs:h-[200px]"
                    width="380"
                    height="250"
                    src={data.link}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                  <h2 className="pt-3 text-[18px] font-[500] xs:text-[15px]">
                    {data.title}
                  </h2>
                  <p className="text-[14px] xs:text-[12px]">
                    {data.info.slice(0, 100)}...
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Documentary;
