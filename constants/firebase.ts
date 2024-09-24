// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBmJRxx2TLz77_UJpSSBcgHXzwlabZDzsE",
  authDomain: "portfolio-f4985.firebaseapp.com",
  projectId: "portfolio-f4985",
  storageBucket: "portfolio-f4985.appspot.com",
  messagingSenderId: "417786030616",
  appId: "1:417786030616:web:494a2d1ab70eb6eb25b16d",
  measurementId: "G-41NCNL9DZZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
