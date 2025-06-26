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
            thumbs={
              thumbsSwiper && thumbsSwiper?.initialized
                ? { swiper: thumbsSwiper }
                : undefined
            }
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
            <SwiperSlide key={item.id}>
              <img src={item.thumbnail} alt={`Thumbnail ${item.id}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className={styles.WrapperProductInFor}>
        <div className={styles.productInFor}></div>
      </div> */}
    </div>
  );
};

export default ProductDetailsMain;
