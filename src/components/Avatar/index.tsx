import styles from "./styles.module.css";

interface AvatarProps {
  src: string;
  alt: string;
  withBorder?: boolean;
}

export const Avatar = ({ src, alt, withBorder = true }: AvatarProps) => {
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
