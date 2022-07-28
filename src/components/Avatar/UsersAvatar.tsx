import { Avatar } from "@mui/material";
import { FC } from "react";
import styles from "./avatar.module.scss";

interface IAvatarProps {
  photo: string  ;
  userName: string ;
}

export const UsersAvatar: FC<IAvatarProps> = ({ photo, userName }) => {

  return (
    <div className={styles.container}>
      <Avatar sizes="large" src={photo} />
      <span className={styles.name}>{userName}</span>
    </div>
  );
};
