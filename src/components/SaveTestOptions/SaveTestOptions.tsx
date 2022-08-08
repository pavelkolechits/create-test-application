import React, { ChangeEvent, useRef } from "react";
import styles from "./saveTest.module.scss";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useActions } from "../../hooks/useActions";
import { getId } from "../../helpers/getId";

import { db } from "../../firebase";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { IUser } from "../../types/user";



export const SaveTestOptions = () => {
  const { saveTest } = useActions();
  const [labelValue, setLabelValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [testNameValue, setTestNameValue] = useState("");
  const state: IUser = useTypedSelector(i => i.userReducer)
  const test = useTypedSelector(i => i.testReducer)

  const onChangeRadioHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLabelValue(e.target.value);
  };
  const onChangeTestNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTestNameValue(e.target.value);
  };
  const onChangeDescriptionHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setDescriptionValue(e.target.value);
  };
  const saveTestHandler =  () => {
    saveTest({
      testName: testNameValue,
      testId: getId(),
      isPrivate: labelValue === "Private",
      createdAt: new Date().getTime(),
      description: descriptionValue,
    });
     db.collection("users/" + state.user?.email + "/tests").add(test)

  };

  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles["modal-window"]}>
        <TextField
          onChange={onChangeTestNameHandler}
          value={testNameValue}
          style={{ width: "100%" }}
          id="outlined-basic"
          label="Test name"
          variant="outlined"
        />
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
          >
            <FormControlLabel
              value="Private"
              control={
                <Radio onChange={onChangeRadioHandler} color="default" />
              }
              label="Private"
            />
            <FormControlLabel
              value="Public"
              control={
                <Radio onChange={onChangeRadioHandler} color="default" />
              }
              label="Public"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          maxRows={4}
          style={{ margin: "10px 0" }}
          value={descriptionValue}
          onChange={onChangeDescriptionHandler}
        />
        <Button onClick={saveTestHandler} color="success" variant="outlined">
          save
        </Button>
        <Button onClick={() => navigate(-1)} color="success" variant="outlined">
          cancel
        </Button>
      </div>
    </div>
  );
};
