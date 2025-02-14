// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "my-web-projects-1b67d.firebaseapp.com",
  projectId: "my-web-projects-1b67d",
  storageBucket: "my-web-projects-1b67d.firebasestorage.app",
  messagingSenderId: "367034112953",
  appId: "1:367034112953:web:47eecf334c08b72307f468",
  measurementId: "G-7JYC299GJH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);