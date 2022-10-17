import React, { FC , HTMLAttributes } from "react";

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

export const TimeStamp: FC<ITimeStampProps & HTMLAttributes<HTMLDivElement>> = ({ time, className }) => {
  const date = `${formatTime(time.hour)}:${formatTime(time.minutes)}  ${getDate(
    time.dayOfMonth,
    time.month
  )}`;

  return (
    <span className={className}
  
    >
      {date}
    </span>
  );
};
