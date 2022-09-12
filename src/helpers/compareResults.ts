import { IQuestion, IAnswer } from "../types/test";

interface IResult {
  question: string;
  answers: IAnswer[];
}

let result: IQuestion[] | [] = [];

export const compareResults = (
  intialVariant: IQuestion[],
  userVariant: IQuestion[]
) => {



  for (let i = 0; i < intialVariant.length; i++) {
    result = [...result, intialVariant[i]] 
    for (let j = 0; j < intialVariant[i].answers.length; j++) {
      if (
        intialVariant[i].answers[j].isCorrect !==
        userVariant[i].answers[j].isCorrect
      ) {

            console.log(result[i])

      

      Object.defineProperty(result[i].answers[j], "isWrong", {configurable: true})
      Object.defineProperty(result[i].answers[j], "isWrong", { writable: true})
      result[i].answers[j].isWrong = true
        // intialVariant = [
        //   ...intialVariant,
        //   {
        //     ...intialVariant[i],
        //     answers: [
        //       ...intialVariant[i].answers,
        //       { ...intialVariant[i].answers[j], isWrong: true },
        //     ],
        //   },
        // ];


      }
    }
  }
  return intialVariant;
};
