// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.envVITE_apiKey,
  authDomain:import.meta.envVITE_authDomain,
  projectId:import.meta.envVITE_projectId,
  storageBucket:import.meta.envVITE_storageBucket,
  messagingSenderId:import.meta.envVITE_messagingSenderId,
  appId:import.meta.env.VITE_appId, 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

