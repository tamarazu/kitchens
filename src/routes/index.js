// import { Switch } from "@headlessui/react";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DetailRecipe from "views/DetailRecipe";
import LandingPage from "views/LandingPage";
import Recipes from "views/Recipes";
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
    path: "/recipes",
    element: <Recipes />,
  },
  {
    path: "/recipes/:id",
    element: <DetailRecipe />,
  },
]);
