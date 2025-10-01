// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-KcxFsgBG0Vvlj5DdVs1FUMKuiWwMSVg",
  authDomain: "ai-trip-planner-95e0a.firebaseapp.com",
  projectId: "ai-trip-planner-95e0a",
  storageBucket: "ai-trip-planner-95e0a.firebasestorage.app",
  messagingSenderId: "926470253638",
  appId: "1:926470253638:web:dcd22cbe15df33144bae47",
  measurementId: "G-BFQ0LTSNNY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);