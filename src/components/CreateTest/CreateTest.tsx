import React, { ChangeEvent, KeyboardEvent , useRef} from "react";
import styles from "./createTest.module.scss";
import { TextField } from "@mui/material";
import { ScrollableTabsButtonVisible } from "../ScrollableTabsButtonVisible/ScrollableTabsButtonVisible";
import { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { getId } from "../../helpers/getId";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { Question } from "../Question/Question";
import { useNavigate } from "react-router-dom";
import { SaveTestOptions } from "../SaveTestOptions/SaveTestOptions";
import { Link } from "react-router-dom";
import { IUser } from "../../types/user";


export const CreateTest = () => {
  const [value, setValue] = useState("");
  const { createQuestion } = useActions();
  const [Id, setQuestionId] = useState("");
  const navigate = useNavigate()
  const test = useTypedSelector((i) => i.testReducer.test);
  const state: IUser = useTypedSelector((state) => state.userReducer);
  const currentTest = test.filter(i => i.questionId === Id) 

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const enterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (value.trim().length && e.key === "Enter") {
      e.preventDefault();
      createQuestion({
        question: value,
        answers: [],
        questionId: getId(),
      });
      setValue("");
    }
    return;
  };

  return (
    <div className={styles.container}>
      <button onClick={() => navigate(-1)}>go back</button>

      <Link to={`/${state.user?.userName}/save-options`}>save </Link>
      
      <ScrollableTabsButtonVisible setQuestionId={setQuestionId} />
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
      
      {currentTest.length ? (

        <Question
          question={currentTest[0].question}
          answers={currentTest[0].answers}
          id={currentTest[0].questionId}
        />
      ) : (
        
        test.length ?
        <Question
        question={test[0].question}
        answers={test[0].answers}
        id={test[0].questionId}
      /> : ""
      )}


    </div>
  );
};
