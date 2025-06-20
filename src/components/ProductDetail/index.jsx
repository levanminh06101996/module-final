import React from "react";
import styles from "./ProductDetail.module.scss";
import Prosale from "../Prosale/Prosale";
import AddToCart from "../AddToCart/AddToCart";

const ProductDetail = ({ item }) => {
  return (
    <div className={styles.customSlice} key={item.id}>
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
  );
};

export default ProductDetail;
