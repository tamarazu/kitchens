import React, { useState, useEffect } from "react";
// import { useDispatch } from 'react-redux'
import Navbar from "components/Navbar";
// import MainCarousel from "components/LandingPage/MainCarousel";
// import CategoriesCarousel from "components/LandingPage/CategoriesCarousel";
// import ChefsCarousel from "components/LandingPage/ChefsCarousel";

import Card from "components/mobile/LandingPage/Card";
import Categories from "components/mobile/LandingPage/Categories";
import Search from "components/mobile/LandingPage/Search";
export default function LandingPage() {
  // if website
  // return (
  //   <>
  //     <Navbar />
  //     <div className="m-8 mt-28 flex flex-col items-center justify-center gap-12">
  //       <p className="text-5xl text-orange-500 font-display">
  //         What's for cooking?
  //       </p>
  //       <MainCarousel />
  //       <p className="text-4xl mt-4 text-orange-500 font-display">Categories</p>
  //       <CategoriesCarousel />
  //       <p className="text-4xl mt-4 text-orange-500 font-display">
  //         Popular Chefs
  //       </p>
  //       <ChefsCarousel />
  //     </div>
  //   </>
  // );

  return (
    <>
      <Navbar />
      <div className="mt-20">
        <Search/>
        <Categories/>
        <div className="w-full p-2.5 grid grid-cols-2 gap-2.5">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </div>
      </div>
    </>
  );
}
