import React from "react";
import Slider from "react-slick";
import styles from "./PromotionalProduct.module.scss";
import Prosale from "../../../../components/Prosale/Prosale";
import "../../../../assets/styles/global.scss";
import AddToCart from "../../../../components/AddToCart/AddToCart";
import HoverView from "../../../../components/HoverView/HoverView";
import Test from "../../../../components/Tes/Test";
import NextIconCategory from "../../../../components/icons/NextIconCategory";
import promotionalData from "../../../../db/promotional-products.json";

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
        {promotionalData.promotional.map((item) => (
          <div className={styles.customSlide} key={item.id}>
            <div className={styles.imageSlide}>
              <img src={item.bgi} alt="" className={styles.bgOverlay} />
              <img className={styles.imageDetail} src={item.img} alt="" />
              <div className={styles.proSale}>
                <Prosale amount={item.discount} />
              </div>
              <div className={styles.AddToCart}>
                <AddToCart />
              </div>
            </div>
            <div className={styles.informationDetail}>
              <h4 className={styles.varialt}>
                <p>{item.quantityColor}</p>
                <p>{item.quantitySize}</p>
              </h4>
              <h4 className={styles.titleDetail}>{item.title}</h4>
              <h4 className={styles.priceDetail}>
                <span>{item.quantityPrice}</span>
                <span>{item.quantityPriceNo}</span>
              </h4>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default PromotionalProduct;
