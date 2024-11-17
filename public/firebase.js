
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
// "firebase/app";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
// "firebase/firestore";
import dotenv from 'dotenv';

// Load the environment variables from the .env file
dotenv.config();

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    // apiKey: "AIzaSyAntNiYvmBQ7qQLd71SiR0d3FkwuOqYbOc",
    // authDomain: "col-survey.firebaseapp.com",
    projectId: "col-survey",
    storageBucket: "col-survey.firebasestorage.app",
    messagingSenderId: "132564655754",
    appId: "1:132564655754:web:f6ae983e3e32ba3dd29773",
    measurementId: "G-R47NTS9576",
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.FIREBASE_PROJECT_ID,
    // storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.FIREBASE_APP_ID,
    // measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export { db, firebaseConfig }