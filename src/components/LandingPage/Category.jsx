import React from "react";
import Noodle from "assets/noodle.png";

export default function Category() {
  return (
    <div className="flex justify-center">
      <div className="bg-orange-200 h-24 w-24 flex justify-center items-center rounded-full">
        <img className="h-16" src={Noodle} alt="category-name" />
      </div>
    </div>
  );
}
