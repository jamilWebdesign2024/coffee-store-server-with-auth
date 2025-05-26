// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1fJ3HeL_Dw4nhw2bODbJ-pZlYCfqZ9Tg",
  authDomain: "coffee-store-application-3b9e9.firebaseapp.com",
  projectId: "coffee-store-application-3b9e9",
  storageBucket: "coffee-store-application-3b9e9.firebasestorage.app",
  messagingSenderId: "1098560009668",
  appId: "1:1098560009668:web:9d1a1eed91d3eff46fa091"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

