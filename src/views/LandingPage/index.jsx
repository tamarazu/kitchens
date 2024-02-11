import React, { useState } from "react";

import Navbar from "components/Navbar";
import Carousel from "components/Carousel";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <div className="m-8 mt-32 flex flex-col items-center justify-center gap-8">
        <p className="text-5xl text-orange-500 font-display">What's for cooking?</p>
        <Carousel />  
      </div>
    </>
  );
}
