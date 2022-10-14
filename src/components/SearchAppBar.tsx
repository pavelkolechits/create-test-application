import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { GoBack } from "./GoBack/GoBack";


const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export const SearchAppBar = () => {
  const { getSearchParamsBy, getSearchParamsValue } = useActions();
  const { searchBy, value } = useTypedSelector((i) => i.searchReducer);
  const [inputValue, setInputValue] = useState(value);

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      getSearchParamsValue(inputValue);
    }
    return;
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const [alignment, setAlignment] = React.useState(
    searchBy === "testName" ? "Test Name" : searchBy
  );

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
       
            <GoBack color="#fff"/>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onKeyDown={onKeyDownHandler}
              onChange={onChangeHandler}
              placeholder="Search…"
              value={inputValue}
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <ToggleButtonGroup
            sx={{ margin: "0 10px", backgroundColor: "#fff" }}
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            // aria-label="Platform"
          >
            <ToggleButton onClick={() => getSearchParamsBy("all")} value="all">
              all
            </ToggleButton>
            <ToggleButton
              onClick={() => getSearchParamsBy("author")}
              value="author"
            >
              Author
            </ToggleButton>
            <ToggleButton
              onClick={() => getSearchParamsBy("description")}
              value="description"
            >
              Description
            </ToggleButton>
            <ToggleButton
              onClick={() => getSearchParamsBy("testName")}
              value="Test Name"
            >
              Test Name
            </ToggleButton>
          </ToggleButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
