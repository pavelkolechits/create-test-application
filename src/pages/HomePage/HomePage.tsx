import React from "react";
import { useActions } from "../../hooks/useActions";
import styles from "./homePage.module.scss";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";


export const HomePage = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        Here you can practice your knowledge by solving tests on different
        topics, you can also create your own tests to help other people or test
        the knowledge of your friends or colleagues
      </div>

      <Link className={styles.link} to="/">
        <Button variant="text">Get started</Button>
      </Link>

      {/* <Link className={styles.link} to="/login"> */}
        <Button className={styles["login-button"]}  onClick={() => navigate("/login", {state: "login"})} variant="text">Log in</Button>
      {/* </Link> */}

      {/* <Link className={styles.link} to="/login"> */}
        <Button className={styles["signin-button"]}  onClick={() => navigate("/login", {state: "signin"})} variant="text">Sign in</Button>
      {/* </Link> */}

    </div>
  );
};
