import React from 'react'

function Footer() {
  return (
    <>
        <footer className="">
        <div className="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-8">
            <div className="pt-8 mt-12 border-t-2 border-white/10">
            <div className="grid grid-cols-1 lg:gap-8 lg:grid-cols-2">
                <p className="text-md text-center text-gray-400 lg:text-left">
                Falih Fauzan 2022
                </p>

                <nav className="flex justify-center space-x-4 text-md text-gray-400 lg:justify-end">
                <a href=""> Terms & Conditions </a>
                <a href="mailto:fal@fal.my.id"> Contact </a>
                </nav>
            </div>
            </div>
        </div>
        </footer>
    </>
  )
}

export default Footer