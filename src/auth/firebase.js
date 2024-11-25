import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAb0X_XpU-iHobF8X4JSlqTUS6I0NcwtJc",
  authDomain: "sportsease-98642.firebaseapp.com",
  projectId: "sportsease-98642",
  storageBucket: "sportsease-98642.firebasestorage.app",
  messagingSenderId: "369092487013",
  appId: "1:369092487013:web:ea5dfa63136c9402cd238c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app); // For authentication
const googleProvider = new GoogleAuthProvider(); // Google Auth provider
const db = getFirestore(app); // For Firestore database
export { auth, googleProvider, db };