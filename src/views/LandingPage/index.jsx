import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import Navbar from "components/Navbar";
import MainCarousel from "components/LandingPage/MainCarousel";
import CategoriesCarousel from "components/LandingPage/CategoriesCarousel";
import ChefsCarousel from "components/LandingPage/ChefsCarousel";


export default function LandingPage() {

  return (
    <>
      <Navbar />
      <div className="m-8 mt-32 flex flex-col items-center justify-center gap-12">
        <p className="text-5xl text-orange-500 font-display">
          What's for cooking?
        </p>
        <MainCarousel />
        <p className="text-4xl mt-4 text-orange-500 font-display">Categories</p>
        <CategoriesCarousel />
        <p className="text-4xl mt-4 text-orange-500 font-display">
          Popular Chefs
        </p>
        <ChefsCarousel />
      </div>
    </>
  );
}
