import styles from "./chat.module.scss";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import { FC, useState } from "react";
import { db } from "../../firebase";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IUser } from "../../types/user";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Message } from "../Message/Message";
import firebase from "firebase/compat/app";

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

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  const getDate = (date: number) => {

     return {
      day: new Date(date).getDay(),
      hour: new Date(date).getHours(),
      minutes: new Date(date).getMinutes(),
      month: new Date(date).getMonth(),
      dayOfMonth: new Date(date).getUTCDate()

     } 
     

  }

  const onClickHandler = () => {
    if(!value.trim().length){
      return
    }
    db.collection("messages").add({
      user: state.user?.userName,
      photo: state.user?.photo,
      text: value,
      createdAt: new Date().getTime(),
      email: state.user?.email,
    });
    setValue("");
  };
  console.log(messages, );
  return (
    <div className={styles.container}>
      <div className={styles["message-window"]}>
        <div className={styles["message-container"]}>
          {messages?.map((i) => (
            <Message
              key={i.createdAt}
              photo={i.photo}
              userName={i.user}
              message={i.text}
              isYou={state.user?.email === i.email}
              createdAt={ getDate(i.createdAt)}
            />
          ))}
        </div>
      </div>
      <textarea
        rows={5}
        value={value}
        onChange={onChangeHandler}
        className={styles["text-field"]}
      ></textarea>
      {/* <TextField
      className={styles["text-field"]}
      sx={{
        color: "#ccc"
      }}
        style={{ width: "100%", color: "#ccc" }}
        id="outlined-multiline-static"
        multiline
        rows={5}
        value={value}
        onChange={onChangeHandler}
      /> */}
      <div className={styles["button-container"]}>
        <Button
        className={styles["close-button"]}
          onClick={() => setShowChat(false)}
          variant="contained"
        >
          close
        </Button>
        <Button className={styles["send-message-button"]} onClick={onClickHandler}  variant="contained">
          send
        </Button>
      </div>
    </div>
  );
};
