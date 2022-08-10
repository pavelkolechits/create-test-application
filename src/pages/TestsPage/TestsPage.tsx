import React from "react";
import { db } from "../../firebase";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IUser } from "../../types/user";
import styles from "./testsPage.module.scss";
import { Link } from "react-router-dom";
import { IQuestion } from "../../types/test";

export const TestsPage = () => {
  const userState: IUser = useTypedSelector((i) => i.userReducer);
  const [tests, loading] = useCollectionData(
    db.collection("users/" + userState.user?.email + "/tests") as any
  );
  const onClickHandler = () => {

  }

  return (
    <div className={styles.container}>
      {tests?.map((i) => (
        <Link onClick={onClickHandler} to={`/${userState.user?.userName}/${i.testName}`}>
          <h2
            key={i.testId}
            style={{ color: "#fff", backgroundColor: "#000", margin: "5px" }}
          >
            {i.testName}
          </h2>
        </Link>
      ))}
    </div>
  );
};
