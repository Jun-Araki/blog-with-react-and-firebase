import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyBgYL4UBdf7As5_EQzjYigA-rMglhC4ii8",
  authDomain: "blog-98df2.firebaseapp.com",
  projectId: "blog-98df2",
  storageBucket: "blog-98df2.firebasestorage.app",
  messagingSenderId: "688243035445",
  appId: "1:688243035445:web:8eebac31c3ab7ccb0e107c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
