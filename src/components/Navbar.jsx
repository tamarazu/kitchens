import React from "react";
import LogoIcon from "assets/logo.png";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="fixed z-10 w-full max-w-md top-0 flex items-center justify-center  backdrop-filter bg-white shadow-md flex-wrap p-4">
      <div
        className="flex items-center flex-shrink-0  mr-6"
        onClick={() => navigate("/")}
      >
        <img src={LogoIcon} className="h-8 w-8 mr-2" />
        <span className="font-display text-2xl text-orange-400 tracking-tight">
          Lapau Andung
        </span>
      </div>
    </nav>
  );
}
