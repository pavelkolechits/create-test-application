import React, { memo } from "react";
import { db } from "../../firebase";
import { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { IUser } from "../../types/user";

export const UserPage = () => {
  const state: IUser = useTypedSelector((state) => state.userReducer);

  const usersData: any = [];

  const isValid = () => {
    return !usersData.filter((i: any) => i.email === state.user?.email).length;
  };

  useEffect(() => {
    
    if (state.user) {
      db.collection("users")
        .get()
        .then((i) => i.forEach((i) => usersData.push(i.data())))
        .then(() => {
          if (isValid()) {
            db.collection("users").doc(state.user?.email).set({
              email: state.user?.email,
              userName: state.user?.userName,
              photo: state.user?.photo,
              id: state.user?.uid,
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
    }
  }, []);

  return <div>UserPage</div>;
};
