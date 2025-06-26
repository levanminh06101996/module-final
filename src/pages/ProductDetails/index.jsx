import React, { useState } from "react";
import styles from "./ProductDetails.module.scss";
import TitleBar from "../../components/TitleBar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Banner1 from "../../assets/images/productHighLight/spnb1.webp";
import Banner2 from "../../assets/images/productHighLight/spnb2.webp";
import Banner3 from "../../assets/images/productHighLight/spnb3.webp";
import Banner4 from "../../assets/images/productHighLight/spnb4.webp";
import Banner5 from "../../assets/images/productHighLight/spnb5.webp";
import Banner6 from "../../assets/images/productHighLight/spnb6.webp";
import NextIconCategory from "../../components/icons/NextIconCategory";
import ProductDetailsMain from "./components/Productmain";

// const images = [
//   { id: 1, original: Banner1, thumbnail: Banner1 },
//   { id: 2, original: Banner2, thumbnail: Banner2 },
//   {
//     id: 3,
//     original: Banner3,
//     thumbnail: Banner3,
//   },
//   {
//     id: 4,
//     original: Banner4,
//     thumbnail: Banner4,
//   },
//   {
//     id: 5,
//     original: Banner5,
//     thumbnail: Banner5,
//   },
// ];

const ProductDetails = () => {
  return (
    <div>
      <TitleBar heading="T-shirt" />
      <div className={`container`}>
        <div className={styles.heroProductDetail}>
          <ProductDetailsMain />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

{
  /* <div className={styles.topMainGallery}>
<Swiper
  spaceBetween={10}
  navigation={<SampleNextArrow />}
  thumbs={{ swiper: thumbsSwiper }}
  modules={[Thumbs, Navigation]}
  className={styles.mainGallery}
>
  {images.map((image) => (
    <SwiperSlide
      key={image.id}
      className={styles.childMainGallery}
    >
      <img src={image.original} alt={`Slide ${image.id}`} />
    </SwiperSlide>
  ))}
</Swiper>
</div>

{/* Thumbnails Gallery */
}
{
  /* <Swiper
onSwiper={setThumbsSwiper}
spaceBetween={10}
slidesPerView={5}
watchSlidesProgress={true}
modules={[Thumbs]}
className={styles.thumbsGallery}
>
<div className={`row row-cols-sm-2`}>
  {images.map((image) => (
    <SwiperSlide
      key={image.id}
      className={styles.childThumbGaller}
    >
      <img src={image.thumbnail} alt={`Thumbnail ${image.id}`} />
    </SwiperSlide>
  ))}
</div>
</Swiper> */
}
