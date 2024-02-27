import React from "react";
import Slider from "react-slick";
import Category from "./Category";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CategoriesCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
  };
  const row = Array(15).fill("");
  return (
    <div className=" w-10/12">
      <Slider {...settings}>
        {row.map((index) => (
          <Category />
        ))}
      </Slider>
    </div>
  );
}
