// Carica gli SDK necessari (versione compatibile v9 modulare)
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getAuth }         from "https://www.gstatic.com/firebasejs/9.22.2/firebase-auth.js";
import { getFirestore }    from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBTc-IEX2IlfQXwL2n-r-lbWepxys0dEco",
  authDomain: "prenotazioni-app-87467.firebaseapp.com",
  projectId: "prenotazioni-app-87467",
  storageBucket: "prenotazioni-app-87467.firebasestorage.app",
  messagingSenderId: "322391103742",
  appId: "1:322391103742:web:6f74e033b57281bdaaedaf"
};
const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

// Esporta per poterli usare in tutti gli script
export { auth, db };
