import React, { useState } from "react";
import TitleBar from "../../components/TitleBar";
import styles from "./Products.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import ArrowNavbar from "../../components/arrowNavbar";
const Products = () => {
  return (
    <div>
      <TitleBar />
      <div className={`container`}>
        <div className={styles.heroProducts}>
          <div className={styles.sideBar}>
            <p className={styles.Heading}>Bộ lọc</p>
            <div className={styles.subTitle}>
              <span>Danh mục sản phẩm</span>
              {/* <FontAwesomeIcon icon={faPlus} /> */}
              <FontAwesomeIcon icon={faMinus} />
            </div>
            <nav>
              <ul className={styles.navBar}>
                <li className={styles.subMenu}>
                  <a href="">Sản phẩm mới</a>
                </li>
                <li className={styles.subMenu}>
                  <a href="">Danh mục sale</a>
                  <div className={styles.arrowNav}>
                    <ArrowNavbar />
                  </div>
                  <ul className={styles.treeMenu}>
                    <li>
                      <a href="">Sale 70%</a>
                    </li>
                    <li>
                      <a href="">Sale upto 50%</a>
                    </li>
                    <li>
                      <a href="">Sale upto 30%</a>
                    </li>
                    <li>
                      <a href="">Sale 10% & 20%</a>
                    </li>
                  </ul>
                </li>
                <li className={styles.subMenu}>
                  <a href="">Áo nam</a>
                  <div className={styles.arrowNav}>
                    <ArrowNavbar />
                  </div>
                  <ul className={styles.treeMenu}>
                    <li>
                      <a href="">Áo Polo</a>
                    </li>
                    <li>
                      <a href="">Áo Thun</a>
                    </li>
                    <li>
                      <a href="">Áo Blazer</a>
                    </li>
                    <li>
                      <a href="">Áo Khoác</a>
                    </li>
                    <li>
                      <a href="">Áo Len</a>
                    </li>
                    <li>
                      <a href="">Áo-Quần Nỉ</a>
                    </li>
                  </ul>
                </li>
                <li className={styles.subMenu}>
                  <a href="">Quần nam</a>
                  <div className={styles.arrowNav}>
                    <ArrowNavbar />
                  </div>
                  <ul className={styles.treeMenu}>
                    <li>
                      <a href="">Quần Short</a>
                    </li>
                    <li>
                      <a href="">Quần Jean</a>
                    </li>
                    <li>
                      <a href="">Quần Âu</a>
                    </li>
                    <li>
                      <a href="">Quần Dài Kaki</a>
                    </li>
                  </ul>
                </li>
                <li className={styles.subMenu}>
                  <a href="">Bộ sưu tập</a>
                  <div className={styles.arrowNav}>
                    <ArrowNavbar />
                  </div>
                  <ul className={styles.treeMenu}>
                    <li>
                      <a href="">2023</a>
                    </li>
                    <li>
                      <a href="">2022</a>
                    </li>
                    <li>
                      <a href="">2021</a>
                    </li>
                    <li>
                      <a href="">2020</a>
                    </li>
                  </ul>
                </li>
                <li className={styles.subMenu}>
                  <a href="">Hệ thống cửa hàng</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* <div className={styles.contentProducts}></div> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
