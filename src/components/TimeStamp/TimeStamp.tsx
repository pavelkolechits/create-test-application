import React, { FC } from "react";

interface ITimeStampProps {
  time: {
    day: number;
    hour: number;
    minutes: number;
    month: number;
    dayOfMonth: number;
  };
}

const formatTime = (time: number) => {
  return time < 10 ? "0" + time : time;
};

const getDate = (day: number, month: number) => {
  return day === new Date().getUTCDate()
    ? "today"
    : formatTime(day) + "." + formatTime(month);
};

export const TimeStamp: FC<ITimeStampProps> = ({ time }) => {
  const date = `${formatTime(time.hour)}:${formatTime(time.minutes)}  ${getDate(
    time.dayOfMonth,
    time.month
  )}`;

  return (
    <div
      style={{ padding: "2px", fontSize: "10px", width: "19%", color: "#ccc" }}
    >
      {date}
    </div>
  );
};
