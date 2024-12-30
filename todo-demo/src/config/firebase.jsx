// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//匯入firebase
import {getAuth, GoogleAuthProvider}from "firebase/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpUXnzAc2iwZu7B7FchtKdIyItz3VbHlU",
  authDomain: "react-e0e94.firebaseapp.com",
  projectId: "react-e0e94",
  storageBucket: "react-e0e94.firebasestorage.app",
  messagingSenderId: "930582444209",
  appId: "1:930582444209:web:16ce38d0de9d112433ca90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//匯出
export const auth=getAuth(app);
export const provide=new GoogleAuthProvider();