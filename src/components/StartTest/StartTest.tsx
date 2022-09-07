import React, { useState } from "react";
import styles from "./startTest.module.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { createQuestionsNavigate } from "../../helpers/questionsNavigate";

interface LocationState {
  testName: string;
  testId: string;
}

export const StartTest = () => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const test = useTypedSelector((i) => i.solveTestReducer.test);
  const location = useLocation();
  const { testName, testId } = location.state as LocationState;
  const navigate = useNavigate();
  console.log(createQuestionsNavigate(test));

  return (
    <div className={styles.container}>
      <h1 style={{ color: "#fff", textAlign: "center" }}>{testName}</h1>
      <button onClick={() => navigate(-1)}>back</button>
      <Button sx={{ width: "100%", margin: "0 auto" }} variant="outlined">
        start
      </Button>
      {test
        .map((_, index) => index + 1)
        .map((i) => (
          <button
            style={{ width: "30px", height: "30px", margin: "10px" }}
            onClick={() => setQuestionNumber(i - 1)}
          >
            {i}
          </button>
        ))}
      <div className={styles["test-container"]}>
        <h1 style={{ color: "#fff" }}>{test[questionNumber].question}</h1>
        <ul>
          {test[questionNumber].answers.map((i) => (
            <li style={{ color: "#fff" }}>{i.answer}</li>
          ))}
        </ul>
      </div>
      {test.length === questionNumber + 1 ? (
        <Button sx={{ width: "100%" }} variant="text">
          finish
        </Button>
      ) : (
        <Button
          sx={{ width: "100%" }}
          variant="text"
          onClick={() => setQuestionNumber(questionNumber + 1)}
        >
          next
        </Button>
      )}
    </div>
  );
};
