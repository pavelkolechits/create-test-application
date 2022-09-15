import React from "react";
import { db } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IUser } from "../../types/user";
import styles from "./testsPage.module.scss";
import { Link } from "react-router-dom";
import { IQuestion, ITest } from "../../types/test";
import { TestItem } from "../../components/TestItem/TestItem";
import { useNavigate } from "react-router-dom";
import { resetAnswers } from "../../helpers/resetAnswers";
import { useActions } from "../../hooks/useActions";

export const TestsPage = () => {
  const { getInitialTest } = useActions();
  const navigate = useNavigate();
  const userState: IUser = useTypedSelector((i) => i.userReducer);
  const [tests, loading] = useCollectionData(
    db.collection("tests").where("author", "==", userState.user?.email) as any
  );

  const onClickHandler = (
    testName: string,
    test: IQuestion[],
    testId: string
  ) => {
    getInitialTest(resetAnswers(test));
    navigate(`/${userState.user?.userName}/${testId}`);
  };

  return (
    <>
      {!loading ? (
        <div className={styles.container}>
          {tests?.map((i) => (
            <TestItem
              onClick={() => onClickHandler(i.testName, i.test, i.testId)}
              testName={i.testName}
              isPrivate={i.isPrivate}
              createdAt={i.createdAt}
              description={i.description}
              key={i.testId}
              author={i.author}
            />
          ))}
        </div>
      ) : (
        <p style={{color: "#fff"}}>"Loading..."</p>
      )}
    </>
  );
};
