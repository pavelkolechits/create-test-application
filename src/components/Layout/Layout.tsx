import { Appbar } from "../Appbar/Appbar";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss"

export const Layout = () => {
  return (
    <>
    <div className={styles.background}>
      <Appbar />
        <Outlet />
      </div>
    </>
  );
};
