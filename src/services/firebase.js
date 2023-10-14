// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGEh2-fvdg_88ratZj_EKLfJPonWhfOlE",
  authDomain: "coderhouse-57985-db5c4.firebaseapp.com",
  projectId: "coderhouse-57985-db5c4",
  storageBucket: "coderhouse-57985-db5c4.appspot.com",
  messagingSenderId: "1044938413440",
  appId: "1:1044938413440:web:a42b641b548a8001da5d65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()