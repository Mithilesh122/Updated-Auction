import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyC3Lr3o_5PwSBDi_nixU2NGNaWa0D1o8GQ",
  authDomain: "mighty-brothers.firebaseapp.com",
  projectId: "mighty-brothers",
  storageBucket: "mighty-brothers.appspot.com",
  messagingSenderId: "269432307430",
  appId: "1:269432307430:web:377293994c87038c158527",
  measurementId: "G-4MLPKF2GPC"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
