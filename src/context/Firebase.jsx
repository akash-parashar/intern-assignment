import { createContext, useContext,useState,useEffect } from "react";
const FirebaseContext = createContext(null);
import {initializeApp} from "firebase/app"
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC8AmAb7nYA9nAHqe1zmfS_2jmNZiD3jnk",
  authDomain: "intern-7f5b8.firebaseapp.com",
  projectId: "intern-7f5b8",
  storageBucket: "intern-7f5b8.appspot.com",
  messagingSenderId: "204457434917",
  appId: "1:204457434917:web:c1c8097090a0c8258c04cc",
  measurementId: "G-1RFJRX4R6K",
};


export const useFireabase =()=> useContext(FirebaseContext);

const fireabseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth();

export const FirebaseProvider = (props) => {
  const[user,setUser]=useState(null);
useEffect(()=>{
  onAuthStateChanged(firebaseAuth,user=>{
 if(user)setUser(user)
 else setUser(null)

  })
},[])


    const signupUserWithEmailAndPassword = (email,password)=>createUserWithEmailAndPassword(firebaseAuth,email,password)
    const signinUserWithEmailAndPassword =(email,password)=> signInWithEmailAndPassword(firebaseAuth,email,password)

    const isLoggedIn = user?true:false;

  return <FirebaseContext.Provider value={{signupUserWithEmailAndPassword,signinUserWithEmailAndPassword,isLoggedIn}}>{props.children}</FirebaseContext.Provider>;
};



