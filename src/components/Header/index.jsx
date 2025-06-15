import React from "react";
import "../../assets/styles/global.scss";
import styles from "./Header.module.scss";
import Notice from "../icons/Notice";
import logo from "@/assets/images/logo.webp";
import SearchIcon from "../icons/SearchIcon";
import User from "../icons/User";
import ShoppingCart from "../icons/ShoppingCart";
import OptionalSymbol from "../icons/OptionalSymbol";
import { NavLink } from "react-router-dom";
import path from "../../constants/path";
const Header = () => {
  return (
    <div>
      <section className={styles.topbar}>
        <div className={`container ${styles.topbar_bottom}`}>
          <div className={styles.purchase_information}>
            <span>
              Hotline mua hàng: <a href="tel:0964942121 ">0964942121 </a>
              (8:30-21:30, Tất cả các ngày trong tuần)
            </span>

            <div className={styles.contact}>
              <span>
                <a href="/page/lien-he"></a>Liên Hệ
              </span>
            </div>
          </div>

          <div className={styles.notice_title}>
            <Notice className={styles.notice_icon} />
            <span className={styles.notice_num}>0</span>
            <span className={styles.notice_of_me}>Thông báo của tôi</span>
          </div>
        </div>
      </section>

      <section className={styles.main_header}>
        <div className={`container ${styles.header_container}`}>
          <div className={styles.logo_header}>
            <a href="/">
              <img src={logo} alt="Torano" />
            </a>
          </div>
          <div>
            <ul className={styles.main_menu}>
              <li>
                <a href="">Sản phẩm mới</a>
              </li>
              <li>
                <a href="">Sale</a>
              </li>
              <li>
                <a href="">
                  Áo nam
                  {/* <OptionalSymbol className={styles.Optional_Symbol} /> */}
                  <ul className={styles.sub_menu}>
                    <li>
                      <a href="">Áo Khoác</a>
                    </li>
                    <li>
                      <a href="">Áo - Quần Nỉ</a>
                    </li>
                    <li>
                      <a href="">Áo Len</a>
                    </li>
                    <li>
                      <a href="">Áo Sơ Mi</a>
                    </li>
                    <li>
                      <a href="">Áo Polo</a>
                    </li>
                    <li>
                      <a href="">Áo Thun</a>
                    </li>
                    <li>
                      <a href="">Áo Blazer</a>
                    </li>
                  </ul>
                </a>
              </li>
              <li>
                <a href="">
                  Quần nam
                  {/* <OptionalSymbol className={styles.Optional_Symbol} /> */}
                  <ul className={styles.sub_menu}>
                    <li>
                      <a href="">Quần Âu</a>
                    </li>
                    <li>
                      <a href="">Quần Jeans</a>
                    </li>
                    <li>
                      <a href="">Quần Dài Kaki</a>
                    </li>
                    <li>
                      <a href="">Quần Short</a>
                    </li>
                  </ul>
                </a>
              </li>
              <li>
                <a href="">
                  Bộ sưu tập
                  {/* <OptionalSymbol className={styles.Optional_Symbol} /> */}
                </a>
              </li>
              <li>
                <a href="">Hệ thống cửa hàng</a>
              </li>
              <li>
                <a href="">Ưu đãi</a>
              </li>
            </ul>
          </div>
          <div className={styles.header_action}>
            <SearchIcon className={styles.search_icon} />
            <User className={styles.user_icon} />
            <ShoppingCart className={styles.shoppingcart_icon} />
            <span className={styles.shoppingcart_number}>2</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
