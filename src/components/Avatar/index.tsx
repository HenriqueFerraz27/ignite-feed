import { ImgHTMLAttributes } from "react";
import styles from "./styles.module.css";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  withBorder?: boolean;
}

export const Avatar = ({ withBorder = true, ...rest }: AvatarProps) => {
  return (
    <div
      className={
        withBorder ? styles["avatar--border-on"] : styles["avatar--border-off"]
      }
    >
      <a>
        <img {...rest} />
      </a>
    </div>
  );
};
