import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWjAthDe2RCsyHgfHcNiJo4o16PRQhxlQ",
  authDomain: "ew-fiegter-project.firebaseapp.com",
  projectId: "ew-fiegter-project",
  storageBucket: "ew-fiegter-project.firebasestorage.app",
  messagingSenderId: "794798799159",
  appId: "1:794798799159:web:09768c2b6e0531cf2142b2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
