import styles from "./styles.module.css";

export const Avatar = ({ src, alt, withBorder = true }) => {
  return (
    <div
      className={
        withBorder ? styles["avatar--border-on"] : styles["avatar--border-off"]
      }
    >
      <a>
        <img src={src} alt={alt} />
      </a>
    </div>
  );
};
