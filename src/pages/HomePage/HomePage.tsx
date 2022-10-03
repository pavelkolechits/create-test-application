import React from "react";
import { useActions } from "../../hooks/useActions";
import styles from "./homePage.module.scss";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        Here you can practice your knowledge by solving tests on different
        topics, you can also create your own tests to help other people or test
        the knowledge of your friends or colleagues
      </div>

      <Link className={styles.link} to="/get-started">
        <Button variant="outlined">Get started</Button>
      </Link>

      <Button
        sx={{ margin: "0 20px" }}
        onClick={() => navigate("/login", { state: "login" })}
        variant="outlined"
      >
        Log in
      </Button>

      <Button
        sx={{ margin: "0 20px" }}
        onClick={() => navigate("/login", { state: "signin" })}
        variant="outlined"
      >
        Sign in
      </Button>
    </div>
  );
};
