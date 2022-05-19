import React from "react";
import Image from "next/image";

function AppItem({ app }) {
  return (
    <>
      <div className="border-solid bg-[#EEF2FF] rounded-xl border-gray-100 p-2 m-2 shadow-md flex-col max-h-">
        <div className="flex justify-start">
          <div className="shrink-0 h-28 w-28 relative m-2 mr-3">
            <Image
              alt="logo"
              objectFit="cover"
              layout="fill"
              src="https://is3.cloudhost.id/fimg/pp.jpg"
            />
          </div>
          <div>
            <div className="text-2xl font-semibold text-slate-800">
              {app.name}
            </div>
            <div className="max-h-24 overflow-hidden">{app.desc}</div>
          </div>
        </div>
        <nav className="flex justify-around mx-auto">
          <a
            target="_blank"
            rel="noreferrer"
            href={app.url}
            className="rounded-lg flex-grow text-center px-3 py-2 text-slate-500 font-semibold hover:bg-slate-500 hover:text-slate-100"
          >
            Open
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={app.githubLink}
            className="rounded-lg flex-grow text-center px-3 py-2 text-slate-500 font-semibold hover:bg-slate-500 hover:text-slate-100"
          >
            Github
          </a>
        </nav>
      </div>
    </>
  );
}

export default AppItem;
