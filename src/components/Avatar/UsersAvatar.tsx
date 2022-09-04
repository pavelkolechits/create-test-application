import { Avatar } from "@mui/material";
import { fontSize } from "@mui/system";
import { FC } from "react";
import styles from "./avatar.module.scss";

interface IAvatarProps {
  photo?: string | null;
  userName: string ;
}

export const UsersAvatar: FC<IAvatarProps> = ({ photo, userName }) => {
  return (
    <div className={styles.container}>
      {photo ? (
        <Avatar sx={{width: "70px",
        height: "70px",}} sizes="large" src={photo} />
      ) : (
        <div
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "50%",
            backgroundColor: "green",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "50px",
            color: "#fff"

          }}
        >
          {userName[0]}
        </div>
      )}

      <div className={styles.name}>{userName}</div>
    </div>
  );
};
