import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function AppList({ myApps }) {
  return (
    <div className="mx-auto">
        <div className="grid  grid-cols-1 lg:grid-cols-3">
        {myApps.map((app, index) => (
            <div key={index} className="">
                <div className="border-solid rounded-md border-gray-800 p-2 m-2 hover:m-1 shadow-md flex items-center">
                    <div className="shrink-0 h-20 w-20 relative m-2">
                        <Image alt="logo" objectFit="cover" layout="fill" src="https://is3.cloudhost.id/fimg/pp.jpg"/>
                    </div>
                    <div>
                        <div className="text-xl font-medium text-black">
                            {app.name}
                        </div>
                        <p>{app.desc}</p>
                    </div>
                    <Link href={app.url}>
                    <p className="">
                        Go
                    </p>
                    </Link>
                </div>
            </div>
        ))}
        </div>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
                <img className="h-12 w-12" src="https://is3.cloudhost.id/fimg/pp.jpg" alt="ChitChat Logo"></img>
            </div>
            <div>
                <div className="text-xl font-medium text-black">ChitChat</div>
                <p className="text-slate-500">You have a new message!</p>
            </div>
        </div>
    </div>
  )
}

export default AppList