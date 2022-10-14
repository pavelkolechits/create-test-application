import React, { useState, FC, ChangeEvent } from "react";
import styles from "./editAnswer.module.scss";
import { Button } from "@mui/material";
import { useActions } from "../../hooks/useActions";

interface IEditAnswerProps {
  text: string;
  questionId: string;
  answerId: string;
  setShowArea: (isShowed: boolean) => void;
}

export const EditAnswer: FC<IEditAnswerProps> = ({
  text,
  questionId,
  answerId,
  setShowArea,
}) => {
  const [value, setValue] = useState(text);
  const { editAnswer } = useActions();
  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const onClickHandler = () => {
    editAnswer({ questionId, answerId, answer: value });
    setShowArea(false);
  };

  return (
    <div className={styles.container}>
      <textarea
        onChange={onChangeHandler}
        value={value}
        className={styles.textarea}
      ></textarea>
      <div className={styles["button-wrap"]}>
        <Button onClick={() => setShowArea(false)}>cancel</Button>
        <Button onClick={onClickHandler}>save</Button>
      </div>
    </div>
  );
};
