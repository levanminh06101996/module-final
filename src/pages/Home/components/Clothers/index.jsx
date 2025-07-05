import styles from "./HighLightProduct.module.scss";
import React from "react";
import Tabs from "./Tabs";
import Tab from "./Tab";
import ContentTab1 from "./contentTab1/ContentTab1";
import HoverView from "@/components/HoverView/HoverView";
import ContentTab2 from "./contentTab1/ContentTab2";

const Clothers = () => {
  return (
    <div className={styles.wrapperHighLightProducts}>
      <div className={`container ${styles.HighLightProducts}`}>
        <div className={styles.tabs}>
          <Tabs
            defaultIndex={0}
            onchange={(index) => {
              console.log(index);
            }}
          >
            <Tab title="Sơ Mi - Quần Dài">
              <ContentTab2 />
            </Tab>
            <Tab title="Áo Polo">
              <ContentTab1 />
            </Tab>
            <Tab title="Quần Short">
              <ContentTab2 />
            </Tab>
            <Tab title="Áo Khoác">
              <ContentTab1 />
            </Tab>
          </Tabs>
        </div>
        <div className={styles.hoverView}>
          <HoverView
            title="XEM TẤT CẢ Sơ Mi - Quần Dài "
            minWidth="400px"
            height="50px"
          />
        </div>
      </div>
    </div>
  );
};

export default Clothers;
