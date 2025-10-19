
import { getAuth } from "firebase/auth";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV7YORGf5GoSqzzlUq8qF6fDsDbuRZ-jw",
  authDomain: "test-project-95ea9.firebaseapp.com",
  projectId: "test-project-95ea9",
  storageBucket: "test-project-95ea9.firebasestorage.app",
  messagingSenderId: "393703631979",
  appId: "1:393703631979:web:d814d28bba23024f53552e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
