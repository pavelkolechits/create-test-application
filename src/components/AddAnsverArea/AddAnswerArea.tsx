import React, { ChangeEvent, useState, KeyboardEvent, FC } from "react";
import styles from "./addAnswer.module.scss";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import {useActions} from '../../hooks/useActions'
import {getId} from '../../helpers/getId'

interface IAddAnswerAreaProps {
  questionId: string;
  setShowAddAnswerArea: (isShowed: boolean) => void;
}

export const AddAnswerArea: FC<IAddAnswerAreaProps> = ({
  questionId,
  setShowAddAnswerArea,
}) => {

  const {addAnswer} = useActions()
  const [value, setValue] = useState("");

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const enterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (value.trim().length && e.key === "Enter") {
      e.preventDefault();
      addAnswer({questionId, answer: value, answerId: getId()})
      setValue("");
    }
    return;
  };

  return (
    <div className={styles.container}>
      <TextField
        onChange={onChangeHandler}
        onKeyDown={enterHandler}
        value={value}
        style={{ width: "95%" }}
        id="standard-textarea"
        label="Enter a answer"
        placeholder="answer"
        multiline
        variant="standard"
        InputLabelProps={{
          style: { color: "#ffffff50" },
        }}
        InputProps={{
          style: { color: "#ccc", borderBottom: "1px solid #ffffff50" },
        }}
      />
      <Button>add</Button>
    </div>
  );
};
