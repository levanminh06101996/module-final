import React from "react";
import Banner from "./components/Banner";
import Category from "./components/Category";
import Clothes from "./components/Clothes";
import HighlightProduct from "./components/HighlightProduct";
import Information from "./components/Information";
import Outfit from "./components/Outfit";
import PromotionalProduct from "./components/PromotionalProduct";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.Home}>
      <Banner className={styles.banner} />
      <Category className={styles.categories} />
      <PromotionalProduct className={styles.promotional} />
      <HighlightProduct />
      {/* <Outfit />
      <Clothes />
      <Information />    */}
    </div>
  );
};

export default Home;
