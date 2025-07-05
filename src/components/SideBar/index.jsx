import React, { useState } from "react";
import styles from "./SideBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import ArrowNavbar from "../ArrowNavbar";
import { NavLink } from "react-router-dom";

export const menuData = [
  { title: "Sản phẩm mới", href: "/products/new", children: null },
  {
    title: "Danh mục sale",
    href: "/products/sale",
    children: [
      { title: "Sale 70%", href: "/products/sale/70" },
      { title: "Sale upto 50%", href: "/products/sale/50" },
      { title: "Sale upto 30%", href: "/products/sale/30" },
      { title: "Sale 10% & 20%", href: "/products/sale/10-20" },
    ],
  },
  {
    title: "Áo nam",
    href: "/products/men-shirts",
    children: [
      { title: "Áo Polo", href: "/products/men-shirts/polo" },
      { title: "Áo Thun", href: "/products/men-shirts/tshirt" },
      { title: "Áo Blazer", href: "/products/men-shirts/blazer" },
      { title: "Áo Khoác", href: "/products/men-shirts/jacket" },
      { title: "Áo Len", href: "/products/men-shirts/sweater" },
      { title: "Áo-Quần Nỉ", href: "/products/men-shirts/suit" },
    ],
  },
  {
    title: "Quần nam",
    href: "/products/men-pants",
    children: [
      { title: "Quần Short", href: "/products/men-pants/short" },
      { title: "Quần Jean", href: "/products/men-pants/jean" },
      { title: "Quần Âu", href: "/products/men-pants/formal" },
      { title: "Quần Dài Kaki", href: "/products/men-pants/kaki" },
    ],
  },
  {
    title: "Bộ sưu tập",
    href: "/products/collections",
    children: [
      { title: "2023", href: "/products/collections/2023" },
      { title: "2022", href: "/products/collections/2022" },
      { title: "2021", href: "/products/collections/2021" },
      { title: "2020", href: "/products/collections/2020" },
    ],
  },
  { title: "Hệ thống cửa hàng", href: "/stores", children: null },
];

const SideBar = () => {
  const [size, setSize] = useState(true);
  const [colorActive, setColorActive] = useState(true);
  const [price, setPrice] = useState(0);

  const handleChange = (e) => {
    setPrice(Number(e.target.value));
  };
  const [currentList, setCurrentList] = useState(true);
  const [priceActive, setPriceActive] = useState(true);
  const toggleActive = () => {
    setCurrentList((prev) => !prev);
  };

  const [openItems, setOpenItems] = useState({});
  const toggleItem = (index) => {
    setOpenItems((prev) => ({ ...prev, [index]: !prev[index] }));
  };
  return (
    <div className={styles.sideBar}>
      <p className={styles.Heading}>Bộ lọc</p>
      <div className={styles.subTitle} onClick={toggleActive}>
        <span>Danh mục sản phẩm</span>
        <FontAwesomeIcon icon={currentList ? faMinus : faPlus} />
      </div>
      {currentList && (
        <div
          className={`${currentList ? styles.show : ""}
        `}
        >
          <nav>
            <ul className={styles.navBar}>
              {menuData.map((item, index) => (
                <li
                  key={index}
                  className={styles.subMenu}
                  onClick={() => {
                    toggleItem(index);
                  }}
                >
                  <NavLink className={styles.navLink}>{item.title}</NavLink>
                  {item.children && (
                    <div
                      className={styles.arrowNav}
                      style={{
                        transform: openItems[index]
                          ? "rotate(180deg)"
                          : "rotate(0deg)",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <ArrowNavbar />
                    </div>
                  )}
                  {item.children &&
                    openItems[index] &&
                    item.children.map((child) => (
                      <ul className={styles.treeMenu}>
                        <li>
                          <NavLink>{child.title}</NavLink>
                        </li>
                      </ul>
                    ))}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
      <div className={styles.groupPrice}>
        <div
          className={styles.priceTitle}
          onClick={() => setPriceActive((prev) => !prev)}
        >
          <span>Khoảng Giá</span>
          <FontAwesomeIcon icon={priceActive ? faMinus : faPlus} />
        </div>
      </div>
      {priceActive && (
        <div className="slider-container">
          <input
            type="range"
            min="0"
            max="3000000"
            value={price}
            className="slider"
            onChange={handleChange}
          />
          <div id="price-value">{price.toLocaleString("vi-VN")}₫</div>
        </div>
      )}
      <div
        className={styles.colorTitle}
        onClick={() => setColorActive((prev) => !prev)}
      >
        <span>Màu sắc</span>
        <FontAwesomeIcon icon={colorActive ? faMinus : faPlus} />
      </div>
      <div className={styles.groupSize}>
        <div
          className={styles.sizeTitle}
          onClick={() => setSize((prev) => !prev)}
        >
          <span>Size</span>
          <FontAwesomeIcon icon={size ? faMinus : faPlus} />
        </div>
        {size && (
          <ul className={styles.sizeList}>
            <li>
              <div>
                <span>S</span>
              </div>
            </li>
            <li>
              <div>
                <span>M</span>
              </div>
            </li>
            <li>
              <div>
                <span>L</span>
              </div>
            </li>
            <li>
              <div>
                <span>XL</span>
              </div>
            </li>
            <li>
              <div>
                <span>XXL</span>
              </div>
            </li>
            <li>
              <div>
                <span>36</span>
              </div>
            </li>
            <li>
              <div>
                <span>37</span>
              </div>
            </li>
            <li>
              <div>
                <span>38</span>
              </div>
            </li>
            <li>
              <div>
                <span>39</span>
              </div>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SideBar;
