// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOrMujQ0NpH7-s5VVE6Q4aQMwYCbMIaIY",
  authDomain: "ivatsiro.firebaseapp.com",
  projectId: "ivatsiro",
  storageBucket: "ivatsiro.appspot.com",
  messagingSenderId: "243818424857",
  appId: "1:243818424857:web:91ff59413dde2285055888",
  measurementId: "G-QW8QD1LEJ5",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
//export const analytics = getAnalytics(app);
