import { IQuestion } from "../types/test";


export const createQuestionsNavigate = (test: IQuestion[]) => {
  return  test.map((_, index) =>  index + 1 )
}