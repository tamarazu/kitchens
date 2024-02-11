import React from 'react'
import LogoIcon from 'assets/logo.png'

export default function Navbar() {
  return (
    <nav class="fixed top-0 right-0 left-0 z-10 flex items-center justify-center  backdrop-filter backdrop-blur-sm bg-opacity-20 flex-wrap p-4">
      <div class="flex items-center flex-shrink-0  mr-6">
        <img src={LogoIcon} className='h-14 w-14 mr-2'/>
        <span class="font-display text-4xl text-orange-700 tracking-tight">Kitchens</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
    </nav>
  )
}
