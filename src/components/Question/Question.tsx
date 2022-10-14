import React, { FC, useState } from "react";
import styles from "./question.module.scss";
import { IAnswer } from "../../types/test";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import AddCircleOutlineTwoToneIcon from "@mui/icons-material/AddCircleOutlineTwoTone";
import { EditArea } from "../EditArea/EditArea";
import { AddAnswerArea } from "../AddAnsverArea/AddAnswerArea";
import { AnswerItem } from "../AnswerItem/AnswerItem";
import { useActions } from "../../hooks/useActions";

interface IQuestionProps {
  question: string;
  answers: IAnswer[];
  id: string;
}

export const Question: FC<IQuestionProps> = ({ question, answers, id }) => {
  const [showEditArea, setShowEditArea] = useState(false);
  const [showAddAnswerArea, setShowAddAnswerArea] = useState(false);
  const { deleteQuestion } = useActions();
  return (
    <div className={styles.container}>
      <div style={showEditArea ? {paddingBottom: "20px"} : {}}  className={styles.question}>
        {!showEditArea ? (
          <div className={styles["question-text"]}>{question}</div>
        ) : (
          <EditArea
            questionId={id}
            value={question}
            setShowEditArea={setShowEditArea}
          />
        )}

        <div className={styles["question-options"]}>
          <button
            onClick={() => setShowEditArea(true)}
            style={{ margin: "5px", cursor: "pointer"  , backgroundColor: "#00000050"}}
          >
            <EditTwoToneIcon style={{ fontSize: "40px", color: "green" }} />
          </button>

          <button
            onClick={() => deleteQuestion({ questionId: id })}
            style={{ margin: "5px" , cursor: "pointer" , backgroundColor: "#00000050" }}
          >
            <DeleteTwoToneIcon style={{ fontSize: "40px", color: "red" }} />
          </button>

     

        </div>
      </div>
   
      <div className={styles.answers}>
    
        <AddAnswerArea
          questionId={id}
          setShowAddAnswerArea={setShowAddAnswerArea}
        />
    
        {answers.map((i) => (
          <AnswerItem isChecked={i.isCorrect} answerId={i.answerId} questionId={id} key={i.answerId} text={i.answer} />
        ))}
      </div>
    </div>
  );
};
