export interface ITest {
    testName: string | null;
    test: IQuestion[] | [];
    testId: string | null;
}

export interface IQuestion {
    question: string;
    answers: IAnswer[] | [];
    questionId: string
}

export interface IAnswer {
    answer: string;
    isCorrect: boolean;
    answerId: string
}