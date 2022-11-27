// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeId9bDEVVzYMBA4sYqHt7wxUDQ3d01kU",
  authDomain: "travelx-62021.firebaseapp.com",
  projectId: "travelx-62021",
  storageBucket: "travelx-62021.appspot.com",
  messagingSenderId: "57897337084",
  appId: "1:57897337084:web:a57e6e3ecafac0a0bf9779",
  measurementId: "G-4LYX8DXMH0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);