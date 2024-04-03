import React, { useEffect } from "react";
import Lottie from "react-lottie";
import loadingAnimation from "assets/lotties/loading.json";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Navbar from "components/Navbar";
import Search from "components/mobile/LandingPage/Search";
import Categories from "components/mobile/LandingPage/Categories";
import Card from "components/LandingPage/Card";
import { getMenuById } from "store/actions/menu";
import { rupiah } from "helpers/number";

export default function Recipes() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.reducers);
  const { menu } = useSelector((state) => state.menuReducers);
  const { id } = useParams();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if (!menu.name) {
      dispatch(getMenuById(id));
    }
    console.log(menu);
  }, [id, menu]);

  if (menu.name) return (
    <>
      <Navbar />
      <div className="mt-16">
        {loading ? (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Lottie options={defaultOptions} height={"70%"} width={"70%"} />
          </div>
        ) : (
          <div className="flex flex-col gap-2 text-start">
            <img
              className="w-full object-cover cursor-pointer"
              src={menu.image}
              alt={menu.name}
            />
            <p className="text-xl font-semibold text-slate-800">{menu.name.toUpperCase()}</p>
            <p className="font-semibold text-orange-800">{rupiah(menu.price)}</p>

          </div>
        )}
      </div>
    </>
  );
  return <></>
}
