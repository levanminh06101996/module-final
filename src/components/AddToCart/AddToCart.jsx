import QuickView from "../icons/QuickView";
import ShoppingCart from "../icons/ShoppingCart";
import styles from "./AddToCart.module.scss";

function AddToCart() {
  return (
    <div className={styles.addToCart}>
      <button type="submit" className={styles.buttonShoppingCart}>
        <ShoppingCart className={styles.shoppingCart} />
        <span>THÊM VÀO GIỎ</span>
      </button>
      <button type="submit" className={styles.quickViewCart}>
        <QuickView className={styles.quickView} />
        <p>xem nhanh</p>
      </button>
    </div>
  );
}

export default AddToCart;
