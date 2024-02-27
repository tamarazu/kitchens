import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Card from "./Card";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { getRandomRecipes } from "store/actions/recipes";

export default function SimpleSlider() {
  const dispatch = useDispatch()
  const [ recipes, setRecipes ] = useState([])
  const { randomRecipe } = useSelector(state => state.recipeReducers)
  useEffect(() => {
    console.log(randomRecipe);
    if (!randomRecipe.length) {
      dispatch(getRandomRecipes())
    }
  }, [dispatch, randomRecipe])


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const row = Array(6).fill("");
  return (
    <div className="w-10/12">
      <Slider {...settings}>
        {row.map((index) => (
          <Card />
        ))}
      </Slider>
    </div>
  );
}
