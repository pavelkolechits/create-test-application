import React, { FC } from "react";
import styles from "./menu.module.scss";
import { Button } from "@mui/material";

interface IUserMenuProps {
  setShowChat: (isShowed: boolean) => void
}


export const UserMenu: FC<IUserMenuProps> = ({setShowChat}) => {
const showChat = () => {
  setShowChat(true)
}

  return (
    <div className={styles.container}>
      <Button onClick={showChat} color="success" variant="contained">Chat</Button>
      <Button color="success" variant="contained">New test</Button>
      <Button color="success" variant="contained">Help ?</Button>
      <Button color="success" variant="contained">my tests</Button>
   
    </div>
  );
};
