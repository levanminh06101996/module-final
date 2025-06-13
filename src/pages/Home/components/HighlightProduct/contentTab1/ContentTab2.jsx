import styles from "./ContentTab1.module.scss";
import ContentTab1Data from "../../../../../db/highlight-products.json";
import Banner1 from "../../../../../assets/images/productHighLight/spnb1.webp";
import BgBaner1 from "../../../../../assets/images/productHighLight/bg_spnb1.webp";
import Prosale from "../../../../../components/Prosale/Prosale";
import AddToCart from "../../../../../components/AddToCart/AddToCart";
function ContentTab2() {
  return (
    <div className={`row row-cols-5 ${styles.slider_promotional}`}>
      {ContentTab1Data.productsHlSport.map((item) => (
        <div className={styles.customSlide} key={item.id}>
          <div className={styles.imageSlide}>
            <img src={item.bgi} alt="" className={styles.bgOverlay} />
            <img className={styles.imageDetail} src={item.img} alt="" />
            <div className={styles.proSale}>
              <Prosale amount={item.discount} />
            </div>
            <div className={styles.AddToCart}>
              <AddToCart />
            </div>
          </div>
          <div className={styles.informationDetail}>
            <h4 className={styles.varialt}>
              <p>{item.quantityColor}</p>
              <p>{item.quantitySize}</p>
            </h4>
            <h4 className={styles.titleDetail}>{item.title}</h4>
            <h4 className={styles.priceDetail}>
              <span>{item.quantityPrice}</span>
              <span>{item.quantityPriceNo}</span>
            </h4>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ContentTab2;
