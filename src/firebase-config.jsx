
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  


const firebaseConfig = {
  apiKey: "AIzaSyCWynzbvZwJYqYDdylqApYNblBorLQueI8",
  authDomain: "coder-react-daniela-romero.firebaseapp.com",
  projectId: "coder-react-daniela-romero",
  storageBucket: "coder-react-daniela-romero.firebasestorage.app",
  messagingSenderId: "936307011260",
  appId: "1:936307011260:web:ba3d81784263a06859eab9",
  measurementId: "G-6JJJ9G2WLM"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


