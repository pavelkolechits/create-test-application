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

export const LoginPage = () => {
  const { state } = useLocation();
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
    if (state === "signin") {
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
    if (state === "login") {
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
        .catch((i) => alert(i));
    }
  };

  const textFieldStyles = {
    margin: "10px 0",
    font: "#fff",
    input: { caretColor: "#fff", color: "#fff" },
  };

  return (
    <>
      <Link className={styles.link} to="/">
        Go back
      </Link>
      <div className={styles.container}>
        <div className={styles.form}>
          {state === "signin" && (
            <TextField
              onChange={onChangeUserNameHandler}
              value={userNameValue}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              sx={textFieldStyles}
              label="Name"
            />
          )}

          <TextField
            onChange={onChangeEmailHandler}
            value={emailValue}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            sx={textFieldStyles}
            label="Email"
          />
          <TextField
            onChange={onChangePasswordHandler}
            value={passwordValue}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            sx={textFieldStyles}
            id="outlined-password-input"
            label="Password"
            type="password"
          />
          <Button
            onClick={loginWithEmail}
            className={styles["login-button"]}
            variant="outlined"
            sx={{ margin: "auto", color: "#fff", backgroundColor: "#212e5a75" }}
          >
            {state === "signin" ? "Sign in" : "Login"}
          </Button>
        </div>

        <Button
          className={styles["google-login-button"]}
          onClick={loginWithGoogle}
          variant="outlined"
          sx={{ color: "#fff", backgroundColor: "#212e5a75" }}
        >
          {state === "signin" ? "Sign in with Google" : "Login with Google"}
        </Button>
      </div>
    </>
  );
};
