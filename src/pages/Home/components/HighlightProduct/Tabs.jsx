import React, { useEffect, useRef, useState } from "react";
import styles from "./Tabs.module.scss";
import HoverView from "../../../../components/HoverView/HoverView";

const defaultFn = () => {};
function Tabs({ defaultIndex = 0, children, onchange = defaultFn }) {
  const tabs = React.Children.toArray(children);
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);

  const prevIndex = useRef(defaultIndex);
  console.log(prevIndex);
  useEffect(() => {
    if (prevIndex.current !== currentIndex) {
      onchange(currentIndex);
    }
    prevIndex.current = currentIndex;
  }, [currentIndex, onchange]);
  return (
    <div className={styles.tabsContainer}>
      <div className={styles.tabs_list}>
        {tabs.map((tab, index) => {
          const active = currentIndex === index;
          return (
            <button
              className={styles.button}
              key={index}
              onClick={() => setCurrentIndex(index)}
              style={{
                color: active ? "black" : "#959595",
                fontWeight: active ? "500" : "normal",
              }}
            >
              {tab.props.title}
            </button>
          );
        })}
      </div>
      <div className={styles.tabs_content}>{tabs[currentIndex]}</div>
      <div className={styles.hoverView1}>
        <HoverView
          title="XEM TẤT CẢ SẢN PHẨM NỔI BẬT "
          minWidth="400px"
          height="50px"
        />
      </div>
    </div>
  );
}

export default Tabs;
