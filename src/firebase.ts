import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import {useAuthState} from "react-firebase-hooks/auth"
import {useTypedSelector} from './hooks/useTypedSelector'

firebase.initializeApp({
  apiKey: "AIzaSyCUb7UD3oYo1NuZmRaM-u-fP4ZhGfi7Pms",
  authDomain: "tests-2-b61ec.firebaseapp.com",
  projectId: "tests-2-b61ec",
  storageBucket: "tests-2-b61ec.appspot.com",
  messagingSenderId: "693023376991",
  appId: "1:693023376991:web:1e53fc74254bc174907dea",
  measurementId: "G-CC44LJ7EYJ",
});

const auth = firebase.auth();
const firestore = firebase.firestore();


// const [user] = useAuthState(auth as any)
// const state = useTypedSelector(i => i)




// const signUp = async () => {
//   const provider = new firebase.auth.GoogleAuthProvider()
//   const {user} = await auth.signInWithPopup(provider)
//   console.log(user)

// }