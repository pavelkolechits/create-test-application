import React, {FC} from "react";
import styles from "./loader.module.scss";

interface ILoaderProps {
    color?: string
}

export const Loader:FC<ILoaderProps> = ({color}) => {
  return (
    <div style={{color}} className={styles.box}>
      <div className={styles["loader-1"]}></div>
    </div>
  );
};
