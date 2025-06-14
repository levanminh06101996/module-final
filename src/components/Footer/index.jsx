import React from "react";
import styles from "./Footer.module.scss";
import FaceBook from "./IconsSocial/FaceBook";
import Intagram from "./IconsSocial/Intagram";
import Tiktok from "./IconsSocial/Tiktok";
import Tweeter from "./IconsSocial/Tweeter";
import Youtube from "./IconsSocial/Youtube";
import Payment1 from "../../assets/images/footer/payment_1_img.webp";
import Payment2 from "../../assets/images/footer/payment_2_img.webp";
import Payment3 from "../../assets/images/footer/payment_3_img.webp";
import Payment4 from "../../assets/images/footer/payment_4_img.webp";
import Payment5 from "../../assets/images/footer/payment_5_img.webp";
import Payment6 from "../../assets/images/footer/payment_6_img.webp";
import Shipment1 from "../../assets/images/footer/shipment_1_img.webp";
import Shipment2 from "../../assets/images/footer/shipment_2_img.webp";
import Shipment3 from "../../assets/images/footer/shipment_3_img.webp";
import Shipment4 from "../../assets/images/footer/shipment_4_img.webp";
import FooterLogo from "../../assets/images/footer/footer_logobct_img.webp";
import HoverView from "../HoverView/HoverView";
import Email from "./IconsSocial/Email";
const Footer = () => {
  return (
    <div className={styles.WrapperFooter}>
      <div className={`row row-cols-4 container ${styles.footerContainer}`}>
        <div className={styles.col}>
          <div className={styles.colOne}>
            <h3 className={styles.title}>Thời trang nam TORANO</h3>
            <div className={styles.contentOne}>
              <p>
                Hệ thống thời trang cho phái mạnh hàng đầu Việt Nam, hướng tới
                phong cách nam tính, lịch lãm và trẻ trung.
              </p>
              <ul className={styles.footerNavSocial}>
                <li>
                  <a href="">
                    <FaceBook />
                  </a>
                </li>
                <li>
                  <a href="">
                    <Tweeter />
                  </a>
                </li>
                <li>
                  <a href="">
                    <Intagram />
                  </a>
                </li>
                <li>
                  <a href="">
                    <Tiktok />
                  </a>
                </li>
                <li>
                  <a href="">
                    <Youtube />
                  </a>
                </li>
              </ul>
              <div className={styles.contentPayment}>
                <h4 className={styles.paymentTitle}>Phương thức thanh toán</h4>
                <ul className={styles.paymentList}>
                  <li>
                    <img src={Payment1} alt="" />
                  </li>
                  <li>
                    <img src={Payment2} alt="" />
                  </li>
                  <li>
                    <img src={Payment3} alt="" />
                  </li>
                  <li>
                    <img src={Payment4} alt="" />
                  </li>
                  <li>
                    <img src={Payment5} alt="" />
                  </li>
                  <li>
                    <img src={Payment6} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.colTwo}>
            <h3 className={styles.title}>Thông tin liên hệ</h3>
            <div className={styles.contentTwo}>
              <ul className={styles.footerInformationContacts}>
                <li>
                  <b>Địa chỉ:</b> Tầng 8, tòa nhà Ford, số 313 Trường Chinh,
                  quận Thanh Xuân, Hà Nội
                </li>
                <li>
                  <b>Điện thoại:</b> 0964942121
                </li>
                <li>
                  <b>Fax:</b> 0904636356
                </li>
                <li>
                  <b>Email:</b> cskh@torano.vn
                </li>
              </ul>
              <div className={styles.informationShipments}>
                <p>Phương thức vận chuyển</p>
                <ul className={styles.shipMentsImg}>
                  <li>
                    <img src={Shipment1} alt="" />
                  </li>
                  <li>
                    <img src={Shipment2} alt="" />
                  </li>
                  <li>
                    <img src={Shipment3} alt="" />
                  </li>
                  <li>
                    <img src={Shipment4} alt="" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.colThree}>
            <h3 className={styles.title}>Nhóm liên kết</h3>
            <div className={styles.contentThree}>
              <ul>
                <li>
                  <a href="">Tìm kiếm</a>
                </li>
                <li>
                  <a href="">Giới thiệu</a>
                </li>
                <li>
                  <a href="">Chính sách đổi trả</a>
                </li>
                <li>
                  <a href="">Chính sách bảo mật</a>
                </li>
                <li>
                  <a href="">Tuyển dụng</a>
                </li>
                <li>
                  <a href="">Liên hệ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.col}>
          <div className={styles.colFour}>
            <h3 className={styles.title}>Đăng ký nhận tin</h3>
            <div className={styles.contentFour}>
              <p>
                Để cập nhật những sản phẩm mới, nhận thông tin ưu đãi đặc biệt
                và thông tin giảm giá khác.
              </p>
              <form action="">
                <div className={styles.iconEmail}>
                  <Email />
                </div>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Nhập email của bạn"
                />
                <span className={styles.buttonEmail}>
                  <button type="submit">ĐĂNG KÝ</button>
                </span>
              </form>
              <div className={styles.logo}>
                <img src={FooterLogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyRight}>
        <p className={`container ${styles.textCopyRight}`}>
          <a href="">Copyright © 2025 Torano. Powered by Haravan</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
