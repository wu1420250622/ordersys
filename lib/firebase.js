import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCiAs4IAMTm2mpPbQ_Vq7bTaS5vz7FbbIE",
  authDomain: "order-sys-a1.firebaseapp.com",
  projectId: "order-sys-a1",
  storageBucket: "order-sys-a1.firebasestorage.app",
  messagingSenderId: "1028662511602",
  appId: "1:1028662511602:web:b3d2a0924036e79341cd6b",
  measurementId: "G-3FKHCKJK5D"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
