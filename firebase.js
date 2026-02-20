// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA76dLQTZ69G7Wl1fokXuz5dYPXno5UsJE",
  authDomain: "arogyahomeo-fc0ff.firebaseapp.com",
  projectId: "arogyahomeo-fc0ff",
  storageBucket: "arogyahomeo-fc0ff.firebasestorage.app",
  messagingSenderId: "126491644199",
  appId: "1:126491644199:web:58b2452a3fcf8eb4cf5902",
  measurementId: "G-498QMVKZ48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);