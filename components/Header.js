import React from "react";

function Headers2() {
  return (
    <>
      <div className="mx-auto max-w-5xl bg-[#232E43] p-4 pt-3 md:flex md:justify-between md:pb-0">
        <div className="mb-4 items-center justify-between md:flex">
          <h1 className="text-center font-sans text-5xl font-bold leading-none text-gray-100">
            Fal&#39;s Apps
          </h1>
        </div>
        <nav className="my-auto flex content-center space-x-2 md:justify-around md:space-x-1">
          <a href="https://fal.my.id">
            <button className="rounded-l-full border border-slate-100 py-1 px-2 text-lg font-medium text-gray-100 md:py-2 md:px-3">
              Home
            </button>
          </a>
          <a target="_blank" rel="noreferrer" href="https://github.com/ffauzan">
            <button className="rounded-r-full border-2 border-slate-100 py-1 px-2 text-lg font-medium text-gray-100 md:py-2 md:px-3">
              Github
            </button>
          </a>
        </nav>
      </div>
    </>
  );
}

export default Headers2;
