import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AppItem from './AppItem'

function AppList({ myApps }) {
  return (
    <div className="mx-auto max-w-lg lg:max-w-screen-lg">
        <div className="grid grid-cols-1 lg:grid-cols-3">
        {myApps.map((app, index) => (
            // <div key={index} className="">
                <AppItem key={index} app={app}></AppItem>
            // </div>
        ))}
        </div>
    </div>
  )
}

export default AppList