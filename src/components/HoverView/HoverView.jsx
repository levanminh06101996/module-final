import styles from "./HoverView.module.scss";
function HoverView({ minWidth = "", height = "", title }) {
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
