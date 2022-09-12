
import { IQuestion} from "../types/test";


export const resetAnswers = (test: IQuestion[]) => {
  return test.map(
    (question) =>
      question && {
        ...question,
        answers: [
          ...question.answers.map(
            (answer) => answer && { ...answer, isCorrect: false }
          ),
        ],
      }
  );
};
export const prepareAnswers = (test: IQuestion[]) => {
  return test.map(
    (question) =>
      question && {
        ...question,
        answers: [
          ...question.answers.map(
            (answer) => answer && { ...answer, isWrong: false }
          ),
        ],
      }
  );
};
