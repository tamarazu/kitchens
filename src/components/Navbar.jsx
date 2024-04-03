import React from "react";
import LogoIcon from "assets/logo.png";

export default function Navbar() {
  return (
    <nav className="fixed z-10 w-full max-w-md top-0 flex items-center justify-center  backdrop-filter bg-white shadow-md flex-wrap p-4">
      <div className="flex items-center flex-shrink-0  mr-6">
        <img src={LogoIcon} className="h-8 w-8 mr-2" />
        <span className="font-display text-2xl text-orange-400 tracking-tight">
          Lapau Andung
        </span>
      </div>
    </nav>
  );
}
