import React, { useState } from "react";
import styles from "./ProductDetailsMain.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Thumbs } from "swiper/modules";
import { FreeMode, Navigation } from "swiper/modules";
import Banner1 from "../../../../assets/images/productHighLight/spnb1.webp";
import Banner2 from "../../../../assets/images/productHighLight/spnb2.webp";
import Banner3 from "../../../../assets/images/productHighLight/spnb3.webp";
import Banner4 from "../../../../assets/images/productHighLight/spnb4.webp";
import Banner5 from "../../../../assets/images/productHighLight/spnb5.webp";
import Banner6 from "../../../../assets/images/productHighLight/spnb6.webp";
import NextIconCategory from "../../../../components/icons/NextIconCategory";
import ProSale from "../../../../components/Prosale/Prosale";

const colors = [
  "Xanh cổ vịt",
  "Xanh da trời",
  "Nâu nhạt 1",
  "Xám nhạt",
  "Đen tuyền",
  "Xanh min",
  "Dark navy",
  "Xanh rêu",
  "Xanh đậm",
  "Xanh đá",
  "Nâu nhạt",
  "Trắng kem",
  "Đen mịn",
  "Trắng",
  "Đỏ đô",
  "Xanh than",
];

const sizes = ["S", "M", "L", "XL"];

const images = [
  { id: 1, original: Banner1, thumbnail: Banner1 },
  { id: 2, original: Banner2, thumbnail: Banner2 },
  {
    id: 3,
    original: Banner3,
    thumbnail: Banner3,
  },
  {
    id: 4,
    original: Banner4,
    thumbnail: Banner4,
  },
  {
    id: 5,
    original: Banner5,
    thumbnail: Banner5,
  },
  {
    id: 6,
    original: Banner6,
    thumbnail: Banner6,
  },
];
const CustomNextArrow = () => {
  return (
    <div className={`custom-next-arrow ${styles.NextArrow}`}>
      <NextIconCategory />
    </div>
  );
};
const CustomPrevArrow = () => {
  return (
    <div className={`custom-prev-arrow ${styles.PrevArrow}`}>
      <NextIconCategory />
    </div>
  );
};

const ProductDetailsMain = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className={`container ${styles.productDetailsMain}`}>
      <div className={styles.productGallery}>
        <div className={styles.originalThumbnail}>
          <CustomNextArrow />
          <CustomPrevArrow />
          <Swiper
            className={styles.imagesOrigin}
            spaceBetween={10}
            navigation={{
              nextEl: ".custom-next-arrow",
              prevEl: ".custom-prev-arrow",
            }}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[Thumbs, Navigation, FreeMode]}
            watchSlidesProgress={true}
          >
            {images.map((item) => (
              <SwiperSlide key={item.id}>
                <img src={item.original} alt={`Slide  ${item.id}`} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Swiper
          className={styles.thumbnailBottomDetail}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          watchSlidesProgress={true}
          modules={[Thumbs, FreeMode]}
        >
          {images.map((item) => (
            <SwiperSlide key={item.id} className={styles.swiperSlide}>
              <img src={item.thumbnail} alt={`Thumbnail ${item.id}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.WrapperProductInFor}>
        <div className={styles.productInFor}>
          <div className={styles.heading}>
            <h2>Áo T shirt trơn in logo ngực FSTS001</h2>
          </div>
          <div className={styles.productSku}>
            <span>
              Mã sản phẩm: <strong>FSTS00112CT00SB_LG-M</strong>
            </span>
            <span>
              Tình trạng: <strong>Còn hàng</strong>
            </span>
            <span>
              Thương hiệu: <strong>TORANO</strong>
            </span>
          </div>
          <div className={styles.productPrice}>
            <span>Giá:</span>
            <span>149,000₫</span>
            <span>200,000₫</span>
            <div className={styles.productProSale}>
              <ProSale amount={"26%"} />
            </div>
          </div>
          <div className={styles.productVariants}>
            <div className={styles.productVariants_title}>
              <span>Màu sắc: </span> <br />
              <span>Xanh lá đậm</span>
            </div>
            <div className={`row row-cols-4 g-1 ${styles.checkbox_container}`}>
              {colors.map((item) => (
                <div>
                  <label className={styles.checkbox_item}>
                    <input type="checkbox" name="color" id="" value={item} />
                    <span>{item}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.sizeGroup}>
            <div className={styles.sizeTitle}>
              <span>Kích thước: </span>
            </div>
            <div className={`row row-cols-4 gx-1 ${styles.checkboxSize}`}>
              {sizes.map((item) => (
                <div>
                  <label className={styles.checkbox_item}>
                    <input type="checkbox" name="color" id="" value={item} />
                    <span>{item}</span>
                  </label>
                </div>
              ))}
            </div>
            <div className={styles.sizeGuide}>
              <button type="button">
                <a href="#">Hướng dẫn chọn size</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsMain;
