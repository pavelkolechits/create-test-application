import React, { useState, useEffect } from "react";
import styles from "./startTest.module.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { createQuestionsNavigate } from "../../helpers/questionsNavigate";
import { db, auth } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useActions } from "../../hooks/useActions";
import { resetAnswers } from "../../helpers/resetAnswers";
import { ITest } from "../../types/test";
import { IUser } from "../../types/user";
import { SolveAnswerItem } from "../SolveAnswerItem/SolveAnswerItem";

export const StartTest = () => {
  const { getInitialTest, resetTest } = useActions();
  const params = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const initialTest = useTypedSelector((i) => i.solveTestReducer);

  useEffect(() => {
    db.collection("tests")
      .where("testId", "==", params.testId)
      .get()
      .then((doc) => doc.docs.forEach((i) => getInitialTest(i.data())))
      .then(() => resetTest())
      .then(() => setIsLoaded(true));
  }, []);

  const start = () => {};

  return (
    <div className={styles.container}>
      {isLoaded ? (
        <>
          <h1 style={{ color: "#fff", textAlign: "center" }}>
            {initialTest.testName}
          </h1>

          {/* <button onClick={() => navigate(-1)}>back</button> */}

          <Button
            onClick={start}
            sx={{ width: "100%", margin: "0 auto" }}
            variant="outlined"
          >
            start
          </Button>

          {initialTest.test
            .map((_, index) => index + 1)
            .map((i) => (
              <Button
                variant="outlined"
                sx={{ width: "30px", height: "30px", margin: "10px" }}
                onClick={() => setQuestionNumber(i - 1)}
              >
                {i}
              </Button>
            ))}
          <div className={styles["test-container"]}>
            <h1 style={{ color: "#fff" }}>
              {initialTest.test[questionNumber].question}
            </h1>
            {initialTest.test[questionNumber].answers.map((i) => (
              <SolveAnswerItem
                answer={i.answer}
                answerId={i.answerId}
                isSelected={i.isCorrect}
                questionId={initialTest.test[questionNumber].questionId}
              />
            ))}
          </div>

          {initialTest.test.length === questionNumber + 1 ? (
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
        </>
      ) : (
        <h1 style={{ color: "#fff" }}>Loading</h1>
      )}
    </div>
  );
};
