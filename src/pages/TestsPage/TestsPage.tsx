import React from 'react'
import { db } from '../../firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { IUser } from '../../types/user';


export const TestsPage = () => {
  const userState: IUser = useTypedSelector(i => i.userReducer)

  const [tests, loading] = useCollectionData(
    db.collection("users/" + userState.user?.email + "/tests") as any
  );


  return (
    <div>
      {tests?.map(i => <h2 style={{color: "#fff"}}>{i.testName}</h2>)}
    </div>
  )
}
