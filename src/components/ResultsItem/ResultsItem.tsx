import React, { FC, useState, useEffect } from "react";
import { IQuestion } from "../../types/test";
import styles from "./results.module.scss";
import { IAnswer } from "../../types/test";

interface IResultsItemProps {
  wrongAnswers: string[];
  questions: IQuestion[];
}

export const ResultsItem: FC<IResultsItemProps> = ({
  wrongAnswers,
  questions,
}) => {
  const wrongQuestions = questions.filter((i) =>
    i.answers.some((i) => wrongAnswers.includes(i.answerId))
  );
  console.log(wrongQuestions);

  return (
    <div className={styles.container}>
      {wrongQuestions.map((i) => (
        <>
        <h2 style={{color: "#ccc"}}>{i.question}</h2>
        <WrongAnswersList wrongAnswers={wrongAnswers} answers={i.answers}/>
        </>
      ))}
    </div>
  );
};

interface IwrongAnswersListProps {
  answers: IAnswer[];
  wrongAnswers: string[];
 
}

const WrongAnswersList: FC<IwrongAnswersListProps> = ({
  answers,
  wrongAnswers,
}) => {



  return (
    <>
      {answers.map((i) => (
        <li className={wrongAnswers.includes(i.answerId) ? styles.red : styles.green}>{i.answer}</li>
      ))}
    </>
  );
};
