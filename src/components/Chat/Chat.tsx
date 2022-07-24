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

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onClickHandler = () => {
    db.collection("messages").add({
      user: state.user?.userName,
      photo: state.user?.photo,
      text: value,
      createdAt: new Date().getTime(),
      email: state.user?.email
    });
    setValue("");
  };
  console.log(messages)
  return (
    <div className={styles.container}>
      <div className={styles["message-window"]}>
        {messages?.map((i) => (
         
            <Message
              key={i.createdAt.seconds}
              photo={i.photo}
              userName={i.user}
              message={i.text}
              isYou={state.user?.email === i.email}
              createdAt={i.createdAt.seconds}
            />
          
        ))}
       
      </div>
      <TextField
        color="secondary"
        style={{ width: "100%" }}
        id="outlined-multiline-static"
        multiline
        rows={5}
        value={value}
        onChange={onChangeHandler}
      />
      <div className={styles["button-container"]}>
        <Button
          onClick={() => setShowChat(false)}
          color="success"
          variant="contained"
        >
          close
        </Button>
        <Button onClick={onClickHandler} color="success" variant="contained">
          send
        </Button>
      </div>
    </div>
  );
};
