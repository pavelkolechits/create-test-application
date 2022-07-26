import React, { FC } from "react";
import styles from "./menu.module.scss";
import { Button } from "@mui/material";

interface IUserMenuProps {
  setShowChat: (isShowed: boolean) => void;
  setShowHelp: (isShowed: boolean) => void;
}


export const UserMenu: FC<IUserMenuProps> = ({setShowChat, setShowHelp}) => {
const showChat = () => {
  setShowChat(true)
}

  return (
    <div className={styles.container}>
      <Button style={{marginTop: "30px"}} onClick={showChat} variant="text">Chat</Button>
      <Button style={{marginTop: "30px"}} variant="text">New test</Button>
      <Button style={{marginTop: "30px"}} onClick={() => setShowHelp(true)}  variant="text">Help ?</Button>
      <Button style={{marginTop: "30px"}} variant="text">my tests</Button>
   
    </div>
  );
};
