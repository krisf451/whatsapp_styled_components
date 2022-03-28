import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtlQq7HkqJnkyofbRwLrefl8vik-lhJUE",
  authDomain: "whatsapp-ksf.firebaseapp.com",
  projectId: "whatsapp-ksf",
  storageBucket: "whatsapp-ksf.appspot.com",
  messagingSenderId: "510759523883",
  appId: "1:510759523883:web:f44c7c2e636fb65294fc6e",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { db, auth, provider };
