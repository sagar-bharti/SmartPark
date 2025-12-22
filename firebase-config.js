// 1. Firebase libraries ko CDN se import karein (Inhe change karna zaroori hai)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// 2. Aapka asli Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRK6QnA0F_MNkSdNiVnNgypt2TzlaVomQ",
  authDomain: "smart-parking-3d52f.firebaseapp.com",
  projectId: "smart-parking-3d52f",
  storageBucket: "smart-parking-3d52f.firebasestorage.app",
  messagingSenderId: "139926831182",
  appId: "1:139926831182:web:14ce31ebdaa2b5acac431f",
  measurementId: "G-JF5GB22R2P"
};

// 3. Firebase ko initialize karein
const app = initializeApp(firebaseConfig);

// 4. Firestore Database ko export karein taaki script.js ise use kar sake
export const db = getFirestore(app);