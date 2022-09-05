import React, { FC, useState } from "react";
import styles from "./answer.module.scss";
import { Checkbox } from "@mui/material";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";
import { useActions } from "../../hooks/useActions";
import { EditAnswer } from "../EditAnswer/EditAnswer";

interface IAnswerItemProps {
  text: string;
  answerId: string;
  questionId: string;
  isChecked: boolean;
}

export const AnswerItem: FC<IAnswerItemProps> = ({
  text,
  answerId,
  questionId,
  isChecked,
}) => {
  const { selectRightAnswer, deleteAnswer } = useActions();
  const [showArea, setShowArea] = useState(false);

  return (
    <div className={styles.container}>
      <Checkbox
        sx={{ color: "#ffffff50" }}
        onChange={() => selectRightAnswer({ answerId, questionId })}
        checked={isChecked}
        color="default"
      />
      {showArea ? (
        <EditAnswer
          setShowArea={setShowArea}
          questionId={questionId}
          answerId={answerId}
          text={text}
        />
      ) : (
        <div className={styles.text}>{text}</div>
      )}

      <div className={styles["button-wrap"]}>
        <button
          style={{ margin: " 0 5px", backgroundColor: "#ffffff10" }}
          onClick={() => setShowArea(true)}
        >
          <EditTwoToneIcon
            style={{ fontSize: "25px", color: "green", cursor: "pointer" }}
          />
        </button>
        <button
          style={{ margin: " 0 5px", backgroundColor: "#ffffff10" }}
          onClick={() => deleteAnswer({ answerId, questionId })}
        >
          <DeleteTwoToneIcon
            style={{ fontSize: "25px", color: "red", cursor: "pointer" }}
          />
        </button>
      </div>
    </div>
  );
};
