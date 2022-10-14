import React from "react";
import styles from "./form.module.scss";

export const Form = () => {
  return (
    <div className={styles["login-box"]}>
      <h2>Login</h2>
      <form>
        <div className={styles["user-box"]}>
          <input type="text" name="" required></input>
          <label>Username</label>
        </div>
        <div className={styles["user-box"]}>
          <input type="password" name="" required></input>
          <label>Password</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login 
        </a>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Login with Google
        </a>
      </form>
    </div>
  );
};
