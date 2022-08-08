import React from "react";
import { Outlet } from "react-router-dom";
import { UserPage } from "../../pages/UserPage/UserPage";
import styles from './upLayout.module.scss'

export const UserPageLayout = () => {
  return (
    <>
      <UserPage />
       <div className={styles.outlet}>
      <Outlet />
       </div>
    </>
  );
};
