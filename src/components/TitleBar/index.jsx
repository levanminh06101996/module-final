import React from "react";
import styles from "./TitleBar.module.scss";
const TitleBar = ({ heading }) => {
  return (
    <div className={styles.title_bar}>
      <div className={`container ${styles.title_bar_heading}`}>
        <h2 className={styles.heading_first}>
          <a href="/">Trang chủ</a>
        </h2>
        <h2>{heading}</h2>
      </div>
    </div>
  );
};

export default TitleBar;
