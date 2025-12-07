import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB51mKyvcmN1Gkg23jxdRhSmMFl4mLzCpE",
  authDomain: "mytodos-397cd.firebaseapp.com",
  projectId: "mytodos-397cd",
  storageBucket: "mytodos-397cd.firebasestorage.app",
  messagingSenderId: "978416217516",
  appId: "1:978416217516:web:cbaad7f40bc6097fd2de09"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);