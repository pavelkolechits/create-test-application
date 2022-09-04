import React, { memo, useMemo } from "react";
import { db, auth } from "../../firebase";
import { useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { IUser } from "../../types/user";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { UserMenu } from "../../components/UserMenu/UserMenu";
import { Chat } from "../../components/Chat/Chat";
import { email, photo, userName } from "../../firebase";
import { useRef } from "react";
import { useActions } from "../../hooks/useActions";
import { useAuthState } from "react-firebase-hooks/auth";
import { Help } from "../../components/Help/Help";
import { CreateTest } from "../../components/CreateTest/CreateTest";
import { SaveTestOptions } from "../../components/SaveTestOptions/SaveTestOptions";
import { Link } from "react-router-dom";
import { UsersAvatar } from "../../components/Avatar/UsersAvatar";

export const UserPage = () => {
  const state: IUser = useTypedSelector((state) => state.userReducer);
  const [showChat, setShowChat] = useState(false);
  const [showCreateTest, setShowCreateTest] = useState(false);
  const { getUser, deleteUser } = useActions();
  const [showSaveTestOption, setShowSaveTestOption] = useState(false);
  

  useEffect(() => {
    if (state.user) {
      db.collection("users")
        .doc(state.user?.email)
        .get()
        .then((doc) => {
          if (!doc.exists) {
            db.collection("users").doc(state.user?.email).set({
              email: state.user?.email,
              photo: state.user?.photo,
              userName: state.user?.userName,
            });
          }
        })
        .then(() => {
          db.collection("users/" + state.user?.email + "/tests")
            .doc("start")
            .set({
              start: new Date(),
            });
        });
    } else {
      if (state.user) {
        db.collection("users").doc(state.user);
      }
    }
  }, []);
  const [user] = useAuthState(auth as any);
  useEffect(() => {
    if (!state.user?.email) {
      getUser({
        userName: user?.displayName,
        photo: user?.photoURL,
        email: user?.email,
      });
    }
  }, [user]);

  return (
    <>
     
      <UserMenu
        setShowSaveTestOption={setShowSaveTestOption}
        showCreateTest={showCreateTest}
        setShowCreateTest={setShowCreateTest}
        setShowChat={setShowChat}
      />
      {showChat && <Chat setShowChat={setShowChat} />}
      {showSaveTestOption && <SaveTestOptions/>}
      {showCreateTest && <CreateTest />}
     
    </>
  );
};
