import React, { FC } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

interface IGoBackProps {
  color?: string;
  fontSize?: string;
  position?: string;
  top?: string;
  left?: string


  
}

export const GoBack: FC<IGoBackProps> = ({ color, fontSize, position, top, left }) => {
  const navigate = useNavigate();
  return (
    <Button  sx={{ color, fontSize }} onClick={() => navigate(-1)}>
      <KeyboardBackspaceIcon style={{ color, fontSize , margin: "0 5px"}} />
    Back
    </Button>
  );
};
