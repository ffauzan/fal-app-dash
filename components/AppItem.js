import React from "react";
import Image from "next/image";

function AppItem({ app }) {
  return (
    <>
      <div className="mx-4 my-2 md:m-2 flex-col rounded-xl border-solid border-gray-100 bg-[#EEF2FF] p-2 shadow-md">
        <div className="flex justify-start">
          <div className="relative m-2 mr-3 h-28 w-28 shrink-0">
            <Image
              alt="logo"
              objectFit="cover"
              layout="fill"
              src={app.imgUrl}
            />
          </div>
          <div>
            <div className="text-2xl font-semibold text-slate-800">
              {app.name}
            </div>
            <div className="max-h-24 overflow-hidden">{app.desc}</div>
          </div>
        </div>
        <nav className="mx-auto flex justify-around">
          <a
            target="_blank"
            rel="noreferrer"
            href={app.url}
            className="flex-grow rounded-lg px-3 py-2 text-center font-semibold text-slate-500 hover:bg-slate-500 hover:text-slate-100"
          >
            Open
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href={app.githubLink}
            className="flex-grow rounded-lg px-3 py-2 text-center font-semibold text-slate-500 hover:bg-slate-500 hover:text-slate-100"
          >
            Github
          </a>
        </nav>
      </div>
    </>
  );
}

export default AppItem;
