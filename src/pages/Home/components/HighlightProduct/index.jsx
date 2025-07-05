import styles from "./HighLightProduct.module.scss";
import React from "react";
import Tabs from "./Tabs";
import Tab from "./Tab";
import ContentTab1 from "./contentTab1/ContentTab1";
import HoverView from "@/components/HoverView/HoverView";
import ContentTab2 from "./contentTab1/ContentTab2";

const HighlightProduct = () => {
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
            <Tab title="SẢN PHẨM NỔI BẬT">
              <ContentTab1 />
            </Tab>
            <Tab title="ĐỒ THỂ THAO">
              <ContentTab2 />
            </Tab>
            <Tab title="ĐỒ CÔNG SỞ">
              <ContentTab1 />
            </Tab>
            <Tab title="ĐỒ THU ĐÔNG">
              <ContentTab2 />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default HighlightProduct;
