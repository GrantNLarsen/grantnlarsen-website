// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGMKqUEKb4O3fytrDNeKUEZEIYpfQzFKc",
  authDomain: "grant-n-larsen.firebaseapp.com",
  projectId: "grant-n-larsen",
  storageBucket: "grant-n-larsen.appspot.com",
  messagingSenderId: "722494370585",
  appId: "1:722494370585:web:fb6a909c2d79a4d6810b88",
  measurementId: "G-B6PBR86Y30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);