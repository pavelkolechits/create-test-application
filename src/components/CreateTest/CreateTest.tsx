import React, { ChangeEvent, KeyboardEvent } from "react";
import styles from "./createTest.module.scss";
import { TextField } from "@mui/material";
import { ScrollableTabsButtonVisible } from "../ScrollableTabsButtonVisible/ScrollableTabsButtonVisible";
import { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { getId } from "../../helpers/getId";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Question } from "../Question/Question";

export const CreateTest = () => {
  const [value, setValue] = useState("");
  const { createQuestion } = useActions();
  const [testNumber, setTestNumber] = useState(0);
  const test = useTypedSelector(i => i.testReducer.test)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const enterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
   
    if (value.trim().length && e.key === "Enter") {
      e.preventDefault()
      createQuestion({
        question: value,
        answers: [],
        questionId: getId(),
      });
      setValue('')
    }
    return;
  };

  return (
    <div className={styles.container}>
      <ScrollableTabsButtonVisible setTestNumber={setTestNumber} />
      <TextField
        onChange={onChangeHandler}
        onKeyDown={enterHandler}
        value={value}
        style={{ width: "100%" }}
        id="standard-textarea"
        label="Enter a question"
        placeholder="question"
        multiline
        variant="standard"
        InputProps={{
          className: styles.input,
        }}
      />
     {test.length ? <Question question={test[testNumber].question} answers={test[testNumber].answers} id={test[testNumber].questionId}/> : ""} 
    </div>
  );
};
