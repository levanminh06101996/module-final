import React from "react";
import styles from "./Outfit.module.scss";
import Banner1 from "../../../../assets/images/outfit/outfit1.webp";
import Banner2 from "../../../../assets/images/outfit/outfit2.webp";
import Banner3 from "../../../../assets/images/outfit/outfit3.webp";
import HoverView from "../../../../components/HoverView/HoverView";
import Note_image from "../../../../assets/images/outfit/no_image.webp";
import AddIcon from "./AddIcon/AddIcon";

const Outfit = () => {
  return (
    <div className={styles.wrapperOutfit}>
      <div className={`container ${styles.outFitContainer}`}>
        <div className={styles.title}>
          <h2>OUTFIT OF THE DAY</h2>
        </div>
        <div className={`row row-cols-3 gx-3 ${styles.outFitMain}`}>
          <div className={styles.addIcon}>
            <div className={styles.groupIcon}>
              <AddIcon className={styles.icon} />
              <div className={styles.lds_ripple}>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
          <div className={styles.image_note}>
            <div className={styles.note_image}>
              <img src={Note_image} alt="" />
            </div>
            <div className={styles.title_note}>
              <h3>
                <a href="#">Tiêu đề sản phẩm</a>
              </h3>
              <div className={styles.notePrice}>
                <span>3,150,000₫</span>
                <span>3,650,000₫</span>
              </div>
            </div>
          </div>
          <div className={styles.outFitContent}>
            <div className={styles.image}>
              <img src={Banner1} alt="" />
            </div>
            <div className={styles.description}>
              <h2>OUTFIT TRẺ TRUNG</h2>
              <div className={styles.hoverView}>
                <HoverView minWidth="158px" height="46px" title="MUA FULLSET" />
              </div>
            </div>
          </div>
          <div className={styles.outFitContent}>
            <div className={styles.image}>
              <img src={Banner2} alt="" />
            </div>
            <div className={styles.description}>
              <h2>OUTFIT TRƯỞNG THÀNH</h2>
              <div className={styles.hoverView}>
                <HoverView minWidth="158px" height="46px" title="MUA FULLSET" />
              </div>
            </div>
          </div>
          <div className={styles.outFitContent}>
            <div className={styles.image}>
              <img src={Banner3} alt="" />
            </div>
            <div className={styles.description}>
              <h2>OUTFIT ĐI CHƠI</h2>
              <div className={styles.hoverView}>
                <HoverView minWidth="158px" height="46px" title="MUA FULLSET" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.hoverViewTwo}>
          <HoverView minWidth="134px" height="46px" title="XEM THÊM" />
        </div>
      </div>
    </div>
  );
};

export default Outfit;
