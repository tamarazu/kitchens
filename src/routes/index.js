// import { Switch } from "@headlessui/react";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import DetailRecipe from "views/DetailRecipe";
import LandingPage from "views/LandingPage";
import Recipes from "views/Recipes";


export const routes = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/recipes",
    element: <Recipes/>,
  },
  {
    path: "/recipes/:id",
    element: <DetailRecipe/>,
  },
]);
