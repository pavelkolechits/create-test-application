import React, { FC } from "react";
import styles from "./testItem.module.scss";

interface ITestItemProps {
  testName: string;
  description: string;
  isPrivate?: boolean;
  createdAt: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>
}

export const TestItem: FC<ITestItemProps> = ({
  testName,
  description,
  isPrivate,
  createdAt,
  onClick
}) => {
  return (
    <div onClick={onClick} className={styles.container}>
      <h2>{testName}</h2>
      <p>{description}</p>
      <p>{isPrivate ? "Private" : "Public"}</p>
      <p>{createdAt}</p>
    </div>
  );
};
