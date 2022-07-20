import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import styles from "./appbar.module.scss";
import { auth } from "../../firebase";
import { useActions } from "../../hooks/useActions";
import { Home } from "@mui/icons-material";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IUser } from "../../types/user";
import { UsersAvatar } from "../Avatar/Avatar";

export const Appbar = () => {
  const state: IUser = useTypedSelector((state) => state.userReducer);
  const { deleteUser } = useActions();

  const logout = () => {
    auth.signOut();
    deleteUser();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color={"secondary"} position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {state.user ? (
              <UsersAvatar
                photo={state.user.photo}
                userName={state.user.userName}
              />
            ) : (
              <Home style={{ marginTop: "9px" }} fontSize="large" />
            )}
          </Typography>
          {state.user ? (
            <Link onClick={logout} className={styles.link} to="/">
              <Button color="inherit">Logout</Button>
            </Link>
          ) : (
            <Link className={styles.link} to="/login">
              <Button color="inherit">Login</Button>
            </Link>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
