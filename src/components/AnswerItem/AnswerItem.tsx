import React, { FC, useState } from "react";
import styles from "./answer.module.scss";
import { Checkbox } from "@mui/material";
import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DeleteTwoToneIcon from "@mui/icons-material/DeleteTwoTone";

interface IAnswerItemProps {
  text: string;
}

export const AnswerItem: FC<IAnswerItemProps> = ({ text }) => {
  return (
    <div className={styles.container}>
      <Checkbox color="default" />
      <div className={styles.text}>{text}</div>
      <div className={styles["button-wrap"]}>
        <button>
        <EditTwoToneIcon
          style={{ fontSize: "25px",  color: "green" , cursor: "pointer"}}
        />
        </button>
        <button>
        <DeleteTwoToneIcon
          style={{ fontSize: "25px",  color: "red" , cursor: "pointer"}}
        />
        </button>
      </div>
    </div>
  );
};
