import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { FC, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface ITabsProps {
  setQuestionId: (questionId: string) => void;
}

export const ScrollableTabsButtonVisible: FC<ITabsProps> = ({
  setQuestionId,
}) => {
  const [value, setValue] = useState(0);
  const questons = useTypedSelector((i) => i.testReducer.test);

  // const onClickHandler = (i: number , id: string) => {
  //   setValue(i);
  //   setQuestionId(id)
  // }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => setValue(newValue);

  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: "100%",
        bgcolor: "inherit",
        border: "1px solid #ffffff50",
        margin: "5px 0 ",
        borderRadius: "3px",
      }}
    >
      <span
        style={{
          fontFamily: " Arial, Helvetica, sans-serif",
          color: "#ffffff50",
        }}
      >
        The numbers of questions:
      </span>

      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
      >
        {questons.map((i, index) => (
          <Tab
            key={index}
            onClick={() => setQuestionId(i.questionId)}
            style={{ fontSize: "20px", color: "#ffffff50" }}
            label={index + 1}
          />
        ))}
      </Tabs>
    </Box>
  );
};
