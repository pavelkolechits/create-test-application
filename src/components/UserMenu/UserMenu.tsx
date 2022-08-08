import React, { FC } from "react";
import styles from "./menu.module.scss";
import { Button } from "@mui/material";
import {useTypedSelector} from '../../hooks/useTypedSelector'
import { IUser } from "../../types/user";
import {Link} from 'react-router-dom'

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
  const user: IUser = useTypedSelector(state => state.userReducer)
  const showChat = () => {
    setShowChat(true);
  };
  const saveTestOnClickHandler = () => {
    setShowSaveTestOption(true);
  };

  return (
    <div className={styles.container}>
      <Button style={{ marginTop: "30px" }} onClick={showChat} variant="text">
        Chat
      </Button>
      <Button
        style={{ marginTop: "30px" }}
        variant="text"
      >
        <Link to={`/${user.user?.userName}/create-test`}> New test</Link>
       
      </Button>
      <Button
        style={{ marginTop: "30px" }}
        variant="text"
      >
        <Link to={`/${user.user?.userName}/help`}> Help ?</Link>
        
      </Button>
      <Button style={{ marginTop: "30px" }} variant="text">
        my tests
      </Button>
      {showCreateTest && (
        <Button
          onClick={saveTestOnClickHandler}
          style={{ marginTop: "30px", color: "green" }}
          variant="text"
        >
          save test
        </Button>
      )}
      {showCreateTest && (
        <Button
          onClick={() => setShowCreateTest(false)}
          style={{ marginTop: "30px", color: "#ccc" }}
          variant="text"
        >
          cancel
        </Button>
      )}
    </div>
  );
};
