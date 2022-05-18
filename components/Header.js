import React from 'react'

function Headers2() {
  return (
    <>
      <div className="md:flex md:justify-between mx-auto shadow-md md:pb-0 p-4">
        <div className="md:flex items-center justify-between mb-4">
          <h1 className="text-5xl text-center font-sans leading-none text-red-800">
            Fal&#39;s Apps
          </h1>
        </div>
        <nav className="flex justify-center md:justify-around md:space-x-1 space-x-2">
          <a target="_blank" rel="noreferrer" href="https://github.com/ffauzan">
            <button className="text-grey-800 md:py-3 py-1 text-lg md:px-4 px-2 rounded border border-slate-700">Github</button>
          </a>
          <a href="https://fal.my.id">
            <button className="text-grey-800 md:py-3 py-1 text-lg md:px-4 px-2 rounded border border-slate-700">Home</button>
          </a>
				</nav>
      </div>
    </>
  )
}

export default Headers2