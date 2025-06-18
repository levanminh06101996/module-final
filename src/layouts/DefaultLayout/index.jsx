import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Outlet } from "react-router-dom";
import styles from "./DefaultLayout.module.scss";
const DefaultLayout = () => {
  return (
    <div className={styles.hero}>
      <Header />
      <main className={styles.mainproject}>
        <Outlet />
      </main>
      {/* <Footer className={styles.footer} /> */}
    </div>
  );
};

export default DefaultLayout;
