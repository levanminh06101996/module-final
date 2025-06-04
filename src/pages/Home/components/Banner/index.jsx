import React from "react";
import styles from "./Banner.module.scss";
import SliderCommon from "../../../../components/SliderCommon/SliderCommon";
const Banner = () => {
  return (
    <section className={styles.banner}>
      <SliderCommon className={styles.slidercommon} />
    </section>
  );
};

export default Banner;
