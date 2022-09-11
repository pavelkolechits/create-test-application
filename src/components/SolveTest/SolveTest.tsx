import React ,{FC} from 'react'
import styles from "./solveTest.module.scss"
import {IAnswer} from '../../types/test'


interface ISolveTestProps {
    question: string;
    answers: IAnswer[];
}


export const SolveTest: FC<ISolveTestProps> = ({question, answers}) => {
  return (
    <div className={styles.container}>
        <h2 className={styles.question}>{question}</h2>
    </div>
  )
}



