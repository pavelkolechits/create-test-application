import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import styles from "./appbar.module.scss";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { useActions } from "../../hooks/useActions";

export const Appbar = () => {
  const navigate = useNavigate();
  const {deleteUser} = useActions()

  const logout = () => {
    auth.signOut();
    navigate("/");
    deleteUser()
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
            News
          </Typography>
          <Link className={styles.link} to="/login">
            {" "}
            <Button color="inherit">Login</Button>
          </Link>
          <Button onClick={logout} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
