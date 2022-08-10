import React from 'react'
import styles from './startTest.module.scss'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

export const StartTest = () => {
    const navigate = useNavigate()
  return (
    <div className={styles.container}>
        <button onClick={() => navigate(-1)}>back</button>
        <Button style={{width: "100%"}} variant='text'>start</Button>
    </div>
  )
}
