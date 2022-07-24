import React, { FC } from "react";
import styles from "./message.module.scss";
import { Avatar } from "@mui/material";

interface IMessageProps {
  photo: string;
  userName: string;
  message: string;
  createdAt?: string;
  isYou?: boolean;
}

export const Message: FC<IMessageProps> = ({
  photo,
  userName,
  message,
  createdAt,
  isYou,
}) => {
 console.log(new Date(), createdAt) 
  return (
    <div className={styles.container}>
      <div className={styles["message-item"]}>
        <div className={styles.avatar}>
          <Avatar sizes="small" src={photo} />

          <div className={styles["message-wrap"]}>
            <div className={styles["user-name"]}>
              {isYou ? "You" : userName}
            </div>
            <div className={styles.message}>
              {message}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.createdAt}>{createdAt }</div>
    </div>
  );
};
