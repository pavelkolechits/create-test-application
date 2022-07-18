import { Grid } from "@mui/material";
import styles from "./loginPage.module.scss";
import Button from "@mui/material/Button";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions";

export const LoginPage = () => {
  const { getUser } = useActions();
  const navigate = useNavigate();

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    getUser({
      uid: user?.uid,
      userName: user?.displayName,
      photo: user?.photoURL,
      email: user?.email,
    });
    navigate("/" + user?.displayName);
  };

  return (
    <Grid className={styles.container} maxWidth="sm">
      <Button onClick={login} variant="outlined" color="secondary">
        Login with Google
      </Button>
    </Grid>
  );
};