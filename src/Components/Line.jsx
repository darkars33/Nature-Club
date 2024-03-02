import React from "react";

const Line = () => {
  return (
    <>
      <div className="flex items-center">
        <div className="w-3 h-3 bg-green-400 rounded-lg xl:rounded-[50%]"></div>
        <hr className="border-green-400 border-[1px] border-r-2 w-[550px] " />
        <div className="w-3 h-3 bg-green-400 rounded-lg"></div>
      </div>
    </>
  );
};

export default Line;
