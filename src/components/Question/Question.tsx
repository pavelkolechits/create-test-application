import React, { FC } from 'react'
import styles from './question.module.scss'
import {IAnswer} from '../../types/test'
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import AddCircleOutlineTwoToneIcon from '@mui/icons-material/AddCircleOutlineTwoTone';

interface IQuestionProps {
    question: string;
    answers: IAnswer[],
    id: string;
}


export const Question: FC<IQuestionProps> = ({question, answers, id}) => {
  return (
    <div className={styles.container}>
        <div className={styles.question}>
            <div className={styles["question-text"]}>
            {question}
            </div>
            <div className={styles["question-options"]}>
            <EditTwoToneIcon style={{fontSize: "40px"}}/>
            <DeleteTwoToneIcon style={{fontSize: "40px"}}/>
            <AddCircleOutlineTwoToneIcon style={{fontSize: "40px"}}/>
            </div>
           

        </div>


        <div className={styles.answers}>
            {answers.map(i => i.answer)}
        </div>
    </div>
  )
}
