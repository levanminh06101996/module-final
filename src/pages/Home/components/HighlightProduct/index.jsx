import styles from "./HighlightProduct.module.scss";
import React from "react";
import Tabs from "./Tabs";
import Tab from "./Tab";
import ContentTab1 from "./contentTab1/ContentTab1";

const HighlightProduct = () => {
  return (
    <div className={styles.wrapperHighLightProducts}>
      <div className={`container ${styles.HighLightProducts}`}>
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
            <ContentTab1 />
          </Tab>
          <Tab title="ĐỒ CÔNG SỞ">
            <ContentTab1 />
          </Tab>
          <Tab title="ĐỒ THU ĐÔNG">
            <ContentTab1 />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default HighlightProduct;
