import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../../assets/images/banner1.webp";
import Banner2 from "../../assets/images/banner2.webp";
import Banner3 from "../../assets/images/banner3.webp";

const SliderCommon = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={Banner1} alt="" />
      </div>
      <div>
        <img src={Banner2} alt="" />
      </div>
      <div>
        <img src={Banner3} alt="" />
      </div>
    </Slider>
  );
};

export default SliderCommon;
