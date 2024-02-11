import React from "react";

export default function Card() {
  return (
    <div className="relative bg-white rounded-lg mx-5 my-2 shadow-md">
      <img
        className="rounded-lg object-cover h-[540px]"
        src="https://kurio-img.kurioapps.com/21/10/12/9c41af5a-a959-44c7-80d0-9baa58034afe.jpe"
        alt="food-image"
      />
      <div className="absolute flex items-end rounded-lg inset-0 bg-gradient-to-b from-transparent to-slate-100 opacity-90">
        <div className="p-4 w-full flex justify-between items-end">
          <div>
            <p className="text-lg font-bold text-gray-800">Soto Ayam</p>
            <p className="text-sm font-base text-gray-700 text-start">Main Menu</p>
          </div>
          <button>See more</button>
        </div>
      </div>
    </div>
  );
}
