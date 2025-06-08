import React from "react";
import Slider from "react-slick";
import styles from "./PromotionalProduct.module.scss";
import Prosale from "../../../../components/Prosale/Prosale";
import "../../../../assets/styles/global.scss";
import AddToCart from "../../../../components/AddToCart/AddToCart";
import HoverView from "../../../../components/HoverView/HoverView";
import Test from "../../../../components/Tes/Test";
import Banner1 from "../../../../assets/images/promotional-products/promotional-products-1.webp";
import BgBanner1 from "../../../../assets/images/promotional-products/bg-promotional-products1.jpg";
import NextIconCategory from "../../../../components/icons/NextIconCategory";

const PromotionalProduct = () => {
  return (
    <div className={styles.wrapperPromotional}>
      <div className={`container ${styles.promotional}`}>
        <div className={styles.promotionalTitle}>
          <Test className={styles.effect} />
          <a href="#">SẢN PHẨM KHUYẾN MÃI</a>
        </div>
        <CustomArrows className={styles.customArrows} />
        <div className={styles.hoverView}>
          <HoverView
            minWidth="400px"
            height="50px"
            title="XEM TẤT CẢ SẢN PHẨM KHUYẾN MÃI"
          />
        </div>
      </div>
    </div>
  );
};

function SampleNextArrow({ onClick }) {
  return (
    <div className={styles.slick_next} onClick={onClick}>
      <NextIconCategory className={styles.nextIcon} />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className={styles.slick_prev} onClick={onClick}>
      <NextIconCategory className={styles.prevIcon} />
    </div>
  );
}

function CustomArrows() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={styles.slider_promotional}>
      <Slider {...settings}>
        <div className={styles.customSlide}>
          <div className={styles.imageSlide}>
            <img src={BgBanner1} alt="" className={styles.bgOverlay} />
            <img className={styles.imageDetail} src={Banner1} alt="" />
            <div className={styles.proSale}>
              <Prosale amount="-26%" />
            </div>
            <div className={styles.AddToCart}>
              <AddToCart />
            </div>
          </div>
          <div className={styles.informationDetail}>
            <h4 className={styles.varialt}>
              <p>+16 Màu sắc</p>
              <p>+4 Kích thước</p>
            </h4>
            <h4 className={styles.titleDetail}>
              Áo T shirt trơn in logo ngực FSTS001
            </h4>
            <h4 className={styles.priceDetail}>
              <span>149,000đ</span>
              <span>200,000đ</span>
            </h4>
          </div>
        </div>
        <div className={styles.customSlide}>
          <img src={Banner1} alt="" />
        </div>
        <div className={styles.customSlide}>
          <img src={Banner1} alt="" />
        </div>
        <div className={styles.customSlide}>
          <img src={Banner1} alt="" />
        </div>
        <div className={styles.customSlide}>
          <img src={Banner1} alt="" />
        </div>
        <div className={styles.customSlide}>
          <img src={Banner1} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default PromotionalProduct;
