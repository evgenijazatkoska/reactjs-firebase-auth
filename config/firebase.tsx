import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAJ72hNQUtZgt84IL86nz_5o6smRJYAf04",
  authDomain: "nextjs-firebase-auth-a4ebe.firebaseapp.com",
  projectId: "nextjs-firebase-auth-a4ebe",
  storageBucket: "nextjs-firebase-auth-a4ebe.appspot.com",
  messagingSenderId: "829314788138",
  appId: "1:829314788138:web:2084113d0fc729b8000c53"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth()