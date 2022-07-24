import React from 'react'
import { auth, db } from '../firebase'

export const TestPage = () => {

       


        db.collection('users/pavelkolechits@gmail.com/tests').onSnapshot(i=> i.forEach(i => console.log(i.data())))
      

    









  return (
    <div>TestPage</div>
  )
}
