import React, { FC, useState, ChangeEvent } from "react";
import styles from "./solveAnswerItem.module.scss";
import { Checkbox } from "@mui/material";
import { useActions } from "../../hooks/useActions";
import {AnswerItem} from "../AnswerItem/AnswerItem"

interface ISolveAnswerItemProps {
  answerId: string;
  isSelected: boolean;
  questionId: string;
  answer: string
}

export const SolveAnswerItem: FC<ISolveAnswerItemProps> = ({
  answerId,
  isSelected,
  questionId,
  answer,
}) => {
  const { selectAnswer } = useActions();
    const [selectRigthAnswer, setSelectRigthAnswer] = useState(isSelected);

  return (
    
    <div className={styles.container}>
      <Checkbox
        sx={{color: "#ccc"}}
        onChange={() => selectAnswer({ answerId, questionId })}
        checked={isSelected}
      />
      <div style={{color: "#fff"}} >{answer}</div>
    </div>
  );
};
