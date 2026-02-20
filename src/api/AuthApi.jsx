// src/api/AuthApi.jsx
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const AuthApi = {
  // Register new user
  registerUser: async (email, password, role = "user") => {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    const docRef = doc(db, "users", user.uid);

    await setDoc(docRef, {
      email: user.email,
      role,
    });

    return { uid: user.uid, email: user.email, role };
  },

  // Login existing user
  loginUser: async (email, password) => {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    // If user doc does not exist, create default one
    if (!docSnap.exists()) {
      await setDoc(docRef, {
        email: user.email,
        role: "user",
      });

      return { uid: user.uid, email: user.email, role: "user" };
    }

    return {
      uid: user.uid,
      email: user.email,
      role: docSnap.data().role,
    };
  },

  // Login with Google
  loginWithGoogle: async () => {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;

    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      await setDoc(docRef, {
        email: user.email,
        role: "user",
      });

      return { uid: user.uid, email: user.email, role: "user" };
    }

    return {
      uid: user.uid,
      email: user.email,
      role: docSnap.data().role,
    };
  },

  // Logout
  logout: async () => {
    await signOut(auth);
  },
};

export default AuthApi;