import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDSWMP_75xQfTaYik8OYccIuVIZN6TeUDk",
    authDomain: "geolocation-based-att.firebaseapp.com",
    projectId: "geolocation-based-att",
    storageBucket: "geolocation-based-att.appspot.com",
    messagingSenderId: "404820306569",
    appId: "1:404820306569:web:364180fc6646a966b9b458",
    measurementId: "G-H8NKC1NPT4"
  };
// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };