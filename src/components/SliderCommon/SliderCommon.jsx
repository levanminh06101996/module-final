import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../../assets/images/banner1.webp";
import Banner2 from "../../assets/images/banner2.webp";
import Banner3 from "../../assets/images/banner3.webp";

const SliderCommon = (className) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <button className={className}>Prev</button>, // Nút tùy chỉnh
    nextArrow: <button className={className}>Next</button>,
  };
  return (
    <Slider {...settings}>
      <div>
        <img src={Banner1} alt="Banner1" />
      </div>
      <div>
        <img src={Banner2} alt="Banner2" />
      </div>
      <div>
        <img src={Banner3} alt="Banner3" />
      </div>
    </Slider>
  );
};

export default SliderCommon;
