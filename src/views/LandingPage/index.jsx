import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux'
import { getAllMenu } from 'store/actions/recipes'
import Navbar from "components/Navbar";

import Card from "components/mobile/LandingPage/Card";
import Categories from "components/mobile/LandingPage/Categories";
import Search from "components/mobile/LandingPage/Search";

export default function LandingPage() {
  const dispatch = useDispatch()
  const cardLength = new Array(5).fill('');

  useEffect(() => {
    dispatch(getAllMenu())
  },[])

  return (
    <>
      <Navbar />
      <div className="mt-20">
        <Search />
        <Categories />
        <div className="w-full p-2.5 grid grid-cols-2 gap-2.5">
          {cardLength.map((index) => (
            <Card />
          ))}
        </div>
      </div>
    </>
  );
}
