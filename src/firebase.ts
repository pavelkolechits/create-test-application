import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

import {useAuthState} from "react-firebase-hooks/auth"
import {useTypedSelector} from './hooks/useTypedSelector'
import {useDispatch} from 'react-redux'


firebase.initializeApp({
  apiKey: "AIzaSyCUb7UD3oYo1NuZmRaM-u-fP4ZhGfi7Pms",
  authDomain: "tests-2-b61ec.firebaseapp.com",
  projectId: "tests-2-b61ec",
  storageBucket: "tests-2-b61ec.appspot.com",
  messagingSenderId: "693023376991",
  appId: "1:693023376991:web:1e53fc74254bc174907dea",
  measurementId: "G-CC44LJ7EYJ",
});

export const auth = firebase.auth();
export const db = firebase.firestore();

