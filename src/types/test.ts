export interface ITest {
  author?: string | null
  testName?: string | null;
  test: IQuestion[] | [];
  testId?: string | null;
  isPrivate?: false;
  createdAt?: string | null;
  description?: string | null;
}

export interface IQuestion {
  question: string;
  answers: IAnswer[] | [] 
  questionId: string;
}

export interface IAnswer {
  answer: string;
  isCorrect: boolean;
  answerId: string;

  
}

