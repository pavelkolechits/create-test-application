import { Appbar } from "../Appbar/Appbar";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss"
import  ocean  from  './video/ocean.mp4'
import  moon  from  './video/moon.mp4'
import  water  from  './video/water.mp4'
import  nightForest  from  './video/nightForest.mp4'
import  r1  from  './video/r1.mp4'

export const Layout = () => {
  return (
    <>
    {/* <video  className={styles.video} autoPlay loop muted>
    <source src={ocean} type='video/mp4' />
    </video> */}
    <div className={styles.background}>

    </div>
      {/* <Appbar /> */}
        <Outlet />
    </>
  );
};
