import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMenu } from "store/actions/menu";
import Lottie from "react-lottie";
import loadingAnimation from "assets/lotties/loading.json";
import Navbar from "components/Navbar";

import Card from "components/mobile/LandingPage/Card";
import Categories from "components/mobile/LandingPage/Categories";
import Search from "components/mobile/LandingPage/Search";

export default function LandingPage() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.reducers);
  const { menus } = useSelector((state) => state.menuReducers);
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if (menus.length == 0) {
      dispatch(getAllMenu());
    }
  }, [menus]);

  return (
    <>
      <Navbar />
      <div className="mt-20">
        <Search />
        <Categories />
        {loading ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Lottie options={defaultOptions} height={"70%"} width={"70%"} />
          </div>
        ) : (
          <div className="w-full p-2.5 grid grid-cols-2 gap-2.5">
            {menus.length &&
              menus.map((value, i) => <Card content={value} key={i} />)}
          </div>
        )}
      </div>
    </>
  );
}
