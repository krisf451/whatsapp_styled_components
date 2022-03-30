import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAtlQq7HkqJnkyofbRwLrefl8vik-lhJUE",
  authDomain: "whatsapp-ksf.firebaseapp.com",
  projectId: "whatsapp-ksf",
  storageBucket: "whatsapp-ksf.appspot.com",
  messagingSenderId: "510759523883",
  appId: "1:510759523883:web:f44c7c2e636fb65294fc6e",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
