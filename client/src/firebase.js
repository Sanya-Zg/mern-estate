// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-53159.firebaseapp.com",
  projectId: "mern-estate-53159",
  storageBucket: "mern-estate-53159.firebasestorage.app",
  messagingSenderId: "939736579303",
  appId: "1:939736579303:web:97f50ee4fe19dd82d67642"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);