import React from "react";
import styles from "./PromotionalProduct.module.scss";
import Prosale from "../../../../components/Prosale/Prosale";
import AddToCart from "../../../../components/AddToCart/AddToCart";
import HoverView from "../../../../components/HoverView/HoverView";

const PromotionalProduct = () => {
  return (
    <div className={styles.promotial}>
      {/* <AddToCart />
      <Prosale amount="-56%" /> */}
      <HoverView minWidth="100px" height="30px" title="nut bam" />
    </div>
  );
};

export default PromotionalProduct;
