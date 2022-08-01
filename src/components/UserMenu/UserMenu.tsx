import React, { FC } from "react";
import styles from "./menu.module.scss";
import { Button } from "@mui/material";

interface IUserMenuProps {
  setShowChat: (isShowed: boolean) => void;
  setShowHelp: (isShowed: boolean) => void;
  setShowCreateTest: (isShowed: boolean) => void;
  showCreateTest: boolean
}


export const UserMenu: FC<IUserMenuProps> = ({setShowChat, setShowHelp, setShowCreateTest, showCreateTest}) => {
const showChat = () => {
  setShowChat(true)
}

  return (
    <div className={styles.container}>
      <Button style={{marginTop: "30px"}} onClick={showChat} variant="text">Chat</Button>
      <Button  onClick={() => setShowCreateTest(true)} style={{marginTop: "30px"}} variant="text">New test</Button>
      <Button style={{marginTop: "30px"}} onClick={() => setShowHelp(true)}  variant="text">Help ?</Button>
      <Button style={{marginTop: "30px"}} variant="text">my tests</Button>
      {showCreateTest && <Button style={{marginTop: "30px", color: "green"}} variant="text">save test</Button>}
      {showCreateTest && <Button onClick={() => setShowCreateTest(false)} style={{marginTop: "30px", color: "#ccc"}} variant="text">cancel</Button>}
    </div>
  );
};
