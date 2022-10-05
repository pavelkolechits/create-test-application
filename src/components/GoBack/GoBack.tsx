import React, { FC } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

interface IGoBackProps {
  color?: string;
  fontSize?: string;
}

export const GoBack: FC<IGoBackProps> = ({ color, fontSize }) => {
  const navigate = useNavigate();
  return (
    <Button sx={{ color, fontSize }} onClick={() => navigate(-1)}>
      <KeyboardBackspaceIcon style={{ color, fontSize , margin: "0 5px"}} />
      Go Back
    </Button>
  );
};
