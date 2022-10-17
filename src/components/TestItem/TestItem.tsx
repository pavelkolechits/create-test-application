import React, { FC } from "react";
import styles from "./testItem.module.scss";
import { TimeStamp } from "../TimeStamp/TimeStamp";
import { getDateObject } from "../../helpers/getDateObject";

interface ITestItemProps {
  testName: string;
  description: string;
  isPrivate?: boolean;
  createdAt: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  author?: string;
}

export const TestItem: FC<ITestItemProps> = ({
  testName,
  description,
  isPrivate,
  createdAt,
  onClick,
  author,
}) => {
  return (
    <div onClick={onClick} className={styles.container}>
      <h2 className={styles["test-name"]}>
        Test name: <span>{testName}</span>
      </h2>
      <p className={styles.description}>
        Description: <span>{description}</span>
      </p>
      <p style={{ color: "rgba(250, 239, 142, 0.808)" }}>
        {isPrivate ? "Private" : "Public"}
      </p>

      <p className={styles.created}>
        Created at: <TimeStamp time={getDateObject(createdAt)} />
      </p>
      <p className={styles.author}>
        Author: <span>{author}</span>
      </p>
    </div>
  );
};
