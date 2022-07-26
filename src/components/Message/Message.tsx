import React, { FC } from "react";
import styles from "./message.module.scss";
import { Avatar } from "@mui/material";
import { TimeStamp } from "../TimeStamp/TimeStamp";

interface IMessageProps {
  photo: string;
  userName: string;
  message: string;
  createdAt?: any;
  isYou?: boolean;
}

export const Message: FC<IMessageProps> = ({
  photo,
  userName,
  message,
  createdAt,
  isYou,
}) => {
  if (!isYou) {
    return (
      <div className={styles.container}>
        <div className={styles["message-item"]}>
          <div className={styles.avatar}>
            <Avatar sizes="small" src={photo} />
            <div className={styles["message-wrap"]}>
              <div className={styles["user-name"]}>
                {isYou ? "You" : userName}
              </div>
              <div className={styles.message}>{message}</div>
            </div>
          </div>
        </div>
        <TimeStamp time={createdAt} />
      </div>
    );
  }
  
    return (
      <div className={styles.container}>
        <TimeStamp time={createdAt} />
        <div className={styles["message-item-right"]}>
          <div className={styles["avatar-right"]}>
            <div className={styles["message-wrap"]}>
              <div className={styles["user-name-right"]}>
                {isYou ? "You" : userName}
              </div>
              <div className={styles["message-right"]}>{message}</div>
            </div>
            <Avatar sizes="small" src={photo} />
          </div>
        </div>
      </div>
    );
  
};
