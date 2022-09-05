import { ITest, IQuestion } from "../types/test";

export const isValidTest = (test: IQuestion[] | []) => {
  return (
    test.length >= 2 &&
    !test.filter(
      (i) => i.answers.length < 2 || !i.answers.filter((i) => i.isCorrect).length
    ).length
  );
};
