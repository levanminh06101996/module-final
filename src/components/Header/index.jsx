import React, { use, useState } from "react";
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
import ArrowNavbar from "../ArrowNavbar";
import HoverView from "../HoverView/HoverView";
const Header = () => {
  const [active, setActive] = useState(false);
  const toggleActive = () => {
    setActive((prev) => !prev);
  };
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
                <a href="">
                  Danh mục Sale
                  <span className={styles.arrowHeader}>
                    <ArrowNavbar />
                  </span>
                </a>
                <ul className={styles.sub_menu}>
                  <li>
                    <a href="">Sale 70%</a>
                  </li>
                  <li>
                    <a href="">Sale Upto 50%</a>
                  </li>
                  <li>
                    <a href="">Sale Upto 30%</a>
                  </li>
                  <li>
                    <a href="">Sale 10% & 20%</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">
                  Áo nam
                  <div className={styles.arrowHeader}>
                    <ArrowNavbar />
                  </div>
                </a>
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
              </li>
              <li>
                <a href="">
                  Quần nam
                  <span className={styles.arrowHeader}>
                    <ArrowNavbar />
                  </span>
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
                  <span className={styles.arrowHeader}>
                    <ArrowNavbar />
                  </span>
                </a>
              </li>
              <li>
                <a href="">Hệ thống cửa hàng</a>
              </li>
            </ul>
          </div>
          <div className={styles.header_action}>
            <div>
              <SearchIcon className={styles.search_icon} />
            </div>
            <div className={styles.user_login} onClick={toggleActive}>
              <User className={styles.user_icon} />
              {active && (
                <div
                  className={`${styles.wrapperActive} ${
                    active ? styles.heroActive : ""
                  }`}
                >
                  <div className={styles.loginActive}>
                    <div className={styles.contentTitle}>
                      <p>ĐĂNG NHẬP TÀI KHOẢN</p>
                      <p>Nhập email và mật khẩu của bạn:</p>
                    </div>
                    <div>
                      <form action="">
                        <div className={styles.row}>
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Email"
                          />
                        </div>
                        <div className={styles.row}>
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Mật khẩu"
                          />
                        </div>
                      </form>
                    </div>
                    <p className={styles.row_description}>
                      This site is protected by reCAPTCHA and the Google
                      <a href=""> Privacy Policy</a> and
                      <a href=""> Terms of Service</a> apply.
                    </p>
                    <div className={styles.hoverViewHeader}>
                      <HoverView
                        minWidth="298px"
                        title="Đăng Nhập"
                        height="42px"
                      />
                    </div>
                    <div className={styles.secondary_action}>
                      <div className={styles.createAcc}>
                        <span>Khách hàng mới?</span>
                        <span>
                          <NavLink to={path.register}> Tạo tài khoản</NavLink>
                        </span>
                      </div>
                      <div className={styles.createAcc}>
                        <span>Quên mật khẩu?</span>
                        <span>
                          <NavLink to={path.register}>
                            {" "}
                            Khôi phục mật khẩu
                          </NavLink>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div>
              <ShoppingCart className={styles.shoppingcart_icon} />
            </div>
            <span className={styles.shoppingcart_number}>2</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
