import React, { ChangeEvent, FC, useState } from "react";
import styles from "./edit.module.scss";
import { Button } from "@mui/material";
import {useActions} from '../../hooks/useActions'

interface IEditAreaProps {
  setShowEditArea: (isShowed: boolean) => void;
  value: string;
  questionId: string
}

export const EditArea: FC<IEditAreaProps> = ({ setShowEditArea, value, questionId }) => {
    const {editQuestion} = useActions()

  const [questionText, setQuestionText] = useState(value);

  const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setQuestionText(e.target.value);
  };

  const saveEdit = () => {
    editQuestion({question: questionText, questionId})
    setShowEditArea(false)
  }

  return (
    <div className={styles.container}>
      <textarea
        onChange={onChangeHandler}
        value={questionText}
        className={styles["edit-area"]}
      ></textarea>
      <div className={styles["button-container"]}>
        <Button  onClick={() => setShowEditArea(false)} variant="text">
          cancel
        </Button>
        <Button  onClick={saveEdit} variant="text">save</Button>
      </div>
    </div>
  );
};
