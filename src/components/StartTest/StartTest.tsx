import React from "react";
import styles from "./startTest.module.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";

interface LocationState {
  testName: string;
  testId: string;
}

export const StartTest = () => {
  const location = useLocation();
  const { testName, testId } = location.state as LocationState;
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 style={{ color: "#fff", textAlign: "center" }}>{testName}</h1>
      <button onClick={() => navigate(-1)}>back</button>
      <Button sx={{ width: "100%", margin: "0 auto" }} variant="outlined">
        start
      </Button>
    </div>
  );
};
