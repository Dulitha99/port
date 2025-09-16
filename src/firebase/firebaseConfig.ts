import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3F5X_njHNde7X1P_iWDfw467mexmffbg",
  authDomain: "portfolio-1690b.firebaseapp.com",
  projectId: "portfolio-1690b",
  storageBucket: "portfolio-1690b.appspot.com", // Corrected the storage bucket URL
  messagingSenderId: "254291746246",
  appId: "1:254291746246:web:6c5c6cd322caa0ffe2a6c7",
  measurementId: "G-5YGHEPF1EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default firebaseConfig;
