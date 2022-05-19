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
        <div className="flex my-auto justify-center md:justify-around md:space-x-1 space-x-2">
          <a className="" href="https://fal.my.id">
            <button className="py-1 px-2 text-lg font-medium text-gray-100 md:py-2 md:px-3 hover:underline">
              Home
            </button>
          </a>
          <a className="" target="_blank" rel="noreferrer" href="https://github.com/ffauzan">
            <button className="py-1 px-2 text-lg font-medium text-gray-100 md:py-2 md:px-3 hover:underline">
              Github
            </button>
            {/* <h2 className="font-semibold text-lg text-gray-100 hover:underline">Github</h2> */}
          </a>
        </div>
      </div>
    </>
  );
}

export default Headers2;
