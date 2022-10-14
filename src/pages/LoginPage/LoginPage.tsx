import { Grid, TextField } from "@mui/material";
import styles from "./loginPage.module.scss";
import Button from "@mui/material/Button";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useState, ChangeEvent } from "react";
import { getAdditionalUserInfo } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { useParams, useLocation } from "react-router-dom";
import { Form } from "../../components/Form/Form";
import { GoBack } from "../../components/GoBack/GoBack";

export const LoginPage = () => {
  const LogInMethod = useLocation().state;
  const { getUser } = useActions();
  const navigate = useNavigate();

  const [userNameValue, setUserNameValue] = useState("");
  const onChangeUserNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserNameValue(e.target.value);
  };
  const [emailValue, setEmailValue] = useState("");
  const onChangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(e.target.value);
  };
  const [passwordValue, setPasswordValue] = useState("");
  const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(e.target.value);
  };

  const loginWithGoogle = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    getUser({
      userName: user?.displayName,
      photo: user?.photoURL,
      email: user?.email,
      uid: user?.uid,
    });
    navigate("/" + user?.displayName);
  };

  const loginWithEmail = () => {
    if (LogInMethod === "signin") {
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then(({ user }) => {
          getUser({
            userName: userNameValue,
            photo: user?.photoURL,
            email: user?.email,
            uid: user?.uid,
          });
          navigate("/" + user?.displayName);
        })
        .catch((i) => alert(i));
    }
    if (LogInMethod === "login") {
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then(({ user }) => {
          getUser({
            userName: user?.displayName,
            photo: user?.photoURL,
            email: user?.email,
            uid: user?.uid,
          });
          navigate("/" + user?.displayName);
        })
        .catch((i) => {
          alert(i);
        });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles["login-box"]}>
        <h2> {LogInMethod === "signin" ? "Sign in" : "Login"}</h2>
        {LogInMethod === "signin" && (
          <div className={styles["user-box"]}>
            <input
              onChange={onChangeUserNameHandler}
              value={userNameValue}
              type="text"
              name=""
              required
            ></input>
            <label>Username</label>
          </div>
        )}

        <form>
          <div className={styles["user-box"]}>
            <input
              onChange={onChangeEmailHandler}
              value={emailValue}
              type="text"
              name=""
              required
            ></input>
            <label>Email</label>
          </div>
          <div className={styles["user-box"]}>
            <input
              onChange={onChangePasswordHandler}
              value={passwordValue}
              type="password"
              name=""
              required
            ></input>
            <label>Password</label>
          </div>
          <a onClick={loginWithEmail}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {LogInMethod === "signin" ? "Sign in" : "Login"}
          </a>
          <a onClick={loginWithGoogle}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Login with Google
          </a>
        </form>
      </div>
    </div>
  );
};
