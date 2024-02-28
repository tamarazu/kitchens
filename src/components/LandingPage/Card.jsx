import React from "react";

export default function Card({ value }) {
  return (
    <div className="relative bg-white rounded-lg mx-5 shadow-md">
      <img
        className="rounded-lg object-cover h-[540px]"
        src={value.image}
        alt="food-image"
      />
      <div className="absolute flex items-end rounded-lg inset-0 bg-gradient-to-b from-transparent to-slate-100 opacity-90">
        <div className="p-4 w-full flex justify-between items-end">
          <div>
            <p className="text-xl font-bold text-orange-900 text-start">{value.title}</p>
          </div>
          {/* <button className="text-orange-500 font-bold"><i className="fi fi-ss-angle-circle-right"></i></button> */}
          
        </div>
      </div>
    </div>
  );
}
