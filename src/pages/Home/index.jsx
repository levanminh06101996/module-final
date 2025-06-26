import React from "react";
import Banner from "./components/Banner";
import Category from "./components/Category";
import HighlightProduct from "./components/HighlightProduct";
import Information from "./components/Information";
import Outfit from "./components/Outfit";
import PromotionalProduct from "./components/PromotionalProduct";
import styles from "./Home.module.scss";
import Clothers from "./components/Clothers/index";
import Footer from "../../components/Footer";

const Home = () => {
  return (
    <div className={styles.Home}>
      <Banner className={styles.banner} />
      <Category className={styles.categories} />
      <PromotionalProduct className={styles.promotional} />
      <HighlightProduct />
      <Outfit />
      <Clothers />
      <Information />
    </div>
  );
};

export default Home;
