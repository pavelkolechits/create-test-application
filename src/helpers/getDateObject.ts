

export const getDateObject = (date: number) => {
    return {
      day: new Date(date).getDay(),
      hour: new Date(date).getHours(),
      minutes: new Date(date).getMinutes(),
      month: new Date(date).getMonth(),
      dayOfMonth: new Date(date).getUTCDate(),
    };
  };