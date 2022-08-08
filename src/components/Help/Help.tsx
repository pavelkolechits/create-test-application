import React, { FC } from "react";
import styles from "./help.module.scss";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";



export const Help = () => {
  const navigate = useNavigate()
  return (
    <div className={styles.container}>
      <div className={styles["modal-window"]}>
        some text
        <Button
        onClick={() => navigate(-1)}

        variant="text"
      >
        {/* <Link to="-1"> */}
          Go back
          {/* </Link> */}
        
      </Button>
      </div>
   
    </div>
  );
};
