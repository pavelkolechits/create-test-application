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

export const TimeStamp: FC<ITimeStampProps> = ({ time }) => {
    
  const date = `${time.hour < 10 ? "0" + time.hour : time.hour}:${
    time.minutes < 10 ? "0" + time.minutes : time.minutes
  }  ${time.day === 1 ? "today" : time.dayOfMonth + "." + time.month}`;

  return <div style={{padding: "2px", fontSize: "10px", width: "19%", color: "#ccc"}}>{date}</div>;
};
