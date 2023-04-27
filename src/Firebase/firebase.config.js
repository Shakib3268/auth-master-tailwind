// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArjOT5eotTIzzMhr2-qHjdAG9652w5ZQ0",
  authDomain: "auth-firebase-context-ta-973f5.firebaseapp.com",
  projectId: "auth-firebase-context-ta-973f5",
  storageBucket: "auth-firebase-context-ta-973f5.appspot.com",
  messagingSenderId: "1023132742780",
  appId: "1:1023132742780:web:ad6fa63ee0aec8ec7545f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app