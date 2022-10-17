import styles from "./chat.module.scss";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import React, { FC, useState } from "react";
import { db } from "../../firebase";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IUser } from "../../types/user";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Message } from "../Message/Message";
import firebase from "firebase/compat/app";
import { style } from "@mui/system";
import {getDateObject} from "../../helpers/getDateObject"

interface IUserMessage {
  user: string;
  photo: string;
  text: string;
  cretedAt: string;
}
interface IChatProps {
  setShowChat: (isShowed: boolean) => void;
}

export const Chat: FC<IChatProps> = ({ setShowChat }) => {
  const [value, setValue] = useState("");
  const state: IUser = useTypedSelector((state) => state.userReducer);
  const [messages, loading] = useCollectionData(
    db.collection("messages").orderBy("createdAt") as any
  );
  const [closeAnimation, setCloseAnimation] = useState(false)

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  // const getDate = (date: number) => {
  //   return {
  //     day: new Date(date).getDay(),
  //     hour: new Date(date).getHours(),
  //     minutes: new Date(date).getMinutes(),
  //     month: new Date(date).getMonth(),
  //     dayOfMonth: new Date(date).getUTCDate(),
  //   };
  // };
  const closeChat = () => {
    setCloseAnimation(true)
    setTimeout(() => {
      setShowChat(false)
      setCloseAnimation(false)

    },500)
  }

  const sendMessage = () => {
    if (!value.trim().length) {
      return;
    }
    db.collection("messages").add({
      user: state.user?.userName,
      photo: state.user?.photo,
      text: value,
      createdAt: new Date().getTime(),
      email: state.user?.email,
    });
    setValue("");

  }
  const enterHandler = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if(event.key === "Enter"){
      sendMessage()
    }
  }

  const onClickHandler = () => {
    sendMessage()
  };
  return (
    <div className={!closeAnimation ? styles["show-chat"] : styles["close-chat"] }>
      <div className={styles["message-window"]}>
        <div className={styles["message-container"]}>
          {messages?.map((i) => (
            <Message
              key={i.createdAt}
              photo={i.photo}
              userName={i.user}
              message={i.text}
              isYou={state.user?.email === i.email}
              createdAt={getDateObject(i.createdAt)}
            />
          ))}
        </div>
      </div>
      <textarea
      onKeyDown={enterHandler}
        rows={5}
        value={value}
        onChange={onChangeHandler}
        className={styles["text-field"]}
      ></textarea>
      <div className={styles["button-container"]}>
        <Button
          style={{ backgroundColor: "rgb(15, 62, 94)" }}
          onClick={closeChat}
          variant="contained"
        >
          close
        </Button>
        <Button
          style={{
            width: "80%",
            marginLeft: "5px",
            backgroundColor: "rgb(15, 62, 94)",
          }}
          onClick={onClickHandler}
          variant="contained"
        >
          send
        </Button>
      </div>
    </div>
  );
};
