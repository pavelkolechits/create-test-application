import React, { FC, useState, useEffect } from "react";
import { IQuestion } from "../../types/test";
import styles from "./results.module.scss";
import { IAnswer } from "../../types/test";
import { AnswerItem } from "../AnswerItem/AnswerItem";

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

  const countPer = (questions: IQuestion[]) => {
  
    return +(((questions.length - wrongQuestions.length) / questions.length) * 100).toFixed(0);
  };

  return (
    <div className={styles.container}>
      <p style={{ textAlign: "center", color: "#ccc" }}>
        {countPer(questions) === 100
          ? "Congratulations! Yor result is 100%"
          : `Yor result is ${countPer(questions)}%`}
      </p>

      {wrongQuestions.map((i) => (
        <>
          <h2 style={{ color: "#ccc" }}>{i.question}</h2>

          <WrongAnswersList
            questionId={i.questionId}
            wrongAnswers={wrongAnswers}
            answers={i.answers}
          />
        </>
      ))}
    </div>
  );
};

interface IwrongAnswersListProps {
  answers: IAnswer[];
  wrongAnswers: string[];
  questionId: string;
}

const WrongAnswersList: FC<IwrongAnswersListProps> = ({
  answers,
  wrongAnswers,
  questionId,
}) => {
 
  return (
    <>
      {answers.map((i) => (
        <AnswerItem
          questionId={questionId}
          text={i.answer}
          key={i.answerId}
          answerId={i.answerId}
          isChecked={i.isCorrect}
          hiddenIcons
          disabledCheckBox
          color={wrongAnswers.includes(i.answerId) ? "#ff1d1d99" : "#209120a1"}
        />
      ))}
    </>
  );
};
