import React from "react";
import styles from "./getStarted.module.scss";
import { db } from "../../firebase";
import { TestItem } from "../../components/TestItem/TestItem";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../types/user";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IQuestion } from "../../types/test";
import { resetAnswers } from "../../helpers/resetAnswers";
import { SearchAppBar } from "../../components/SearchAppBar";
import { filterTest } from "../../helpers/filterTests";

export const GetStartedPage = () => {
  const searchParams = useTypedSelector((i) => i.searchReducer);
  const [tests, loading] = useCollectionData(db.collection("tests") as any);
  const { getInitialTest } = useActions();
  const navigate = useNavigate();
  const userState: IUser = useTypedSelector((i) => i.userReducer);

  const onClickHandler = (
    testName: string,
    test: IQuestion[],
    testId: string
  ) => {
    getInitialTest(resetAnswers(test));
    navigate(`/${testName}/${testId}`);
  };

  return (
    <div className={styles.container}>
      <SearchAppBar />
      {!loading ? (
        <div className={styles["overflow-container"]}>
          {tests
            ?.filter((i) => {
              if (searchParams.value !== "all") {
                return filterTest(
                  i.testName,
                  i.description,
                  i.author,
                  searchParams.value
                );
              } else {
                return i[searchParams.searchBy].includes(searchParams.value);
              }
            })
            .map((i) => (
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
        <p style={{ color: "#fff" }}>"Loading..."</p>
      )}
    </div>
  );
};
