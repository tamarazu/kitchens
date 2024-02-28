import React from "react";

export default function Search() {
  return (
    <div className="w-full px-2.5 pb-3">
      <label className="w-full relative items-center">
        <input placeholder="Search..." className="border w-full py-1.5 px-3 rounded-md" />
        <i className="absolute right-3 top-0 fi fi-br-search text-orange-500"></i>
      </label>
    </div>
  );
}
