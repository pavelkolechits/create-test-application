import React, { FC } from "react";
import styles from "./help.module.scss";
import { Button } from "@mui/material";

interface IHelpProps {
  setShowHelp: (isShowed: boolean) => void;
}

export const Help: FC<IHelpProps> = ({ setShowHelp }) => {
  return (
    <div className={styles.container}>
      <div className={styles["modal-window"]}>
        some text
      </div>
      <Button
        onClick={() => setShowHelp(false)}
        style={{
          position: "absolute",
          left: "20px",
          top: "20px",
          color: "#fff",
        }}
        
        variant="text"
      >
        Go back
      </Button>
    </div>
  );
};