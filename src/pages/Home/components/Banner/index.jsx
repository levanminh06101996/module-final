import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./Banner.module.scss";
import Banner2 from "@/assets/images/banner2.webp";
import Banner3 from "@/assets/images/banner3.webp";
import Banner4 from "@/assets/images/Banner4.webp";
import Banner5 from "@/assets/images/Banner5.jpg";
import Banner6 from "@/assets/images/Banner6.webp";

const bannerImages = [Banner5, Banner4, Banner6, Banner2, Banner3];
const NextArrow = ({ onClick }) => (
  <div className={styles.slick_next} onClick={onClick}></div>
);

const PrevArrow = ({ onClick }) => (
  <div className={styles.slick_prev} onClick={onClick}></div>
);

const SliderCommon = () => {
  // Cấu hình cho Slick
  const settings = {
    dots: true, // Hiển thị dots
    infinite: true, // Vòng lặp vô hạn
    speed: 500, // Tốc độ chuyển slide
    slidesToShow: 1, // Số slide hiển thị cùng lúc
    slidesToScroll: 1, // Số slide chuyển mỗi lần
    autoplay: true, // Tự động chạy
    autoplaySpeed: 2000, //
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    arrows: true, // Hiển thị mũi tên
    appendDots: (dots) => (
      <div>
        <ul className={styles.customDots}>{dots}</ul>
      </div>
    ),

    customPaging: () => (
      <div
        className={styles.paging}
        style={{
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          backgroundColor: "rgba(181, 175, 113, 0.94)",
        }}
      ></div>
    ),
  };

  return (
    <div className={`${styles.sliderContainer} ${styles.sliderCommonWrapper}`}>
      <Slider {...settings}>
        {bannerImages.map((image, index) => (
          <div key={index} className={styles.slideItem}>
            <img
              src={image}
              alt={`Banner ${index + 1}`}
              className={styles.slideImage}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const Banner = () => {
  return (
    <section className={styles.banner}>
      <SliderCommon className={styles.slidercommon} />
    </section>
  );
};

export default Banner;
