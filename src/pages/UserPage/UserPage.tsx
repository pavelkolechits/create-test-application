import React, { memo } from "react";
import { db } from "../../firebase";
import { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { IUser } from "../../redux/reducers/user.slice";

export const UserPage = () => {

  const state: IUser = useTypedSelector((state) => state.userReducer);

  const usersData: any = [];

  const isValid = () => {
    return !usersData.filter((i: any) => i.email === state.user?.email).length;
  };

  if (state.user) {
    db.collection("users")
      .get()
      .then((i) => i.forEach((i) => usersData.push(i.data())))
      .then(() => {

        if (isValid()) {

          db.collection("users").add({
            email: state.user?.email,
            name: state.user?.userName,
          });

        }

        console.log(usersData);
      });
  }

  return <div>UserPage</div>;
};
