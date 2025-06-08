import styles from "./Test.module.scss";

function Test() {
  return (
    <div className={styles.lds_ripple}>
      <div></div>
      <div></div>
    </div>
  );
}

export default Test;
