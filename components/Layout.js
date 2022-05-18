import React from 'react'
import Head from 'next/head'

function Layout({ title, children }) {
  return (
    <div className="bg-grey-300">
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="mx-auto max-w-screen-xl p-2 pt-6 min-h-screen">
            {children}
        </main>
    </div>
  )
}

export default Layout