import React from 'react'
import LogoIcon from 'assets/logo.png'

export default function Navbar() {
  return (
    <nav 
      className="fixed top-0 right-0 left-0 z-10 flex items-center justify-center  backdrop-filter bg-white shadow-md flex-wrap p-4"
      // className="fixed top-0 right-0 left-0 z-10 flex items-center justify-center  backdrop-filter backdrop-blur-sm bg-opacity-80 flex-wrap p-4"
    >
      <div className="flex items-center flex-shrink-0  mr-6">
        <img src={LogoIcon} className='h-8 w-8 mr-2'/>
        <span className="font-display text-2xl text-orange-400 tracking-tight">Lapau Andung</span>
      </div>
      {/* <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div> */}
    </nav>
  )
}
