import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3F5X_njHNde7X1P_iWDfw467mexmffbg",
  authDomain: "portfolio-1690b.firebaseapp.com",
  projectId: "portfolio-1690b",
  storageBucket: "portfolio-1690b.firebasestorage.app",
  messagingSenderId: "254291746246",
  appId: "1:254291746246:web:6c5c6cd322caa0ffe2a6c7",
  measurementId: "G-5YGHEPF1EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Analytics (only in browser environment)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

// Connect to emulators in development
if (import.meta.env.DEV) {
  try {
    connectAuthEmulator(auth, "http://localhost:9099");
    connectFirestoreEmulator(db, 'localhost', 8080);
  } catch (error) {
    console.log('Firebase emulators not running, using production services');
  }
}

export default app;
