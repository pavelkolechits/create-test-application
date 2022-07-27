import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import { FC, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface ITabsProps {
  setTestNumber: (index: number) => void;
}

export const ScrollableTabsButtonVisible: FC<ITabsProps> = ({
  setTestNumber,
}) => {
  const [value, setValue] = useState(0);
  const questons = useTypedSelector((i) => i.testReducer.test);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        maxWidth: "100%",
        bgcolor: "#ccc",
        border: "1px solid #000",
        marginBottom: "5px",
        borderRadius: "3px",
      }}
    >
      <span style={{ fontFamily: " Arial, Helvetica, sans-serif" }}>
        The numbers of questions:
      </span>

      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
      >
        {questons.map((_, index) => (
          <Tab
            onClick={() => setTestNumber(index)}
            style={{ fontSize: "20px" }}
            label={index + 1}
          />
        ))}
      </Tabs>
    </Box>
  );
};