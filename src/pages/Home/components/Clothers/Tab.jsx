import styles from "./Tab.module.scss";

function Tab({ children }) {
  return <div className={styles.tab}>{children}</div>;
}

export default Tab;
