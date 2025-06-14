import React from "react";
import styles from "./Information.module.scss";
import HomePolice1 from "../../../../assets/images/home-police-icon/home_policy_icon_1.webp";
import HomePolice2 from "../../../../assets/images/home-police-icon/home_policy_icon_2.webp";
import HomePolice3 from "../../../../assets/images/home-police-icon/home_policy_icon_3.webp";
import HomePolice4 from "../../../../assets/images/home-police-icon/home_policy_icon_4.webp";
const Information = () => {
  return (
    <div className={styles.WrapperInformation}>
      <div
        className={`row row-cols-4 gx-2 container ${styles.InformationContainer}`}
      >
        <div className={styles.col}>
          <div className={styles.image}>
            <img src={HomePolice1} alt="" />
          </div>
          <div className={styles.inForSerVice}>
            <h3>Miễn phí vận chuyển</h3>
            <span>Áp dụng cho mọi đơn hàng từ 500k</span>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.image}>
            <img src={HomePolice2} alt="" />
          </div>
          <div className={styles.inForSerVice}>
            <h3>Đổi hàng dễ dàng</h3>
            <span>7 ngày đổi hàng vì bất kì lí do gì</span>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.image}>
            <img src={HomePolice3} alt="" />
          </div>
          <div className={styles.inForSerVice}>
            <h3>Hỗ trợ nhanh chóng</h3>
            <span>HOTLINE 24/7 : 0964942121</span>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.image}>
            <img src={HomePolice4} alt="" />
          </div>
          <div className={styles.inForSerVice}>
            <h3>Thanh toán đa dạng</h3>
            <span>Thanh toán khi nhận hàng, Napas, Visa, Chuyển Khoản</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Information;
