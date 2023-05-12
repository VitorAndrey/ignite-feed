import styles from "./Avatar.module.css";

export function Avatar({ src, border = true }) {
  return (
    <img className={`${styles.avatar} ${border ? styles.border : styles.noBorder}`} src={src} />
  );
}
