// import { Switch } from "@headlessui/react";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DetailRecipe from "views/DetailRecipe";
import LandingPage from "views/LandingPage";
import Recipes from "views/Menu";
import Order from "views/Order";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/menu/:id",
    element: <Recipes />,
  },
  {
    path: "/recipes/:id",
    element: <DetailRecipe />,
  },
]);
