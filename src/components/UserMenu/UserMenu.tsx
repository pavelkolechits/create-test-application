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
    navigate("/");
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
      <Button style={{ marginTop: "30px" }} variant="text">
        <Link to={`/${user.user?.userName}/create-test`}> New test</Link>
      </Button>
      <Button style={{ marginTop: "30px" }} variant="text">
        <Link to={`/${user.user?.userName}/help`}> Help ?</Link>
      </Button>
      <Button style={{ marginTop: "30px" }} variant="text">
        <Link to={`/${user.user?.userName}/tests-page`}> my tests</Link>
      </Button>
      <Button onClick={logout} style={{ marginTop: "30px" }} variant="text">
        Log out
      </Button>
    </div>
  );
};
