import React from "react";
import Slider from "react-slick";
import Profile from "./Profile";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ChefsCarousel() {
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
          <Profile />
        ))}
      </Slider>
    </div>
  );
}
