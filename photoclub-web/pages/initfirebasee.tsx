import { getFirestore, collection, getDocs } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage, ref } from "firebase/storage";

export default function FirebaseInit() {
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBU9OvJ15hPXmQU0JDUykSIeNgHsatKzc",
  authDomain: "photoclub-281c2.firebaseapp.com",
  projectId: "photoclub-281c2",
  storageBucket: "photoclub-281c2.firebaseapp.com",
  messagingSenderId: "60265097004",
  appId: "1:60265097004:web:afc557220ee747a5e7ee89",
  measurementId: "G-NN51Y5620H"
};

// Initialize Firebase
console.log(firebaseConfig.apiKey);
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const picRef = ref(storage, 'images');
const db = getFirestore(app);
return db;
};

