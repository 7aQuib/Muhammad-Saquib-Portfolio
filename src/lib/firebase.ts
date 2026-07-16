import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDi1gYvmnRO-tbUJNTXUkE7DBrFWm1y4vs",
  authDomain: "muhammad-saquib-portfolio.firebaseapp.com",
  projectId: "muhammad-saquib-portfolio",
  storageBucket: "muhammad-saquib-portfolio.firebasestorage.app",
  messagingSenderId: "1043079020165",
  appId: "1:1043079020165:web:ee118d1d8c43a1424a33ec",
  measurementId: "G-FZVYTW94SV"
};

// Initialize Firebase only once to prevent hydration/hot-reload errors
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { app, db };
