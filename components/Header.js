import React from "react";

function Headers2() {
  return (
    <>
      <div className="bg-[#232E43] md:flex md:justify-between mx-auto md:pb-0 p-4 pt-3 max-w-5xl">
        <div className="md:flex items-center justify-between mb-4">
          <h1 className="text-5xl text-center font-sans leading-none text-gray-100 font-bold">
            Fal&#39;s Apps
          </h1>
        </div>
        <nav className="flex justify-center md:justify-around md:space-x-1 space-x-2">
          <a href="https://fal.my.id">
            <button className="text-gray-100 md:py-3 py-1 text-lg md:px-4 font-medium px-2 rounded-l-full border border-slate-100">
              Home
            </button>
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/ffauzan">
            <button className="text-gray-100 md:py-3 py-1 text-lg font-medium md:px-4 px-2 rounded-r-full border border-slate-100">
              Github
            </button>
          </a>
        </nav>
      </div>
    </>
  );
}

export default Headers2;
