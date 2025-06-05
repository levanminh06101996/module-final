import styles from "./Prosale.module.scss";

function Prosale({ amount }) {
  return (
    <div className={styles.proSale}>
      <span className={styles.discountAmount}>{amount}</span>
    </div>
  );
}

export default Prosale;
