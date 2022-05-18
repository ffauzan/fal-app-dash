import React from 'react'
import Image from 'next/image'

function AppItem({ app }) {
	return (
		<>
			<div className="border-solid rounded-xl border-gray-800 p-2 m-2 hover:border shadow-md flex-col max-h-">
				<div className="flex justify-start">
					<div className="shrink-0 h-28 w-28 relative m-2 mr-3">
						<Image alt="logo" objectFit="cover" layout="fill" src="https://is3.cloudhost.id/fimg/pp.jpg"/>
					</div>
					<div>
						<div className="text-2xl font-semibold text-cyan-900">
								{app.name}
						</div>
						<div className="max-h-24 overflow-hidden">{app.desc}</div>
					</div>
				</div>
				{/* <div className=""> */}
					<nav className="flex justify-around mx-auto">
						<a target="_blank" rel="noreferrer" href={app.url} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Open</a>
						<a target="_blank" rel="noreferrer" href={app.githubLink} className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">Github</a>
					</nav>
				{/* </div> */}
			</div>
		</>
	)
}

export default AppItem