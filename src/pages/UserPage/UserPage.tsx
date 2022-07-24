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

export const UserPage = () => {
  const state: IUser = useTypedSelector((state) => state.userReducer);
  const [showChat, setShowChat] = useState(false);
  const { getUser } = useActions();

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
  },[user])



  return (
    <>
      <UserMenu setShowChat={setShowChat} />
      {showChat && <Chat setShowChat={setShowChat} />}
    </>
  );
};
