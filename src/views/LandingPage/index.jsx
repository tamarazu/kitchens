import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllMenu } from 'store/actions/menu'
import Navbar from "components/Navbar";

import Card from "components/mobile/LandingPage/Card";
import Categories from "components/mobile/LandingPage/Categories";
import Search from "components/mobile/LandingPage/Search";

export default function LandingPage() {
  const dispatch = useDispatch()
  const { menus } = useSelector(state => state.menuReducers)
  
  useEffect(() => {
    if (menus.length == 0) {
      dispatch(getAllMenu())
    }
  },[menus])

  return (
    <>
      <Navbar />
      <div className="mt-20">
        <Search />
        <Categories />
        <div className="w-full p-2.5 grid grid-cols-2 gap-2.5">
          {menus.map((value, i) => (
            <Card content={value} key={i}/>
          ))}
        </div>
      </div>
    </>
  );
}
