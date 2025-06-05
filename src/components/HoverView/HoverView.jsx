import styles from "./HoverView.module.scss";
function HoverView({ minWidth = "250px", height = "40px", title }) {
  return (
    <div className={styles.hoverView}>
      <button
        type="submit"
        className={styles.buttonHover}
        style={{ minWidth, height }}
      >
        <span>{title}</span>
      </button>
    </div>
  );
}

export default HoverView;
