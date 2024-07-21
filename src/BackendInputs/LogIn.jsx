import React from "react";

const LogIn = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto flex h-screen">
        <div className="flex-1 flex flex-col justify-center items-center">
          <form className="flex gap-4 flex-col">
            <h1 className="text-4xl font-extrabold text-black">
              {"Let's"} go.
            </h1>
            <label className="input input-bordered rounded flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="username"
                name="username"
              />
            </label>
            <label className="input input-bordered rounded flex items-center gap-2">
              <input
                type="password"
                className="grow"
                placeholder="Password"
                name="password"
              />
            </label>
            <button className="btn rounded-full btn-primary text-white">
              Sumit
            </button>
            {/* {isError && <p className="text-red-500">Something went wrong</p>} */}
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
