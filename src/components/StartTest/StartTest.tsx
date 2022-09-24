import React, { useState, useEffect, FC } from "react";
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
import { ResultsItem } from "../ResultsItem/ResultsItem";

export const StartTest = () => {
  const {
    getInitialTest,
    resetTest,
    getOriginTest,
    getUserVariantTest,
    compareTests,
  } = useActions();
  const params = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const solvedTest = useTypedSelector((i) => i.solveTestReducer);
  const initialTest = useTypedSelector((i) => i.testReducer);
  const [isStarted, setIsStarted] = useState(false);
  const {wrongAnswers, originTest, userVariantTest } = useTypedSelector(i => i.compareTestReducer)
  const [showResult, setShowResult] = useState(false)

  useEffect(() => {
    db.collection("tests")
      .where("testId", "==", params.testId)
      .get()
      .then((doc) =>
        doc.docs.forEach((i) => {
          getInitialTest(i.data());
          getOriginTest(i.data());
        })
      )
      .then(() => resetTest())
      .then(() => setIsLoaded(true));
  }, []);

  const start = () => {
    setIsStarted(true);
  };

  return (
    <div className={styles.container}>
      <div className={styles["overflow-container"]}>
      {isLoaded ? (
        <>
          <h1 style={{ color: "#fff", textAlign: "center", margin: "20px 0" }}>
            {solvedTest.testName}
          </h1>
          {!isStarted && (
            <Button
              onClick={start}
              sx={{ width: "100%", margin: "0 auto" }}
              variant="contained"
            >
              start
            </Button>
          )}
           {showResult && <ResultsItem questions={userVariantTest} wrongAnswers={wrongAnswers} />} 
          {isStarted && !showResult && solvedTest.test
            .map((_, index) => index + 1)
            .map((i) => (
              <Button
                key={i}
                variant={questionNumber + 1 === i ? "contained" : "outlined"}
                sx={{ width: "30px", height: "30px", margin: "10px" }}
                onClick={() => setQuestionNumber(i - 1)}
              >
                {i}
              </Button>
            ))}

          {isStarted && !showResult && (
            <TestItem
              showResult={showResult}
              setShowResult={setShowResult}
              setQuestionNumber={setQuestionNumber}
              solvedTest={solvedTest}
              questionNumber={questionNumber}
            />
          )}
        </>
      ) : (
        <h1 style={{ color: "#fff" }}>Loading...</h1>
      )}
      </div>
    </div>
  );
};




interface ITestItemProps {
  questionNumber: number;
  solvedTest: ITest;
  setQuestionNumber: (questionNumber: number) => void;
  showResult: boolean;
  setShowResult: (isShowed: boolean) => void
}

const TestItem: FC<ITestItemProps> = ({
  questionNumber,
  solvedTest,
  setQuestionNumber,
  setShowResult,
  showResult
}) => {
  const {
    getInitialTest,
    resetTest,
    getOriginTest,
    getUserVariantTest,
    compareTests,
  } = useActions();
  const getResult = async () => {
    await getUserVariantTest(solvedTest.test);
    await compareTests();
    setShowResult(true)
  };
  return (
    <>
      <div className={styles["test-container"]}>
        <h1 style={{ color: "#fff" }}>
          {solvedTest.test[questionNumber].question}
        </h1>
        {solvedTest.test[questionNumber].answers.map((i) => (
          <SolveAnswerItem
            answer={i.answer}
            answerId={i.answerId}
            isSelected={i.isCorrect}
            questionId={solvedTest.test[questionNumber].questionId}
          />
        ))}
      </div>

      {solvedTest.test.length === questionNumber + 1 ? (
        <Button onClick={getResult} sx={{ width: "100%" }} variant="text">
          finish
        </Button>
      ) : (
        <Button
          sx={{ width: "100%" , margin: "20px 0"}}
          variant="contained"
          onClick={() => setQuestionNumber(questionNumber + 1)}
        >
          next
        </Button>
      )}
    </>
  );
};
