import React from "react";
import TitleBar from "../../components/TitleBar";
import styles from "./Products.module.scss";
import SideBar from "../../components/SideBar";
import ProductDetail from "../../components/ProductDetail";
import productData from "../../db/productsDetail.json";

const Products = () => {
  return (
    <div>
      <TitleBar />
      <div className={`container`}>
        <div className={styles.heroProducts}>
          <SideBar />
          <div
            className={`row row-cols-4 row-cols-lg-4 row-cols-md-2 gy-3 ${styles.contentProducts}`}
          >
            {productData.productsDetail.map((item) => (
              <ProductDetail item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
