import React, { FC } from "react";
import styles from "./menu.module.scss";
import { Button } from "@mui/material";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IUser } from "../../types/user";
import { Link } from "react-router-dom";
import { UsersAvatar } from "../Avatar/UsersAvatar";
import { auth } from "../../firebase";
import { useActions } from "../../hooks/useActions";
import { useNavigate } from "react-router-dom";

interface IUserMenuProps {
  setShowChat: (isShowed: boolean) => void;
  setShowCreateTest: (isShowed: boolean) => void;
  showCreateTest: boolean;
  setShowSaveTestOption: (isShowed: boolean) => void;
}

export const UserMenu: FC<IUserMenuProps> = ({
  setShowSaveTestOption,
  setShowChat,
  setShowCreateTest,
  showCreateTest,
}) => {
  const user: IUser = useTypedSelector((state) => state.userReducer);
  const showChat = () => {
    setShowChat(true);
  };
  const saveTestOnClickHandler = () => {
    setShowSaveTestOption(true);
  };
  const { deleteUser } = useActions();
  const navigate = useNavigate();

  const logout = () => {
    auth.signOut();
    deleteUser();
  };

  return (
    <div className={styles.container}>
      <UsersAvatar
        userName={user.user?.userName || " "}
        photo={user.user?.photo}
      />
      <Button style={{ marginTop: "30px" }} onClick={showChat} variant="text">
        Chat
      </Button>

      <Link className={styles.link} to={`/${user.user?.userName}/create-test`}>
        <Button variant="text">New test</Button>
      </Link>

      <Link className={styles.link} to={`/${user.user?.userName}/help`}>
        <Button variant="text"> Help ?</Button>
      </Link>

      <Link className={styles.link} to={`/${user.user?.userName}/tests-page`}>
        <Button variant="text"> my tests</Button>
      </Link>

      <Link className={styles.link} to="/">
        <Button onClick={logout} variant="text">
          Log out
        </Button>
      </Link>
    </div>
  );
};
