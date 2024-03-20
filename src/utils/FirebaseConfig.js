import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBv-Dmew2ywGUdpBM_O_c3tG2rI-GZA0xw",
    authDomain: "whatsapp-clone-77203.firebaseapp.com",
    projectId: "whatsapp-clone-77203",
    storageBucket: "whatsapp-clone-77203.appspot.com",
    messagingSenderId: "962056067567",
    appId: "1:962056067567:web:add1393e0003f394387e1a",
    measurementId: "G-JLKDK692C3"
  };

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
