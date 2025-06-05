import React from "react";
import Slider from "react-slick";
import "@/assets/styles/global.scss";
import styles from "./Category.module.scss";
import NextIconCategory from "../../../../components/icons/NextIconCategory";
import Img1 from "../../../../assets/images/categories/home_category_1_img.webp";
import Img2 from "../../../../assets/images/categories/home_category_2_img.webp";
import Img3 from "../../../../assets/images/categories/home_category_3_img.webp";
import Img4 from "../../../../assets/images/categories/home_category_4_img.webp";
import Img5 from "../../../../assets/images/categories/home_category_5_img.webp";
import Img6 from "../../../../assets/images/categories/home_category_6_img.webp";
import Img7 from "../../../../assets/images/categories/home_category_7_img.webp";
import Img8 from "../../../../assets/images/categories/home_category_8_img.webp";

const categoryProducts = [
  {
    id: 1,
    img: Img1,
    name: "Áo PoLo",
  },
  {
    id: 2,
    img: Img2,
    name: "Áo Thun",
  },
  {
    id: 3,
    img: Img3,
    name: "Quần Jeans",
  },
  {
    id: 4,
    img: Img4,
    name: "Quần Âu",
  },

  {
    id: 5,
    img: Img5,
    name: "Sơ Mi",
  },
  {
    id: 6,
    img: Img6,
    name: "Quần Kaki",
  },
  {
    id: 7,
    img: Img7,
    name: "Quần Short",
  },
  {
    id: 8,
    img: Img8,
    name: "Áo Khoác",
  },
];

const Category = () => {
  return (
    <div className={`container ${styles.categories}`}>
      <div className={styles.categories_title}>
        <a href="" className={styles.categories_title_heading}>
          DANH MỤC SẢN PHẨM
        </a>
      </div>
      <CustomArrows />
    </div>
  );
};
function SampleNextArrow({ onClick }) {
  return (
    <div className={styles.slick_next} onClick={onClick}>
      <NextIconCategory className={styles.nextIcon} />
    </div>
  );
}

function SamplePrevArrow({ onClick }) {
  return (
    <div className={styles.slick_prev} onClick={onClick}>
      <NextIconCategory className={styles.nextIcon} />
    </div>
  );
}

function CustomArrows() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className={styles.slider_category}>
      <Slider {...settings}>
        {categoryProducts.map((category) => (
          <div className={styles.customSlide}>
            <div key={category.id} className={styles.category_products}>
              <img src={category.img} alt="#" className={styles.image} />
              <div className={styles.categories_description}>
                <h2>
                  <a href="">{category.name}</a>
                </h2>
                <div className={styles.categories_arrow}>
                  <NextIconCategory className={styles.categories_arrowNext} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Category;
